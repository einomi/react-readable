import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
import { reduxForm } from 'redux-form'

import PostForm from './PostForm'
import * as actions from '../actions'

class PostEditForm extends Component {
    state = {
        successRedirect: false
    };

    componentDidMount() {
        this.props.fetchPost(this.props.id);
    }

    submit = values => {
        this.props.editPost(this.props.id, values).then(() => this.setState({successRedirect: true}));
    };

    render() {
        return (
            <div>
                {this.state.successRedirect && <Redirect to="/edit-post/success"/>}
                <PostForm mode="edit" onSubmit={this.props.handleSubmit(this.submit)}/>
            </div>
        );
    }
}

PostEditForm = reduxForm({
    form: 'post-edit',
    enableReinitialize: true,
})(PostEditForm);

const mapStateToProps = (state, { match }) => {
    const id = match.params.id;
    const post = state.post.entity;
    const initialValues = {
        title: post.title,
        body: post.body,
    };
    return {
        id,
        post,
        initialValues
    };
};

export default withRouter(connect(
    mapStateToProps,
    actions
)(PostEditForm))
