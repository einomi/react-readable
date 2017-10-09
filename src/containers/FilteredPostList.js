import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import { getFilteredPosts } from '../reducers'
import PostList from '../components/PostList'
import NoPosts from '../components/NoPosts'

class FilteredPostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts, category } = this.props;
        if (category && posts.length === 0) {
            return <NoPosts category={category} />;
        }
        return <PostList posts={posts}/>;
    }
}

function mapStateToProps(state, { match }) {
    const category = match.params.category;
    return {
        posts: getFilteredPosts(state, category),
        category
    };
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(FilteredPostList));
