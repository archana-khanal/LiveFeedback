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
            <div className="container">
                <div className="title-text">Submit Feedback</div>
                <div className="row justify-content-center">
                    <div className="col-9">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <textarea className="form-control" type="text" rows='3' value={this.state.message} onChange={this.handleChange} />
                                <small class="form-text text-muted">Your feedback will be submitted anonymously</small>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
