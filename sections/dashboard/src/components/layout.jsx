import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import { IdentityContextProvider } from 'react-netlify-identity-widget'

const layout = ({ children }) => (
    <IdentityContextProvider url="https://grimm-jamstackIntro-auth.netlify.com">
        <header>
            <Link to="/">JAMStack App</Link>
        </header>
        <main>{children}</main>
    </IdentityContextProvider>
);

export default layout;
