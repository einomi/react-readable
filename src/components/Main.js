import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'

import ContentHeader from './ContentHeader'
import './Main.sass'

class Main extends Component {
    render() {
        return (
            <main className="main">
                <ContentHeader />
                {renderRoutes(this.props.route.routes)}
            </main>
        );
    }
}

export default Main
