import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

import * as actions from '../actions';
import { getFilteredPosts } from '../reducers'
import PostList from '../components/PostList'
import NoPosts from '../components/NoPosts'

class FilteredPostList extends Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object).isRequired,
        sortBy: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts, category, sortBy } = this.props;
        if (category && posts.length === 0) {
            return <NoPosts category={category}/>;
        }
        return <PostList posts={posts} sortBy={sortBy}/>;
    }
}

function mapStateToProps(state, { match }) {
    const category = match.params.category;
    return {
        posts: getFilteredPosts(state, category),
        sortBy: state.posts.sortBy,
        category
    };
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(FilteredPostList));
