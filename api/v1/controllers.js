var gpio = require('pi-gpio');
var CHANNEL_RELE = 3;
var autopen = false;

function checkAuthorization(token){
  return token == "ksaljdkasjd9023qnea90djn032nas03";
}

function openDoor(req,res,next){
  if(checkAuthorization(req.headers.authorization)){
    //START BELL
    gpio.write(CHANNEL_RELE, true);
    setInterval(function(){
       //STOP BELL
       gpio.write(CHANNEL_RELE, false);
    }, 5000); // 5 segundos
    res.status(200).send();

  }else{
    res.status(401).send('Unauthorized');
  }
 
}
function autoOpenStatus (req,res,next){
  if(checkAuthorization(req.headers.authorization)){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({auto_open:autopen}));
  }else{
    res.status(401).send('Unauthorized');
  }

}
function autoOpen(req,res,next){
  if(checkAuthorization(req.headers.authorization)){
    autopen = !autopen;
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({auto_open:autopen}));
  }else{
    res.status(401).send('Unauthorized');
  }
}


exports.autoOpen = autoOpen;
exports.autoOpenStatus = autoOpenStatus;
exports.openDoor = openDoor;