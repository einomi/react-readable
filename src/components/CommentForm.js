import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import * as actions from '../actions'

class CommentForm extends Component {
    _onSend = (e) => {
        e.preventDefault();
        let data = {
            id: uuidv4(),
            timestamp: + new Date(),
            body: this.messageInput.value,
            author: this.props.user.name,
            parentId: this.props.post.id
        };
        this.props.addComment(data);
    };

    render() {
        return (
            <form action="" className="form" onSubmit={this._onSend}>
                <div className="form__title">Add new comment</div>
                <textarea name="message" className="form__input i-textarea" required ref={input => this.messageInput = input}></textarea>
                <button className="button">Add</button>
            </form>
        );
    }
}

export default connect(
    (state) => ({
        post: state.post,
        user: state.user
    }),
    actions
)(CommentForm);