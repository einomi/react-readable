import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Comment.sass'
import Voting from './Voting'
import * as utils from '../utils'
import * as actions from '../actions'
import DeleteLink from './DeleteLink'
import CommentEditForm from './CommentEditForm'

const DELETE_QUESTION = 'Are you sure you want to delete this comment?';

class Comment extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        comment: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
    };

    state = {
        editing: false
    };

    setEditingMode = (values) => {
        if (this.state.editing) {
            return;
        }
        this.setState({editing: true});
    };

    renderBody(body) {
        return <p className="comment__content text">{body}</p>;
    }

    renderForm(body) {
        return (
            <CommentEditForm id={this.props.comment.id} initialValues={{body}} onSubmitSuccess={() => this.setState({editing: false})}/>
        );
    }

    render() {
        const {className, comment, user} = this.props;
        const {author, timestamp, body} = comment;
        return (
            <div className={classNames(className, 'comment')}>
                <div className="comment__head comment-head">
                    <div className="comment-head__item comment__date">{utils.defaultDateFormat(timestamp)}</div>
                    <Voting className="comment-head__item comment-head__voting" entryType="comment" entry={comment}/>
                    {author === user.name && !this.state.editing && <div className="comment-head__item comment__edit link" onClick={this.setEditingMode}><span className="fa fa-edit"></span> Edit</div>}
                    {author === user.name && <DeleteLink id={comment.id} className="comment-head__item comment__delete link" question={DELETE_QUESTION} clickAction={this.props.deleteComment}><span className="fa fa-remove icon-delete"></span> Delete</DeleteLink>}
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
