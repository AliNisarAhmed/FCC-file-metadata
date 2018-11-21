// -- USEFUL LINKS = https://flaviocopes.com/express-forms-files/


// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const formidable = require('formidable');

app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post('/api/fileanalyse', (req, res) => {
  let form = new formidable.incomingForm();
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
