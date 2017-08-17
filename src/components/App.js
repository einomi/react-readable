import React, {Component} from 'react'
import { Route } from 'react-router'

import FilteredPostList from '../containers/FilteredPostList'
import Header from './Header'
import Post from './Post'
import './App.sass'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="main">
                    <Route path="/" exact component={FilteredPostList} />
                    <Route path="/:category" exact component={FilteredPostList} />
                    <Route path="/:category/:id" component={Post} />
                </main>
            </div>
        );
    }
}

export default App