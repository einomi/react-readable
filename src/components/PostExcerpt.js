import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import PostSpecs from './PostSpecs'
import * as api from '../utils/api'
import './PostExcerpt.sass';

class PostExcerpt extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired,
        className: PropTypes.string
    };

    state = {
        commentCount: 0
    };

    componentDidMount() {
        api.fetchComments(this.props.post.id).then(comments => {
            const commentCount = comments.length || 0;
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
