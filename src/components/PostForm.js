import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router'
import { Field } from 'redux-form'

import * as actions from '../actions'
import FieldGroup from './FieldGroup'
import { required, categoryRequired } from '../utils/validation'

class PostForm extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategory() {
        return (
            <Field component={FieldGroup} inputType="select" id="category" name="category" label="Category" className="form__input i-select" validate={[categoryRequired]}>
                <option value="none" disabled>Select category</option>
                {this.props.categories.map((category, index) => (
                    <option key={index} value={category.path}>{category.name}</option>
                ))}
            </Field>
        );
    }

    render() {
        const { onSubmit, mode } = this.props;
        return (
            <form action="" className="form" onSubmit={onSubmit} method="PUT">
                <div className="form__groups">
                    <Field component={FieldGroup} inputType="input" type="text" name="title" label="Title" className="form__input i-text" validate={[required]} />
                    {mode === 'add' && this.renderCategory()}
                    <Field component={FieldGroup} inputType="textarea" id="body" name="body" label="Body" className="form__input i-textarea" validate={[required]} />
                </div>
                <button className="button">{ mode === 'add' ? 'Add' : 'Save'}</button>
            </form>
        );
    }
}

export default connect(
    state => ({
        categories: state.categories,
    }),
    actions
)(PostForm);
