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
  var tag = req.body.tag;
  var query = 'SELECT red, green, blue FROM genre WHERE genre=?';

  roam.con.query(query, tag, function(err,rows) {
    if(err) throw err;

    res.send(rows);
  });
};
