import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import PostSpecs from './PostSpecs'
import './PostExcerpt.sass';

const PostExcerpt = (props) => {
    const {className, post} = props;
    return (
        <div className={classNames(className, 'post-excerpt')}>
            <div className="post-excerpt__title">
                <Link to={`/${post.category}/${post.id}`} className="post-excerpt__title-link link">{post.title}</Link></div>
            <PostSpecs className="post-excerpt__specs" post={post}/>
        </div>
    );
};

export default PostExcerpt
