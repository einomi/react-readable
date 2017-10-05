import React, {Component} from 'react'
import  { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import './App.sass'
import routes from '../routes'
import ErrorPopup from './ErrorPopup'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.error && <ErrorPopup/>}
                {renderRoutes(routes)}
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        error: state.error
    })
)(App))