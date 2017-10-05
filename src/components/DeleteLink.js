import React, { Component } from 'react'
import { Redirect } from 'react-router'

class DeleteLink extends Component {
    state = {
        deleteSuccess: false
    };

    handleClick = () => {
        let dialogResult = window.confirm(this.props.question);
        dialogResult && this.props.clickAction(this.props.id).then(() =>
            this.props.successPath && this.setState({ deleteSuccess: true }));
    };

    render() {
        const { id, children, className } = this.props;
        return (
            <div className={className}>
                {this.props.successPath && this.state.deleteSuccess && <Redirect to={this.props.successPath}/>}
                <div onClick={() => this.handleClick(id)}>{children}</div>
            </div>
        );
    }
}

export default DeleteLink