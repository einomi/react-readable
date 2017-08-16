import React, {Component} from 'react'
import { Route } from 'react-router'

import FilteredPostList from '../containers/FilteredPostList'
import './App.sass'

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={FilteredPostList} />
                <Route path="/category/:category" component={FilteredPostList} />
            </div>
        );
    }
}

export default App