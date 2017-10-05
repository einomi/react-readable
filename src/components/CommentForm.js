import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { reduxForm, Field } from 'redux-form'

import * as actions from '../actions'
import { required } from '../utils/validation'
import FieldGroup from './FieldGroup'

class CommentForm extends Component {
    submit = values => {
        const extraValues = {
            id: uuidv4(),
            timestamp: + new Date(),
            author: this.props.user.name,
            parentId: this.props.post.id
        };
        console.log('values before', values);
        values = Object.assign(values, extraValues);
        console.log('values after', values);
        this.props.addComment(values);
    };

    render() {
        return (
            <form action="" className="form" onSubmit={this.props.handleSubmit(this.submit)}>
                <div className="form__title">Add new comment</div>
                <Field component={FieldGroup} inputType="textarea" name="body" className="form__input i-textarea" validate={[required]} />
                <button className="button">Add</button>
            </form>
        );
    }
}

CommentForm = reduxForm({
    form: 'comment',
})(CommentForm);

export default connect(
    (state) => ({
        post: state.post,
        user: state.user
    }),
    actions
)(CommentForm);