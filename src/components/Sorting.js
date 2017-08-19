import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import './Sorting.sass';

class Sorting extends Component {
    handleChange = (e) => {
        this.props.sortPosts(e.target.value);
    };

    render() {
        return (
            <select className="sorting" onChange={this.handleChange} defaultValue={undefined || 'none'}>
                <option value="none" disabled>Sort by</option>
                <option value="title">Title</option>
                <option value="timestamp">Date</option>
                <option value="voteScore">Score</option>
            </select>
        );
    }
}

function mapStateToProps(state, {match}) {
//     const id = match.params.id;
    return {
//         id,
//         posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sortPosts: (param) => dispatch(actions.sortPosts(param))
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Sorting));