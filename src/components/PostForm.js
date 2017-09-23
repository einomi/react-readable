import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { Redirect } from 'react-router'

import * as actions from '../actions'

class PostForm extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    _onSend = (e) => {
        e.preventDefault();
        let data = {
            id: uuidv4(),
            timestamp: +new Date(),
            title: this.titleInput.value,
            category: this.categoryInput.value,
            body: this.bodyInput.value,
            author: this.props.user.name,
        };
        this.props.addPost(data);
    };

    render() {
        return (
            <div>
                {this.props.form.addPostSuccess && <Redirect to="/add-post/success"/>}

                <form action="" className="form" onSubmit={this._onSend}>
                    <div className="form__groups">
                        <div className="form__group">
                            <label htmlFor="title" className="form__label">Title</label>
                            <input id="title" name="title" type="text" className="i-text" required ref={input => this.titleInput = input}/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="category" className="form__label">Category</label>
                            <select id="category" name="category" className="i-select" required ref={select => this.categoryInput = select}>
                                {this.props.categories.map((category, index) => (
                                    <option key={index} value={category.path}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form__group">
                            <label htmlFor="body" className="form__label">Body</label>
                            <textarea id="body" name="body" className="form__input i-textarea" required ref={input => this.bodyInput = input}></textarea>
                        </div>
                    </div>
                    <button className="button">Add</button>
                </form>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        categories: state.categories,
        post: state.post,
        user: state.user,
        form: state.form
    }),
    actions
)(PostForm);
