var dir = require('../../config/dir.js');
var cons = require('../../config/cons.js');
var ext = require('../../config/ext.js');
var unirest = require('unirest');

module.exports = function() {
  var cron = require('cron');
  var cronJob = cron.job("*/5 * * * * *", function(){
      readFile();
  });
  cronJob.start();
}

function readFile() {

    var filePath = dir.SOUND + cons.FILE_NAME;
    console.log(filePath);

    ext.fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      sendFileToBrain(data);
    });
}

function sendFileToBrain(data) {

  unirest.post(cons.BRAIN_URL)
          .send(data)
          .end(function (response) {
          console.log(response.body);
      });

}
