import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import * as actions from '../actions';
import { getFilteredPosts } from '../reducers'
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

function mapStateToProps(state, {match}) {
    const category = match.params.category;
    return {
        posts: getFilteredPosts(state, category),
    };
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(FilteredPostList));
