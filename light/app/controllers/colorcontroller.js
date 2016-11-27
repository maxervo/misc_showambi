var dir = require('../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var rgbconverter = require('./rgbconverter.js');

module.exports = function(request) {

  rgbconverter(request.red, request.green, request.blue, (color) => {
      changeColor(color);
  });

}

function changeColor(color) {
  unirest.post('http://mockbin.com/request')
         .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
         .send()
         .end(function (response) {
           console.log(response.body);
  });
}
