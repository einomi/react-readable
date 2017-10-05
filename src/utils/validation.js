export const required = value => value ? undefined : 'Required';
export const categoryRequired = value => (
    value !== 'none' && value !== undefined ? undefined : 'Please, select category'
);
