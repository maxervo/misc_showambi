/**
========================================================================================================
  Generic Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js') );

var soundReceive = require( path.join(dir.CONTROLLER, 'mod/soundReceive.js') );

var shazamAPI = function (data, callback) {
  ext.unirest.post(cons.SHAZAM_URL)
  .headers(cons.SHAZAM_HEADERS)
  .send(data)
  .end(function (response) {
    //console.log(response.body.matches[0].metadata);
    return callback(null, response.body.matches[0].metadata);
  });
}

var lastfmAPI = function (info, callback) {
  var query = "track.getTopTags";

  //replacing " " by "+", because of lastfm api syntax
  info.artist = info.artist.split(' ').join('+');
  info.title = info.title.split(' ').join('+');

  var getRequestUrl = cons.LASTFM_URL_BASE + "?method=" + query + "&api_key=" + cons.LASTFM_KEY + "&artist="+info.artist + "&track="+info.title + "&format=json";
  ext.unirest.get(encodeURI(getRequestUrl))
  .end(function (response) {
    //console.log(require('util').inspect(response.body, { depth: null }));
    return callback(null, response);
  });
}

var readFile = function (filename, callback) {

    var filePath = path.join(dir.DATA, 'sound-received/' + filename);

    ext.fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      callback(null, data);
    });
}

var colorLight = function (jsonColor, callback) {

  ext.unirest.post(cons.LIGHT_URL)
          .headers({'Content-Type': 'application/json'})
          .send(jsonColor)
          .end(function (response) {
            //console.log(response.body);
            return callback(null)
          });

}

var userColors = function(selectedTag, callback) {
  console.log(selectedTag);
  return callback(null, "{'red': 55, 'green': 55, 'blue': 55}");
}

var selectTags = function(rawTags, callback) {
  //console.log(require('util').inspect(rawTags.body.toptags.tag[0].name, { depth: null }));
  return callback(null, rawTags.body.toptags.tag[0].name);
}

/**
========================================================================================================
  Routing
========================================================================================================
**/

module.exports = function (req, res) {
  soundReceive(req, res, function (filename) {
    readFile(filename, function(err, data) {
      shazamAPI(data, function(err, info) {
        lastfmAPI(info, function(err, tags) {
          selectTags(tags, function(err, selectedTag) {
            userColors(selectedTag, function(err, color) {
              colorLight(color, function(err) {
                res.end("200");
              });
            });
          });
        });
      });
    });
  });
};
