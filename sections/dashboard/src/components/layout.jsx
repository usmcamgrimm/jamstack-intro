import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const layout = ({ children }) => (
    <>
        <header>
            <Link to="/">JAMStack App</Link>
        </header>
        <main>{children}</main>
    </>
);

export default layout;
