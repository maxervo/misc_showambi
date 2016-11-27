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

  var query = 'SELECT * FROM genre';

  roam.con.query(query, function(err,rows) {
    if(err) {
	     console.log("Error : " + err);
       throw err;
    }
    console.log("OK " + rows);
    res.send(rows);
  });
};
