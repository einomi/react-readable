import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../actions'

class AddPostSuccess extends Component {
    componentDidMount() {
        this.props.addPostSuccessMessageShown();
    }

    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="page__title title">Post was successfully added!</div>
                    <Link to="/" className="link">Go to home page</Link>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(AddPostSuccess);