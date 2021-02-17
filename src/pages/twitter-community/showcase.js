import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Row from '../../components/row';
import background from '../../images/NR_Help_Mast.png';
import {
    TwitterTimelineEmbed,
    TwitterFollowButton,
    TwitterHashtagButton
} from 'react-twitter-embed';

const Showcase = ({}) => {
    return (
        <Layout headerClass="bg-white relative">
            <SEO title="Release Note Twitter Community" />

            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Release Note Twitter Community
                </p>
                <h1 className="text-4xl font-bold text-white">
                    Showcasing the Top Release Notes of the Day
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Join the changelog community by following us to stay updated
                    on the latest releases and see how teams are using release
                    notes to engage their communities.
                </p>
                <div
                    style={{
                        width: '200px',
                        height: 'auto',
                        margin: '0 auto',
                        padding: '10px',
                        position: 'relative'
                    }}
                >
                    <TwitterFollowButton screenName={'nextreleaseio'} />
                </div>
            </Row>
            <Row>
                <div
                    className="grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-6"
                    style={{ paddingBottom: '15px' }}
                >
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-3">
                        <TwitterHashtagButton tag={'releasenotes'} />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-3">
                        <TwitterHashtagButton tag={'changelog'} />
                    </div>
                </div>
                <div
                    style={{
                        width: '60%',
                        height: 'auto',
                        margin: '0 auto',
                        padding: '10px',
                        position: 'relative'
                    }}
                >
                    <TwitterTimelineEmbed
                        sourceType="likes"
                        screenName="nextreleaseio"
                        options={{ height: 1200 }}
                    />
                </div>
            </Row>
        </Layout>
    );
};

export default Showcase;
