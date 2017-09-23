import React from 'react'
import classNames from 'classnames'

import Voting from './Voting'
import "./PostSpecs.sass"
import * as utils from '../utils'

const PostSpecs = (props) => {
    const { author, timestamp } = props.post;
    const { className, commentCount } = props;
    return (
        <div className={classNames(className, 'post-specs')}>
            <div className="post-specs__item iconic"><span className="iconic__icon fa fa-user-circle-o"></span> {author}
            </div>
            <time className="post-specs__item iconic">
                <span className="iconic__icon fa fa-clock-o"></span> {utils.defaultDateFormat(timestamp)}
            </time>
            <div className="post-specs__item iconic _comments">
                <span className="iconic__icon fa fa-comment-o"></span> {commentCount || 'No Comments'}
            </div>
            <Voting className="post-specs__item" entryType="post" entry={props.post}/>
        </div>
    );
};

export default PostSpecs