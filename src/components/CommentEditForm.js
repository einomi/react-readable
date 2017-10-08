import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CommentForm from './CommentForm'
import * as actions from '../actions'

class CommentEditForm extends Component {
    edit = values => {
        this.props.editComment(this.props.id, {
            body: values.body,
            timestamp: + new Date()
        });
        this.props.onSubmitSuccess();
    };

    render() {
        return (
            <div>
                <CommentForm mode="edit" onSubmit={this.props.handleSubmit(this.edit)}/>
            </div>
        );
    }
}

const Form = reduxForm({
    form: 'comment-edit',
})(CommentEditForm);

export default connect(
    state => ({
        user: state.user
    }),
    actions
)(Form);
