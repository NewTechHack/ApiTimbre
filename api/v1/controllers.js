var gpio = require('pi-gpio');
var CHANNEL_RELE = 3;


module.exports.openDoor = function(req,res,next){
  //START BELL
  //gpio.write(CHANNEL_RELE, true);

  setInterval(function(){
     //STOP BELL
     //gpio.write(CHANNEL_RELE, false);
  }, 5000); // 5 segundos

  res.send();
}

