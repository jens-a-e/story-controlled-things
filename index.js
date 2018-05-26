var Psc = require('pocketsphinx-continuous');
var ps = new Psc({
  setId: '6914',  // A "set id". See explanation below.
  verbose: false // Setting this to true will give you a whole lot of debug output in your console.
});

ps.on("error", function(err) {
	console.error("ERROR", err);
});

ps.on('data', function(data) {
	console.log("DATA", data);
});

//ps.on('debug', function(data) {
//	console.error("Debug:", data.toString());
//});
