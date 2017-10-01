import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { deletePost } from '../actions'

const QUESTION = 'Are you sure you want to delete this post?';

class DeletePostLink extends Component {
    state = {
        deleteSuccess: false
    };

    handleClick = () => {
        let dialogResult = window.confirm(QUESTION);
        dialogResult && this.props.deletePost(this.props.id).then(() =>
            this.setState({ deleteSuccess: true }));
    };

    render() {
        const { id, children, className } = this.props;
        return (
            <div className={className}>
                {this.state.deleteSuccess && <Redirect to="/delete-success"/>}
                <div onClick={() => this.handleClick(id)}>{children}</div>
            </div>
        );
    }
}

export default connect(null, { deletePost })(DeletePostLink)