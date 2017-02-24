// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var passport = require('passport');
var passport-auth0 = require('passport-auth0');


// CONFIG
// ============================================================
var config = require('./config');
// INITIALIZE APP
// ============================================================
var app = module.exports = express();
// INITIALIZE DEPENDENCIES
// ============================================================
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
// MASSIVE SETUP
// ============================================================
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');
// CONTROLLERS
// ============================================================
var tableController = require('./controllers/tableController');
// ENDPOINTS
// ============================================================
// TABLE ENDPOINTS
app.get('/api/table', tableController.read);
app.post('/api/table', tableController.create);
app.put('/api/table/:id', tableController.update);
app.delete('/api/table/:id', tableController.delete);
// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});
