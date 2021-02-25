import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bottom from '../components/bottom';
import help_image from '../images/NR_Help_Mast.png';
import Row from '../components/row';
import { Link } from 'gatsby';

export default ({ pageContext: { stats } }) => {
    console.log(stats);
    if (typeof stats === 'undefined' || Array.isArray(stats)) {
        stats = {
            release_notes_identified: 568,
            releases_engaged: 385,
            percent_of_release_notes_engaged: 67.8,
            percent_of_release_notes_liked: 61.2,
            percent_of_release_notes_shared: 22.5,
            average_likes_of_release_with_like: 3.2,
            average_shares_of_shared_releases: 2.1
        };
    }
    return (
        <Layout>
            <SEO title="Release Note Community" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    Next Release
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    Release Note Communities
                </h1>
                <p className="text-small text-center text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Engage the growing release note community and help support
                    teams that are publishing changelogs for their members.
                </p>
            </Row>

            <Row>
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                    <div className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <h3 className="text-lg font-medium">
                            <Link
                                to="twitter-community/showcase"
                                className="focus:outline-none"
                            >
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                >
                                    {' '}
                                </span>
                                Release Notes on Twitter
                            </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Checkout the latest release notes and changelog
                            updates posted to Twitter from communities like
                            Ethereum, Nintendo, Minecraft, Javascript, Cardano,
                            and Xbox.
                        </p>
                    </div>
                    <div className="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <h3 className="text-lg font-medium">
                            <Link
                                to="reddit-community/showcase"
                                className="focus:outline-none"
                            >
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                >
                                    {' '}
                                </span>
                                Release Notes on Reddit
                            </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Checkout the latest release notes and changelog
                            updates posted to Reddit from communities like
                            Cosmos, Android, Cisco, Flutter, Python, Clojure,
                            and Star Wars Squadrons.
                        </p>
                    </div>
                </div>
            </Row>
            <Row>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Last 3 days
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Release Notes Identified
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                    {stats.release_notes_identified.toLocaleString()}
                                </dd>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Avg. Likes
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                    {stats.average_likes_of_release_with_like.toLocaleString()}
                                </dd>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                    Avg. Shares
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                    {stats.average_shares_of_shared_releases.toLocaleString()}
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};
