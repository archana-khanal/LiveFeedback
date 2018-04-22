import React, {Component} from 'react';
import { submitFeedback } from '../../api';
import './SubmitFeedback.css';

export class SubmitFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pos: '',
            neg: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePos = this.handleChangePos.bind(this);
        this.handleChangeNeg = this.handleChangeNeg.bind(this);
    }

    handleChangePos(e) {
        this.setState({
            pos: e.target.value
        })
    }

    handleChangeNeg(e) {
        this.setState({
            neg: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let message = '';
        if (this.state.pos.trim().length > 0) {
            message += `Went well: ${this.state.pos}`;
        }
        if (this.state.neg.trim().length > 0) {
            message += ` Could be better: ${this.state.neg}`;
        }  
        message = message.trim();
        if (message !== '') {
            submitFeedback(message);
            this.setState({
                pos: '',
                neg: ''
            })
        }
    }

    render() {  
        return (
            <div className="container">
                <div className="title-text">Submit Feedback</div>
                <div className="row justify-content-center">
                    <div className="col-9">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>What went well?</label>
                                <textarea className="form-control" type="text" rows='3' value={this.state.pos} onChange={this.handleChangePos} />
                                <small class="form-text text-muted">Your feedback will be submitted anonymously</small>
                            </div>
                            <div className="form-group">
                                <label>What could be better?</label>
                                <textarea className="form-control" type="text" rows='3' value={this.state.neg} onChange={this.handleChangeNeg} />
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
