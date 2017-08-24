import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import * as actions from '../actions';
import PostSpecs from './PostSpecs'
import './Post.sass';
import {getPost} from '../reducers'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.id);
    }

    render() {
        const {title, body} = this.props.post;
        return (
            <div className="post">
                <div className="container">
                    <header className="post__header">
                        <h1 className="post__title title">{title}</h1>
                        <PostSpecs className="post__specs" post={this.props.post} />
                    </header>
                    <div className="post__content">
                        <p className="post__text text">{body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, {match}) {
    const id = match.params.id;
    return {
        id,
        posts: state.posts,
        post: state.post
    };
}

export default withRouter(connect(
    mapStateToProps,
    {
        fetchPost: actions.fetchPost
    }
)(Post));