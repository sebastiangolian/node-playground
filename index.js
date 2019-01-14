var events = require('events');
var eventEmitter = new events.EventEmitter();

var event1Handler = function event1() {
   console.log('----- event1 ------');
   eventEmitter.emit('event2');
}

eventEmitter.on('event1', event1Handler);
eventEmitter.on('event2', function(){
   console.log('----- event2 ------');
});

eventEmitter.emit('event1');

console.log("Program Ended.");