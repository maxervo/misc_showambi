/**
========================================================================================================
  Generic Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );

/**
========================================================================================================
  Routing
========================================================================================================
**/

module.exports = function (req, res) {
  res.send("Hello world");
};
