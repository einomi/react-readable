import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'

import PostForm from './PostForm'
import * as actions from '../actions'

class PostAddForm extends Component {
    submit = values => {
        // if (!values.category) {
        //     throw new SubmissionError({
        //         category: 'Please select category',
        //         _error: 'Error!'
        //     });
        // }
        values['timestamp'] = + new Date();
        values['author'] = this.props.user.name;
        this.props.addPost(values);
    };

    render() {
        return (
            <PostForm mode="add" onSubmit={this.props.handleSubmit(this.submit)} />
        );
    }
}

const Form = reduxForm({
    form: 'post-add',
})(PostAddForm);

export default connect(
    state => {
        const initialValues = {
            id: uuidv4(),
        };
        return {
            categories: state.categories,
            initialValues,
            user: state.user
        };
    },
    actions
)(Form);
