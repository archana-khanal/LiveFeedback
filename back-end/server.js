const io = require('socket.io')();
const uuidv1 = require('uuid/v1');

let feedbackList = []

io.sockets.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
          client.emit('timer', new Date());
        }, interval);
    });

    client.on('submitFeedback', (feedback) => {
      feedback.id = uuidv1();
      feedbackList.push(feedback);
    });

    client.on('subscribeToFeedback', (interval) => {
      console.log('client is subscribing to feedback with interval ', interval);
      setInterval(() => {
        if (feedbackList && feedbackList.length > 0) {
          io.emit('feedback', JSON.stringify(feedbackList));
          feedbackList.splice(0, feedbackList.length);
        }
      }, interval);
    });
  });

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

