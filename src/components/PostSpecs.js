import React from 'react'
import classNames from 'classnames'

import Voting from './Voting'
import "./PostSpecs.sass"

const PostSpecs = (props) => {
    const post = props.post;
    const className = props.className;
    return (
        <div className={classNames(className, 'post-specs')}>
            <time className="post-specs__item iconic"><span className="iconic__icon fa fa-clock-o"></span> {post.timestamp}
            </time>
            <div className="post-specs__item iconic _comments">
                <span className="iconic__icon fa fa-comment-o"></span> No Comments
            </div>
            <Voting entryType="post" entry={post}/>
        </div>
    );
};

export default PostSpecs