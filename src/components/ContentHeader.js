import React from 'react'

import Breadcrumbs from './Breadcrumbs'
import './ContentHeader.sass'

const ContentHeader = () => (
    <div className="content-header">
        <div className="container">
            <Breadcrumbs />
        </div>
    </div>
);

export default ContentHeader
