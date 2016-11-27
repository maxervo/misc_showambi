var dir = require('../../config/dir.js');
var ext = require('../../config/ext.js');
var cons = require('../../config/cons.js');

module.exports = function(req, res) {

  var brightness = req.query.value;
  res.sendStatus(200);

  setBrightness(brightness);

}

function setBrightness(brightness) {

  var url = cons.HUE_IP + cons.HUE_API + "3" + cons.HUE_API_ACTION;

  ext.unirest.put(url)
         .headers({'Content-Type': 'application/json'})
         .send("{\"on\": true, \"bri\":" + brightness + "}")
         .end(function (response) {
           console.log(response.body);
  });
}
