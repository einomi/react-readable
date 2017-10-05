import React from 'react'
import { Link } from 'react-router-dom'

const DeletePostSuccess = () => (
    <div className="page">
        <div className="container">
            <div className="page__title title">Post was successfully removed!</div>
            <Link to="/" className="link">Go to home page</Link>
        </div>
    </div>
);

export default DeletePostSuccess