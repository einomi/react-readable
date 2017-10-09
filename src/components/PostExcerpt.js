import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import PostSpecs from './PostSpecs'
import * as api from '../utils/api'
import './PostExcerpt.sass';

class PostExcerpt extends Component {
    state = {
        commentsCount: 0
    };

    componentDidMount() {
        api.fetchComments(this.props.post.id).then(comments => {
            const commentCount = comments.length;
            this.setState({ commentCount });
        });
    }

    render() {
        const { className, post } = this.props;
        return (
            <div className={classNames(className, 'post-excerpt')}>
                <div className="post-excerpt__title">
                    <Link to={`/${post.category}/${post.id}`} className="post-excerpt__title-link">{post.title}</Link>
                </div>
                <PostSpecs className="post-excerpt__specs" post={post} commentCount={this.state.commentCount}/>
            </div>
        );
    }
}

export default PostExcerpt
