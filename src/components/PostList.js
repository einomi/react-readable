import React from 'react';

import Post from './Post'
import './PostList.sass';

const PostList = ({ posts }) => (
    <div className="post-list">
        {posts.map((post, index) => {
                return <Post key={index} {...post} />;
            }
        )}
    </div>
);

export default PostList