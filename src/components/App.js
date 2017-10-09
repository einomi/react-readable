import React from 'react'
import  { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './Header'
import './App.sass'
import routes from '../routes'
import ErrorPopup from './ErrorPopup'

const App = ({ error }) => (
    <div>
        <Header />
        {error && <ErrorPopup/>}
        {renderRoutes(routes)}
    </div>
);

App.propTypes = {
    error: PropTypes.object.isRequired
};

export default withRouter(connect(
    state => ({
        error: state.error
    })
)(App))