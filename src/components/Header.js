import React from 'react'
import { Link } from 'react-router-dom'

import './Header.sass'

const Header = () => (
    <header className="site-header">
        <Link to="/" className="site-header__title">Readable</Link>
    </header>
);

export default Header