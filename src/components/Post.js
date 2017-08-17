import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import './Post.sass';

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.id);
    }

    render() {
        const { title, body, voteScore } = this.props.post;
        return (
            <div className="post">
                <div className="container">
                    <header className="post__header">
                        <h1 className="post__title title">{title}</h1>
                        <div className="post__specs">
                            <time className="post__spec iconic"><span className="iconic__icon fa fa-clock-o"></span> 16 Aug, 2017, 9:50</time>
                            <div className="post__spec iconic _comments"><span className="iconic__icon fa fa-comment-o"></span> No Comments</div>
                            <div className="post__spec"><span className="iconic__icon fa fa-heart-o"></span> {voteScore}</div>
                        </div>
                    </header>
                    <div className="post__content">
                        <p className="post__text text">{body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, { match }) {
    const id = match.params.id;
    return {
        id,
        post: state.post
    };
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(Post));