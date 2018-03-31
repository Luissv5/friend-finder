var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var freinds = require('./app/data/freinds.js');

var app = express();
var PORT = process.envb.PORT || 8080;

app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.jspm({ type: 'application/nvd.api+json' }));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(process.env.PORt || 8080);
