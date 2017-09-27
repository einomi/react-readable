import React, { Component } from 'react'

import PostEditForm from './PostEditForm'

class EditPost extends Component {
    render() {
        return (
            <div className="page-edit-post page">
                <div className="container">
                    <h1 className="page__title title">Edit post</h1>
                    <PostEditForm className="page-edit-post__form"/>
                </div>
            </div>
        );
    }
}

export default EditPost