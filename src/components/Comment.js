import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './Comment.sass'
import Voting from './Voting'
import * as utils from '../utils'
import * as actions from '../actions'
import DeleteLink from './DeleteLink'

const DELETE_QUESTION = 'Are you sure you want to delete this comment?';

class Comment extends React.Component {
    state = {
        editing: false
    };

    setEditing = () => {
        if (this.state.editing) {
            return;
        }
        this.setState({editing: true});
    };

    save = (e) => {
        e.preventDefault();
        this.props.save(this.props.comment.id, {
            body: this.messageInput.value,
            timestamp: + new Date()
        });
        this.setState({editing: false});
    };

    renderBody(body) {
        return <p className="comment__content text">{body}</p>;
    }

    renderForm(body) {
        return (
            <form action="" onSubmit={this.save} className="form">
                <textarea name="message" className="form__input i-textarea" required ref={input => this.messageInput = input} defaultValue={body}></textarea>
                <button className="button">Save</button>
            </form>
        );
    }

    render() {
        const {className, comment, user} = this.props;
        const {author, timestamp, body} = comment;
        return (
            <div className={classNames(className, 'comment')}>
                <div className="comment__head comment-head">
                    <div className="comment-head__item comment__date">{utils.defaultDateFormat(timestamp)}</div>
                    {author === user.name && !this.state.editing && <div className="comment-head__item comment__edit link" onClick={this.setEditing}>Edit</div>}
                    <Voting className="comment-head__item comment-head__voting" entryType="comment" entry={comment}/>
                    {author === user.name && <DeleteLink id={comment.id} className="post-specs__item post-specs__remove link" question={DELETE_QUESTION} clickAction={this.props.deleteComment}><span className="fa fa-remove"></span> Delete</DeleteLink>}
                </div>
                <div className="comment__author"><span className="iconic__icon fa fa-user-circle-o"></span> {author}</div>
                {this.state.editing ? this.renderForm(body) : this.renderBody(body)}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user
    }),
    actions
)(Comment);
