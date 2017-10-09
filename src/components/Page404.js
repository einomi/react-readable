import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => (
    <div className="page page-error">
        <div className="container">
            <div className="page__title title">Page not found</div>
            <Link to="/" className="link">Go to home page</Link>
        </div>
    </div>
);

export default Page404