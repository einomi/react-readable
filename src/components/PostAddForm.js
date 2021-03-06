import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

import PostForm from './PostForm'
import * as actions from '../actions'

class PostAddForm extends Component {
    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
        user: PropTypes.object.isRequired,
        initialValues: PropTypes.object.isRequired,
    };

    state = {
        successRedirect: false
    };

    submit = values => {
        values['timestamp'] = + new Date();
        values['author'] = this.props.user.name;
        this.props.addPost(values).then(() => this.setState({successRedirect: true}));
    };

    render() {
        return (
            <div>
                {this.state.successRedirect && <Redirect to="/edit-post/success"/>}
                <PostForm mode="add" onSubmit={this.props.handleSubmit(this.submit)} />
            </div>
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
            category: 'none'
        };
        return {
            categories: state.categories,
            initialValues,
            user: state.user
        };
    },
    actions
)(Form);
