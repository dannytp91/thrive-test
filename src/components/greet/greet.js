// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './greet.css';

function Greet({ text, url }) {
    return (
        <a className="greet" href={url} target="blank">
            <h1>{text}</h1>
        </a>
    );
}

Greet.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Greet;
