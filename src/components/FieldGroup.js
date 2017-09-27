import React, { createElement } from 'react'

export default ({ input, inputType, name, children, className, type, label, placeholder, meta: { touched, error } }) => {
    return (
        <div className="form__group">
            <label htmlFor={input.name} className="form__label">{label}</label>
            {touched && error && <div className="error">{error}</div>}
            {createElement(
                inputType, {
                    ...input,
                    type,
                    className,
                    children,
                    id: input.name
                }
            )}
        </div>
    );
};
