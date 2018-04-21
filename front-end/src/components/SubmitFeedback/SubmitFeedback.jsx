import React, {Component} from 'react';
import { submitFeedback } from '../../api';

export class SubmitFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        submitFeedback(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {  
        return (
            <div>
                <div className="title-text">Submit Feedback</div>
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" rows='3' value={this.state.message} onChange={this.handleChange} />
                    <button type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
