// -- USEFUL LINKS = https://flaviocopes.com/express-forms-files/


// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const formidableMiddleware  = require('express-formidable');

app.use(express.static('public'));
app.use(formidableMiddleware());


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post('/api/fileanalyse', (req, res) => {
  if (req.files.upfile.name) {
    res.json({
      name: req.files.upfile.name,
      type: req.files.upfile.type,
      size: req.files.upfile.size
    });
  } else {
    res.status(401).send('please upload a file');
  }
});

// listen for requests :)

const port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
