import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from '../actions'
import PostSpecs from './PostSpecs'
import './Post.sass';
import CommentList from './CommentList'
import Page404 from './Page404'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.id);
        this.props.fetchComments(this.props.id);
    }

    render() {
        if (this.props.notFound) {
            return <Page404/>;
        }
        if (Object.keys(this.props.post).length === 0) {
            return <div></div>;
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
        post: state.post.entity,
        notFound: state.post.notFound,
        comments: state.comments
    };
};

export default withRouter(connect(
    mapStateToProps,
    actions
)(Post))