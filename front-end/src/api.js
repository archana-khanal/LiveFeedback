import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

function subcribeToSubmittedFeedback(cb) {
    socket.emit('subscribeToFeedback', 1000);
    socket.on('feedback', feedbackList => cb(null, JSON.parse(feedbackList)));    
}

function submitFeedback(message) {
    socket.emit('submitFeedback', {
        message
    });
}

export { subscribeToTimer, subcribeToSubmittedFeedback, submitFeedback };