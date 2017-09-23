import moment from 'moment'

export const defaultDateFormat = (timestamp) =>
    moment(timestamp).format('MMM Do YYYY, h:mm a');