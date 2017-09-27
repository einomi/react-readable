import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import Voting from './Voting'
import * as actions from '../actions'
import * as utils from '../utils'
import "./PostSpecs.sass"

const PostSpecs = (props) => {
    const { id, author, timestamp } = props.post;
    const { user, className, commentCount } = props;
    return (
        <div className={classNames(className, 'post-specs')}>
            <div className="post-specs__item iconic"><span className="iconic__icon fa fa-user-circle-o"></span> {author}
            </div>
            <time className="post-specs__item iconic">
                <span className="iconic__icon fa fa-clock-o"></span> {utils.defaultDateFormat(timestamp)}
            </time>
            {author === user.name &&
            <Link to={`/edit-post/${id}`} className="post-specs__item post-specs__edit link">Edit</Link>}
            <div className="post-specs__item iconic _comments">
                <span className="iconic__icon fa fa-comment-o"></span> {commentCount || 'No Comments'}
            </div>
            <Voting className="post-specs__item" entryType="post" entry={props.post}/>
        </div>
    );
};

export default connect(
    (state) => ({
        user: state.user
    }),
    actions
)(PostSpecs);