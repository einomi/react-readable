import React from 'react';
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'

import PostExcerpt from './PostExcerpt'
import Sorting from './Sorting'
import './PostList.sass';

const PostList = ({ posts, sortBy }) => (
    <div className="post-list">
        <div className="container">
            <Sorting />
            <div className="post-list__items">
                {orderBy(posts, [sortBy.param], [sortBy.order]).map(post =>
                    <PostExcerpt key={post.id} className="post-list__item" post={post}/>
                )}
            </div>
            <Link to="/add-post" className="post-list__add button">Add new post</Link>
        </div>
    </div>
);


export default PostList