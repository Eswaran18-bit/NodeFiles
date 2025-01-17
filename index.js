const { logEvent } = require('./logEvent'); // Ensure the path is correct

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
    logEvent(msg); // Correct function name
});
myEmitter.emit('log', 'log event emitted');
