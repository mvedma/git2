var filesYo = require('fs');
var https = require('https')
filesYo.writeFile(__dirname + "/index.html","<h1>HELLO WORLD</h1>");
var dogurl = "https://jerrybanfield.com/wp-content/uploads/2015/04/udemy-earnings-april-3-2015.png";
var dogFile = filesYo.createWriteStream(__dirname + "/node-dog.jpg");
var request = https.get(dogurl, function(response) {
	response.pipe(dogFile);
});
