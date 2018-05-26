// var Psc = require('pocketsphinx-continuous');
// var ps = new Psc({
//   setId: '6914',  // A "set id". See explanation below.
//   verbose: false // Setting this to true will give you a whole lot of debug output in your console.
// });

// ps.on("error", function(err) {
// 	console.error("ERROR", err);
// });

// ps.on('data', function(data) {
// 	console.log("DATA", data);
// });

// //ps.on('debug', function(data) {
// //	console.error("Debug:", data.toString());
// //});

/// Spawning

const { spawn } = require('child_process');

// pocketsphinx_continuous -inmic yes -samprate 44100 -nfft 2048 -lm 6914.lm -dict 6914.dic
// const ps = spawn('pocketsphinx_continuous', ['-inmic', 'yes', '-samprate', 44100, '-nfft', 2048, '-lm', '6914.lm', '-dict', '6914.dic']);

// ps.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ps.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ps.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

/// Stdin Pipe

// process.stdin.resume();
// process.stdin.on('readable', () => {
//   console.log("readable!")
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

rl.on('line', function(line){
    console.log(line);
})