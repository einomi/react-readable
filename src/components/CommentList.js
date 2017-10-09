import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './CommentList.sass'
import Comment from './Comment'
import CommentAddForm from './CommentAddForm'

const CommentList = ({className, comments}) => {
    const noCommets = <p className="comment-list__no-comments">There is no comments yet. Be the first!</p>;
    return (
        <div className={classNames(className, 'comment-list')}>
            <div className="comment-list__title">Comments</div>
            {comments && (!comments.length && noCommets)}
            <div className="comment-list__items">
                {comments.map((comment, index) => {
                    return <Comment key={index} className="comment-list__item" comment={comment}/>;
                })}
            </div>
            <CommentAddForm/>
        </div>
    );
};

CommentList.propTypes = {
    className: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentList
