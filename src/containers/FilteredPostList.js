import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import * as actions from '../actions';
import PostList from '../components/PostList'

class FilteredPostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const {posts} = this.props;

        return <PostList posts={posts}/>;
    }
}

function getFilteredPosts(posts, category) {
    if (category) {
        return posts.filter(post => post.category === category);
    }

    return posts;
}

function mapStateToProps(state, {match}) {
    const category = match.params.category;
    return {
        posts: getFilteredPosts(state.posts, category),
    };
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(FilteredPostList));
