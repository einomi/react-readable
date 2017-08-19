import React from 'react'
import classNames from 'classnames'

import Voting from './Voting'
import "./PostSpecs.sass"

const PostSpecs = ({className, id, timestamp, voteScore}) => (
    <div className={classNames(className, 'post-specs')}>
        <time className="post-specs__item iconic"><span className="iconic__icon fa fa-clock-o"></span> {timestamp}</time>
        <div className="post-specs__item iconic _comments"><span className="iconic__icon fa fa-comment-o"></span> No Comments</div>
        <Voting id={id} voteScore={voteScore} />
    </div>
);

export default PostSpecs