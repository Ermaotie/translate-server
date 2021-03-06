// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
require('./app/routes')(app);
const port = process.env.PORT || 8443;

app.listen(port, () => {
  console.log('We are live on ' + port);
});