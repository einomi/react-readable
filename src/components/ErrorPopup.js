import React from 'react'
import { connect } from 'react-redux'

const Error = ({ message }) => (
    <div className="error">
        <div className="erorr__text">{message}</div>
        <div className="error__close"><span className="fa fa-close"></span></div>
    </div>
);

export default connect(
    state => ({
        message: state.error.message
    })
)(Error)