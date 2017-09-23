import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './Comment.sass'
import Voting from './Voting'
import * as utils from '../utils'
import * as actions from '../actions'

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
                </div>
                <div className="comment__author"><span className="iconic__icon fa fa-user-circle-o"></span> {author}</div>
                {this.state.editing ? this.renderForm(body) : this.renderBody(body)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = {
    save: actions.editComment,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);