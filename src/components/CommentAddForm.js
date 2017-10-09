import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import uuidv4 from 'uuid/v4'

import CommentForm from './CommentForm'
import * as actions from '../actions'

class CommentAddForm extends Component {
    submit = values => {
        const extraValues = {
            id: uuidv4(),
            timestamp: +new Date(),
            author: this.props.user.name,
            parentId: this.props.post.id
        };
        values = Object.assign(values, extraValues);
        this.props.addComment(values);
        this.props.reset();
    };

    render() {
        return (
            <div>
                <CommentForm mode="add" onSubmit={this.props.handleSubmit(this.submit)}/>
            </div>
        );
    }
}

const Form = reduxForm({
    form: 'comment-add',
})(CommentAddForm);

export default connect(
    state => ({
        user: state.user,
        post: state.post.entity
    }),
    actions
)(Form);
