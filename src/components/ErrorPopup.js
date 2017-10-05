import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ErrorPopup.sass'

class ErrorPopup extends Component {
    state = {
        visible: false
    };

    componentWillReceiveProps(nextProps) {
        this.setState({visible: nextProps.errorOccurred});
    }

    hide() {
        this.setState({visible: false});
    }

    render() {
        const { message } = this.props;
        return (
            <div className={classNames('error-popup', { '_active': this.state.visible })}>
                <div className="error-popup__inner">
                    <div className="error-popup__title">Error</div>
                    <div className="error-popup__text">{message}</div>
                    <div className="error-popup__close" onClick={() => this.hide()}><span className="fa fa-close"></span></div>
                </div>
            </div>
        );
    }
}

ErrorPopup.propTypes = {
    message: PropTypes.string
};

export default connect(
    state => ({
        errorOccurred: state.error.errorOccurred,
        message: state.error.message
    })
)(ErrorPopup)