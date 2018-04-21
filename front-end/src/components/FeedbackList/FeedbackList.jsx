import React, { Component } from 'react';
import {Feedback} from '../Feedback/Feedback';
import { subcribeToSubmittedFeedback } from '../../api';
import _ from 'lodash';

export class FeedbackList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackList: []
        };
    }

    componentDidMount() {
        subcribeToSubmittedFeedback((err, feedbackList) => {
            let updatedFeedbackList = this.state.feedbackList.concat(feedbackList);
            this.setState({ 
                feedbackList: updatedFeedbackList
            })
        });
    }

    
    render() {
        const hasFeedback = !_.isEmpty(this.state.feedbackList);

        return (
            <div>
                {
                    hasFeedback ? (
                        <div>
                            <div className="title-text"> All Feedback </div>
                            <div className="available-feedback">
                                {this.renderFeedback(this.state.feedbackList)}
                            </div> 
                        </div>
                    ) : 
                ( <div className="title-text"> Waiting for feedback... </div> )
                }
            </div>
        );
    }

    renderFeedback(feedback_list) {
        return _.map(feedback_list, feedback => (
            <Feedback feedback={feedback} key={feedback.id}/>));
    }
}