import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NoPosts = ({ category }) => (
    <div className="page page-error">
        <div className="container">
            <div className="page__title title">There are no posts in {category} category</div>
            <Link to="/" className="link">Go to home page</Link>
        </div>
    </div>
);

NoPosts.propTypes = {
    category: PropTypes.string.isRequired
};

export default NoPosts