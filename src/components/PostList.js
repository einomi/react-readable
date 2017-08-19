import React from 'react';

import PostExcerpt from './PostExcerpt'
import Sorting from './Sorting'
import './PostList.sass';

const PostList = ({posts}) => (
    <div className="post-list">
        <div className="container">
            <Sorting />
            {posts.map((post, index) => {
                    return (
                        <PostExcerpt key={index} className="post-list__item" {...post} />
                    );
                }
            )}
        </div>
    </div>
);

export default PostList