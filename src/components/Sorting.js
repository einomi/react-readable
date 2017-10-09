import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

import * as actions from '../actions';
import './Sorting.sass';

class Sorting extends Component {
    static propTypes = {
        sortBy: PropTypes.object
    };

    handleChange = (e) => {
        this.props.sortPosts(e.target.value);
    };

    render() {
        const { sortBy } = this.props;
        return (
            <select className="sorting" onChange={this.handleChange} defaultValue={sortBy.param || 'none'}>
                <option value="none" disabled>Sort by</option>
                <option value="title">Title</option>
                <option value="timestamp">Date</option>
                <option value="voteScore">Score</option>
            </select>
        );
    }
}

export default withRouter(connect(
    state => ({
        sortBy: state.posts.sortBy
    }),
    actions
)(Sorting));