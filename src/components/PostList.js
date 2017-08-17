import React from 'react';

import PostExcerpt from './PostExcerpt'
import './PostList.sass';

const PostList = ({ posts }) => (
    <div className="post-list">
        <div className="container">
            {posts.map((post, index) => {
                    return (
                        <PostExcerpt key={index} {...post} />
                    );
                }
            )}
        </div>
    </div>
);

export default PostList