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
exports.PORT_DEV = 8001;
exports.PORT_INTEG = 8080;
exports.PORT_STAG = 8080;
exports.PORT_PROD = 80;

exports.SOUNDNAME = "sound.wav";

//API : Shazam
exports.SHAZAM_HEADERS = {'X-Shazam-Api-Key': '03789B8E-A8CE-4229-A880-7FDE4C4FAEFC', 'Content-Type': 'application/octet-stream'};
exports.SHAZAM_URL = "http://beta.amp.shazam.com/partner/recognise";

//API : LastFm
exports.LASTFM_KEY = "3bacfb085a94d221d66ce9426f65287d"
exports.LASTFM_URL_BASE ="http://ws.audioscrobbler.com/2.0/"

//exports.USER_URL = "http://localhost:8002/color";
exports.USER_URL = "http://192.168.43.143:8002/color";
exports.LIGHT_URL = "http://localhost:8003/color";
