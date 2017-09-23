import React from 'react';
import { Link } from 'react-router-dom'

import PostExcerpt from './PostExcerpt'
import Sorting from './Sorting'
import './PostList.sass';

const PostList = ({ posts }) => (
    <div className="post-list">
        <div className="container">
            <Sorting />
            <div className="post-list__items">
                {posts.map((post, index) =>
                    <PostExcerpt key={index} className="post-list__item" post={post}/>
                )}
            </div>
            <Link to="/add-post" className="post-list__add button">Add new post</Link>
        </div>
    </div>
);

export default PostList