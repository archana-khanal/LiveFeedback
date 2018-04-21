const io = require('socket.io')();

let feedbackList = []
let count = 0;

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
          client.emit('timer', new Date());
        }, interval);
    });

    client.on('submitFeedback', (feedback) => {
      feedback.id = count;
      count++;
      feedbackList.push(feedback);
      console.log('Pushed: ', feedbackList);
    });

    client.on('subscribeToFeedback', (interval) => {
      console.log('client is subscribing to feedback with interval ', interval);
      setInterval(() => {
        if (feedbackList && feedbackList.length > 0) {
          console.log('Sending feedback list: ', JSON.stringify(feedbackList));
          client.emit('feedback', JSON.stringify(feedbackList));
          feedbackList.splice(0, feedbackList.length);
        }
      }, interval);
    });
  });

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

