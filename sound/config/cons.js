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
exports.PORT_DEV = 8004
exports.PORT_INTEG = 8080
exports.PORT_STAG = 8080
exports.PORT_PROD = 80
exports.FILE_NAME = "record.wav"

exports.BRAIN_URL = "http://localhost:8001/sound"
