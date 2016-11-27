/**
========================================================================================================
  Private
========================================================================================================
**/

var path = require('path');
var dir = require('./dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js'));

/**
========================================================================================================
  Exports
========================================================================================================
**/

var con = ext.mysql.createConnection({
  host: cons.DB_HOST,
  user: cons.DB_USER,
  password: cons.DB_PASSWORD,
  database: cons.DB_NAME
});

exports.con = con;