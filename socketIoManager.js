var controllers = require('api/v1/controllers');
module.exports = function(io) {

  var KEY_CONNECTION = "connection";
  var KEY_DISCONNECT = "disconnect";

  var KEY_OPEN_DOOR = "open_door";
  var KEY_BUZZ = "buzz";

  io.on(KEY_CONNECTION, function(socket){
    socket.on(KEY_CREATE_ROOM, function (roomStr) {
      socket.room = roomStr;
      socket.join(roomStr);
    });
    socket.on(KEY_OPEN_DOOR, function (data) {
      controllers.openDoor
    });
    socket.on(KEY_BUZZ, function (data) {
      socket.broadcast.in(socket.room).emit(KEY_BUZZ, data);
    })
  });
}
