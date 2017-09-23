import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import startCase from 'lodash/startCase'

import './Breadcrumbs.sass'

class Breadcrumbs extends React.Component {
    state = {
        currentPath: this.props.path
    };

    _generateItems() {
        let items = [];
        this.props.pathname.split('/').forEach((item, index) => {
            switch (index) {
                case 0:
                    items.push({
                        name: 'Home',
                        path: '/'
                    });
                    break;
                case 1:
                    if (item === '') {
                        return;
                    }
                    items.push({
                        name: startCase(item),
                        path: '/' + item
                    });
                    break;
                case 2:
                    if (!this.props.post) {
                        break;
                    }
                    items.push({
                        name: this.props.post.title,
                        path: '#'
                    });
                    break;
                default:
                    console.warn('Unrecognized path');
            }
        });
        return items;
    }

    render() {
        const items = this._generateItems();
        return (
            <div className="breadcrumbs">
                {items.length > 1 && items.map((item, index) => {
                    return <Link key={index} to={item.path} className="breadcrumbs__item">{item.name}</Link>;
                })}
            </div>
        );
    }
}

function mapStateToProps(state, {location, match}) {
    const pathname = location.pathname;
    const post = state.post;
    return {
        pathname,
        post
    };
}

export default withRouter(connect(
    mapStateToProps
)(Breadcrumbs))