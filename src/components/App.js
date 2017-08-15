import React, {Component} from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions';
import './App.css';
import Post from './Post'

class App extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="app-wrapper">
                {this.props.posts.map((post, index) => {
                        return <Post key={index} {...post} />;
                    }
                )}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts,
    };
}

export default connect(
    mapStateToProps,
    actions
)(App);
