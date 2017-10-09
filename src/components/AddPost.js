import React from 'react'

import PostAddForm from './PostAddForm'

const AddPost = () => (
    <div className="page-add-post page">
        <div className="container">
            <h1 className="page__title title">Add post</h1>
            <PostAddForm className="page-add-post__form" />
        </div>
    </div>
);

export default AddPost