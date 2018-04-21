import React, { Component } from 'react';
import './App.css';

import { FeedbackList } from './components/FeedbackList/FeedbackList';
import { SubmitFeedback } from './components/SubmitFeedback/SubmitFeedback';
import { Navbar } from './components/Navbar/Navbar';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={FeedbackList}/>
            <Route path='/submit' component={SubmitFeedback}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
