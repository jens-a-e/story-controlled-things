const {
  SingleThing,
  WebThingServer
} = require('webthing');
const {StoryColorSwitch} = require('./things')

const targetID = process.argv[2];

const { promisify } = require('util');
  const { exec: _exec } = require('child_process');
  const { readFile: _readFile } = require('fs');

const exec = promisify(_exec);
const readFile = promisify(_readFile);

/// Record, parse, readin, repeat
async function listen(handler = null) {
  console.error(`Listening to '${targetID}'`);
  await exec('arecord --duration 3 -f s16_LE -r 16000 buffer.wav 2>/dev/null');
  // console.err("recorded", proc);
  await exec(`pocketsphinx_continuous -infile buffer.wav -lm ${targetID}.lm -dict ${targetID}.dic 2>/dev/null > buffer.txt`);
  // console.err("understood", proc);
  const result = (await readFile('buffer.txt')).toString().trim();
  console.log(`Understood: '${result}'`);
  if (handler) await handler(result);
  return result;
}

async function run() {
  const sensor = new StoryColorSwitch();
  const server = new WebThingServer(new SingleThing(sensor), 8887);
  process.on('SIGINT', () => {
    server.stop();
    process.exit();
  });

  server.start();

  // start endless loop
  while(true) {
    await listen(async function(hearhear) {
      console.log("I heard", hearhear);
      sensor.color = parseInt(100.0 * Math.random());
    }); 
  }
}

try {
  run();
} catch(err) {
  console.error(err);
}
