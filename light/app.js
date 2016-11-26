/**
========================================================================================================
  Imports
========================================================================================================
**/
var path = require('path');
var dir = require('./config/dir.js');
var server = require( path.join(dir.CONFIG, 'server.js') )();   //server config, possible: manual override input
var ext = require( path.join(dir.CONFIG, 'ext.js') );          //external modules
var roam = require( path.join(dir.CONFIG, 'roam.js') );

/**
========================================================================================================
  App : Server & Router
========================================================================================================
**/

//Start app
var app = ext.express();

//Serve : Public Assets
app.use('/public', ext.express.static('public'));  // serve public files
app.use('/vendors', ext.express.static('vendors'));
console.log('Public assets ready to be served.');

//Express.js server
var httpServer = app.listen(server.PORT, "0.0.0.0");
console.log('Server mode ' + server.MODE + ' listening port ' + server.PORT );

//Manual routing
app.get('/', function(req, res) {
  require( path.join(dir.CONTROLLER, 'home.js') )(req, res);
});
