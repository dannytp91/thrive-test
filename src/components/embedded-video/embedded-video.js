// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './embedded-video.css';

function EmbeddedVideo({ url }) {
    return (
        <div className="embedded-video">
            <iframe
                allowFullScreen
                frameBorder="0"
                height="100%"
                src={url}
                title="Youtube Video"
                width="100%"
            />
        </div>
    );
}

EmbeddedVideo.propTypes = {
    url: PropTypes.string.isRequired,
};

export default EmbeddedVideo;
