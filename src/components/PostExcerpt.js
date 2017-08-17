import React from 'react';
import { Link } from 'react-router-dom'

import './PostExcerpt.sass';

const PostExcerpt = ({ id, title, category }) => (
    <div className="post-excerpt">
        <div className="post-excerpt__title"><Link to={`/${category}/${id}`} className="post-excerpt__title-link link">{title}</Link></div>
    </div>
);

export default PostExcerpt
