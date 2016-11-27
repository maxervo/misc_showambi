var dir = require('../../config/dir.js');
var ext = require('../../config/ext.js');
var cons = require('../../config/cons.js');
var rgbconverter = require('./rgbconverter.js');

module.exports = function(req, res) {

  var body = req.body;
  res.sendStatus(200);

  rgbconverter(body.red, body.green, body.blue, (color) => {
      changeColor(color);
  });

}

function changeColor(color) {

  var url = cons.HUE_IP + cons.HUE_API + "3" + cons.HUE_API_ACTION;

  ext.unirest.put(url)
         .headers({'Content-Type': 'application/json'})
         .send("{\"xy\":[" + color + "]}")
         .end(function (response) {
           console.log(response.body);
  });
}
