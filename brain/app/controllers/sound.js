/**
========================================================================================================
  Generic Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );

var soundReceive = require( path.join(dir.CONTROLLER, 'mod/soundReceive.js') );

var shazamAPI = function (filename, callback) {
  ext.unirest.post('http://mockbin.com/request')
  .headers(SHAZAM_HEADERS)
  .sendFile( path.join(dir.DATA, 'sound-received/filename') )
  .end(function (response) {
    console.log(response.body);
  });

  return callback(null, "Artist - Name");
}

var lastfmAPI = function (info, callback) {
  return callback(null, "ok");
}

/**
========================================================================================================
  Routing
========================================================================================================
**/

module.exports = function (req, res) {
  soundReceive(req, res, function (filename) {
    shazamAPI(filename, function(err, info) {
      res.send("ok");
    });
  });
};
