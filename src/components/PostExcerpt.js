import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import PostSpecs from './PostSpecs'
import './PostExcerpt.sass';

const PostExcerpt = ({ className, id, timestamp, title, category, voteScore }) => (
    <div className={classNames(className, 'post-excerpt')}>
        <div className="post-excerpt__title"><Link to={`/${category}/${id}`} className="post-excerpt__title-link link">{title}</Link></div>
        <PostSpecs className="post-excerpt__specs" id={id} timestamp={timestamp} voteScore={voteScore} />
    </div>
);

export default PostExcerpt
