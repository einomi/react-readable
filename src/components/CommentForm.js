import React, { Component } from 'react'
import { Field } from 'redux-form'

import { required } from '../utils/validation'
import FieldGroup from './FieldGroup'

const CommentForm = ({onSubmit, mode}) => (
    <form action="" className="form" onSubmit={onSubmit}>
        {!(mode === 'edit') && <div className="form__title">Add new comment</div>}
        <Field component={FieldGroup} inputType="textarea" name="body" className="form__input i-textarea" validate={[required]}/>
        <button className="button">{mode === 'edit' ? 'Save' : 'Add'}</button>
    </form>
);

export default CommentForm