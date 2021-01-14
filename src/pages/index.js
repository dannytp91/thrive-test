// @vendors
import React from 'react';

// @components
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import Greet from '../components/greet/greet';
import EmbeddedVideo from '../components/embedded-video/embedded-video';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Greet text="Hello World" url="https://www.google.com" />
        <EmbeddedVideo url="https://www.youtube.com/embed/kr4g2h5YmnU" />
    </Layout>
);

export default IndexPage;
