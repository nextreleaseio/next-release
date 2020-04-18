import React from 'react';
import Row from '../components/row';
import Bottom from '../components/bottom';
import Layout from '../components/layout';
import SEO from '../components/seo';
import background from '../images/NR_Help_Mast.png';
import Loom from '../components/loom';
import withLocation from '../components/location';

const VideoPage = ({ search }) => {
    const id = search.id || 'a45009101d8142d5ac50adb5e6adf4ff';
    const name = search.name ? `${search.name}'s` : 'Your';
    return (
        <Layout>
            <SEO title="Welcome To Next Release" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Automatic Release Notes with Next Release
                </p>
                <h1 className="text-4xl font-bold text-white">
                    {name} Personal Demo
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    We made this personal demo just for you.
                </p>
            </Row>
            <Row>
                <div className="w-3/4 mx-auto">
                    <Loom id={id} />
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};

export default withLocation(VideoPage);
