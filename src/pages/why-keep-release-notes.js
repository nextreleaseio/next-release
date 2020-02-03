import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import help_image from '../images/NR_Help_Mast.png';

export default () => {
    return (
        <Layout>
            <SEO title="Why Automate Your Release Notes" />
            <Row
                className="bg-no-repeat bg-center bg-cover md:py-12 sm:py-4"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    Automate The Boring Stuff
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    Why Should You Automate Your Release Notes?
                </h1>
            </Row>
        </Layout>
    );
};
