/**
========================================================================================================
  Generic Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js') );
var roam = require( path.join(dir.CONFIG, 'roam.js') );

/**
========================================================================================================
  Routing
========================================================================================================
**/


module.exports = function (req, res) {
  var red = req.query.red;
  var green = req.query.green;
  var blue =req.query.blue;
  var genre =req.query.genre;

  var query = 'UPDATE genre SET red=?, green=?, blue=? WHERE genre=?';

  roam.con.query(query, red, green, blue, genre function(err,rows) {
    if(err) {
	     console.log("Error : " + err);
       throw err;
    }
    console.log("OK " + rows);
    res.send(rows);
  });
};
