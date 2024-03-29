/**
========================================================================================================
  Generic Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var roam = require( path.join(dir.CONFIG, 'roam.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js') );

/**
========================================================================================================
  Routing
========================================================================================================
**/

module.exports = function (req, res, callback) {

  // create an incoming form object
  var form = new ext.formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  //store all uploads in the /uploads directory
  form.uploadDir = path.join(dir.ROOT, '/data/sound-received');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    ext.fs.rename(file.path, path.join(form.uploadDir, cons.SOUNDNAME));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
    callback(null);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end("Done");
  });

  // parse the incoming request containing the form data
  form.parse(req, function(err, fields, files) {
    if (err) {
        console.log('Parse error ' + err);
        return callback(err);  //considered not an error, considered as guest
    }
    callback(cons.SOUNDNAME);
  });

};
