import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Voting from './Voting'
import DeleteLink from './DeleteLink'
import * as actions from '../actions'
import * as utils from '../utils'
import "./PostSpecs.sass"

const DELETE_QUESTION = 'Are you sure you want to delete this post?';

const PostSpecs = (props) => {
    const { id, author, timestamp } = props.post;
    const { user, className, commentCount, deletePost } = props;
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
            {author === user.name && <Link to={`/edit-post/${id}`} className="post-specs__item post-specs__edit link"><span className="fa fa-edit"></span> Edit</Link>}
            {author === user.name && <DeleteLink id={id} className="post-specs__item post-specs__remove link" question={DELETE_QUESTION} clickAction={deletePost} successPath="/post-delete-success"><span className="fa fa-remove icon-delete"></span> Delete</DeleteLink>}
        </div>
    );
};

PostSpecs.propTypes = {
    className: PropTypes.string,
    post: PropTypes.object.isRequired,
    commentCount: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        user: state.user
    }),
    actions
)(PostSpecs);