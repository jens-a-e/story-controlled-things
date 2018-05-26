/// Spawning
// const { spawn } = require('child_process');
// pocketsphinx_continuous -inmic yes -samprate 44100 -nfft 2048 -lm 6914.lm -dict 6914.dic
// const ps = spawn('pocketsphinx_continuous', ['-inmic', 'yes', '-samprate', 44100, '-nfft', 2048, '-lm', '6914.lm', '-dict', '6914.dic']);

// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function(line){
//   console.error("RAW Line", line);
//   if (line !== "Listening..." && line !== "READY....") {
//     console.log("Got", line);
//   }
// });

/// Record, parse, readin, repeat
function listen(loop = null) {
  console.error("Listeing...")
  const { execSync } = require('child_process');
  const { readFileSync } = require('fs');
  execSync('arecord --duration 3 -f s16_LE -r 16000 buffer.wav 2>/dev/null');
  execSync('pocketsphinx_continuous -infile buffer.wav -lm 0916.lm -dict 0916.dic 2>/dev/null > buffer.txt');
  const result = readFileSync('buffer.txt');
  console.log("Understood:", result.toString());
  if (loop) listen(loop);
}

function run() {
  listen(true); // start endless loop
}

run();