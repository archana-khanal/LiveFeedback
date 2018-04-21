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
            let updatedFeedbackList = feedbackList.concat(this.state.feedbackList);
            console.log('Updated feedback list:', updatedFeedbackList);
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
                        <div className="available-feedback">
                            {this.renderFeedback(this.state.feedbackList)}
                        </div> 
                    ) : 
                ( <div> No Feedback </div> )
                }
            </div>
        );
    }

    renderFeedback(feedback_list) {
        return _.map(feedback_list, feedback => (
            <Feedback feedback={feedback} key={feedback.id}/>));
    }
}