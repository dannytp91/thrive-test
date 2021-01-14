// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @queries
import { useSiteTitleQuery } from './queries';

//@styles
import '../../assets/css/styles.css';
import './layout.css';

const Layout = ({ children }) => {
    const data = useSiteTitleQuery();

    return (
        <div className="container">
            <main>{children}</main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
