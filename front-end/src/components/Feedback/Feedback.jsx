import React, { Component } from 'react';
import './Feedback.css';

export class Feedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        this.setState({
            message: this.props.feedback.message
        })
    }

    render() {
        return (
            <div className="col-md-3 col-sm-4 feedback-box">
                {this.state.message}
            </div>
        );
    }

}