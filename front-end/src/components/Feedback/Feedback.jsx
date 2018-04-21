import React, { Component } from 'react';

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
            <div className="feedback-box">
                {this.state.message}
            </div>
        );
    }

}