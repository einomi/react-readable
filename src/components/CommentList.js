import React from 'react'
import classNames from 'classnames'

import './CommentList.sass'
import Comment from './Comment'
import CommentForm from './CommentForm'

const CommentList = ({className, comments}) => {
    // comments =
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
            <CommentForm />
        </div>
    );
};

export default CommentList