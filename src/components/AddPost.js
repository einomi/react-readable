import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostForm from './PostForm'

class AddPost extends Component {
    render() {
        return (
            <div className="page">
                <div className="container">
                    <h1 className="page__title title">Add post</h1>
                    <PostForm className="add-post__form"/>
                </div>
            </div>
        );
    }
}

export default connect(
)(AddPost)