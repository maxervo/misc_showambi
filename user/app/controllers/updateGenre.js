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
  var red = req.body.red;
  var green = req.body.green;
  var blue =req.body.blue;
  var genre =req.body.genre;

  console.log(red, green, blue, genre);

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