import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';
import { FeedbackList } from './components/FeedbackList/FeedbackList';
import { SubmitFeedback } from './components/SubmitFeedback/SubmitFeedback';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    this.state = {
      timestamp: 'no timestamp yet'
    };
  }
  
  render() {
    return (
      <div className="App">
        This is the timer value: {this.state.timestamp}
        <SubmitFeedback/>
        <FeedbackList/>
      </div>
    );
  }
}

export default App;
