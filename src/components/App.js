import React, {Component} from 'react'
import { Route } from 'react-router'
import  { renderRoutes } from 'react-router-config'

import Header from './Header'
import './App.sass'
import routes from '../routes'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {renderRoutes(routes)}
            </div>
        );
    }
}

export default App