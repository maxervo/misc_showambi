/**
========================================================================================================
  Private
========================================================================================================
**/

var path = require('path');
var dir = require('./dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
/**
========================================================================================================
  Exports
========================================================================================================
**/

exports.DOMAIN = "localhost";
exports.PORT_DEV = 8003
exports.PORT_INTEG = 8080
exports.PORT_STAG = 8080
exports.PORT_PROD = 80

exports.HUE_IP = "http://192.168.43.13";

exports.HUE_API = "/api/fn23f58Lfg2BC-Z7D-AwGav2-i8GT4puQ0bpH819/lights/";
exports.HUE_API_ACTION = "/state";
