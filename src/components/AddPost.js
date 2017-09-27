import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostAddForm from './PostAddForm'
import * as actions from '../actions'

class AddPost extends Component {
    render() {
        return (
            <div className="page-add-post page">
                <div className="container">
                    <h1 className="page__title title">Add post</h1>
                    <PostAddForm className="page-add-post__form" />
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(AddPost)