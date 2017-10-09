import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import * as actions from '../actions'
import PostSpecs from './PostSpecs'
import './Post.sass';
import CommentList from './CommentList'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.id);
        this.props.fetchComments(this.props.id);
    }

    render() {
        if (this.props.post.notFound) {
            return <Redirect to="/404"/>;
        }
        const { title, body } = this.props.post;
        const comments = this.props.comments;
        return (
            <div className="post">
                <div className="container">
                    <header className="post__header">
                        <h1 className="post__title title">{title}</h1>
                        <PostSpecs className="post__specs" commentCount={comments.length} post={this.props.post}/>
                    </header>
                    <div className="post__content">
                        <p className="post__text text">{body}</p>
                    </div>
                    <CommentList className="post__comments" comments={comments}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const id = match.params.id;
    return {
        id,
        posts: state.posts,
        post: state.post,
        comments: state.comments
    };
};

const mapDispatchToProps = {
    fetchPost: actions.fetchPost,
    fetchComments: actions.fetchComments
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Post))