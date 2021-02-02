import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import background from '../images/NR_Help_Mast.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookOpen,
    faCheckDouble,
    faTachometerAlt,
    faFileCode,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Img from 'gatsby-image';

const features = [
    {
        title: 'Automatic Release Notes',
        description:
            'Generate editable and consistent release notes and changelogs for every project with zero developer effort.',
        url: '/features/automatic',
        icon: faFileCode
    },
    {
        title: 'Pull Request Dependencies',
        description:
            'Need to wait on that backend PR? Next Release helps you create custom status checks for each pull request.',
        icon: faCheckDouble,
        url: '/features/pull-request-dependencies'
    },
    {
        title: 'Team Performance',
        description:
            'Next Release gives you tools for high-performing teams, to understand how changes are impacting product and team performance.',
        url: '/performance-notes',
        icon: faTachometerAlt
    },
    {
        title: 'Reports and Publishing',
        description:
            'Keep your team updated with custom slack, email, or webhook notifications with your release notes.',
        url: '/features/share-changes',
        icon: faBookOpen
    },
    {
        title: 'Community Engagement',
        description:
            'Keep your customer community updated on changes that impact them. Automatically publish release notes to ' +
            'your social network accounts like Twitter using our notification integrations.',
        url: '/features/community-engagement',
        icon: faUserFriends
    }
];

const Feature = ({ feature }) => {
    return (
        <div className="mt-10 sm:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 rounded text-white">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
            </div>
            <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    {feature.description}
                </p>
                <p className="mt-2">
                    <Link
                        to={feature.url}
                        className="mt-2 text-sm text-purple-400 font-bold tracking-wide lowercase bg-purple-100 rounded-lg px-2"
                    >
                        More
                    </Link>
                </p>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <Layout headerClass="bg-white relative">
            <SEO title="Features" />

            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">Features</p>
                <h1 className="text-4xl font-bold text-white">
                    Want Release Notes?
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Effortless Release Notes, Status Checks, Reports and More
                </p>
            </Row>
            <Row>
                <div className="bg-gray-50 overflow-hidden">
                    <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <svg
                            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                            width="404"
                            height="784"
                            fill="none"
                            viewBox="0 0 404 784"
                        >
                            <defs>
                                <pattern
                                    id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="404"
                                height="784"
                                fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
                            />
                        </svg>

                        <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
                            <div className="lg:col-span-1">
                                <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                    Zero Effort, Awesome Results
                                </h3>
                            </div>
                            <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
                                {features.map(feature => {
                                    return (
                                        <Feature
                                            feature={feature}
                                            key={feature.name}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Layout>
    );
};

export default Features;
