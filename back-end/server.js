const io = require('socket.io')();
const uuidv1 = require('uuid/v1');
var ip = require('ip');

const clearArray = (arr) => {
  arr.splice(0, arr.length)
}

let feedbackList = []
let bufferFeedbackList = []

io.sockets.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
          client.emit('timer', new Date());
        }, interval);
    });

    client.on('submitFeedback', (feedback) => {
      feedback.id = uuidv1();
      bufferFeedbackList.push(feedback);
    });

    client.on('subscribeToFeedback', (interval) => {
      console.log('client is subscribing to feedback with interval ', interval);

      client.emit('feedback', JSON.stringify(feedbackList));

      setInterval(() => {
        if (bufferFeedbackList && bufferFeedbackList.length > 0) {
          io.emit('feedback', JSON.stringify(bufferFeedbackList));
          feedbackList = feedbackList.concat(bufferFeedbackList);
          clearArray(bufferFeedbackList)
        }
      }, interval);

    });
  });

const port = 8000;
io.listen(port);
console.log('Running the server on', ip.address());
console.log('listening on port', port);

