import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import background from '../images/NR_Help_Mast.png';
import { Link } from 'gatsby';

const features = [
    '60 Day Free Trial',
    'Unlimited Public Repositories',
    'Great Live Chat & Email Support'
];

const plans = [
    {
        title: 'Personal',
        blurb: 'Start generating release notes for your own personal project',
        prices: {
            annual: {
                price: '$8',
                term: '/ month, billed annually'
            },
            month: {
                price: '$10',
                term: '/ month'
            }
        },
        features: ['1 Private Repository', '5 Users']
    },
    {
        title: 'Starter',
        blurb: 'Great for small teams with multiple projects',
        feature: true,
        prices: {
            annual: {
                price: '$16',
                term: '/ month, billed annually'
            },
            month: {
                price: '$20',
                term: '/ month'
            }
        },
        features: ['3 Private Repositories', '5 Users']
    },
    {
        title: 'Growth',
        blurb:
            'Next Release is your personal Software Delivery Management Team',
        prices: {
            annual: {
                price: '$33',
                term: '/ month, billed annually'
            },
            month: {
                price: '$40',
                term: '/ month'
            }
        },
        features: ['6 Private Repositories', '5 Users']
    },
    {
        title: 'Enterprise',
        blurb:
            'Next Release is your personal Software Delivery Management Team',
        contact: true,
        prices: {
            annual: {
                price: "Let's Talk!"
            },
            month: {
                price: '$40',
                term: '/ month'
            }
        },
        features: ['6 Private Repositories', '5 Users']
    }
];

const Content = () => {
    return (
        <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div className="relative">
                <div className="absolute inset-0 h-3/4 bg-gray-300"></div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
                        <div className="rounded-lg shadow-lg overflow-hidden">
                            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                <div>
                                    <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                                        Starter
                                    </span>
                                </div>
                                <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                                    $16
                                    <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                                        /mo
                                    </span>
                                </div>
                                <p className="mt-5 text-lg leading-7 text-gray-500">
                                    Great for small teams with multiple
                                    projects, who need to make an impact.
                                </p>
                            </div>
                            <div className="px-6 pt-6 pb-8 bg-grey-100 sm:p-10 sm:pt-6">
                                <ul>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            Unlimited public repositories
                                        </p>
                                    </li>
                                    <li className="mt-4 flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            3 Private Repositories
                                        </p>
                                    </li>
                                    <li className="mt-4 flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            5 Users
                                        </p>
                                    </li>
                                    <li className="mt-4 flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            2 Report Templates
                                        </p>
                                    </li>
                                </ul>
                                <div className="mt-6 rounded-md shadow">
                                    <a
                                        href="https://my.nextrelease.io?signup=starter"
                                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                <div>
                                    <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                                        Growth
                                    </span>
                                </div>
                                <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                                    $33
                                    <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                                        /mo
                                    </span>
                                </div>
                                <p className="mt-5 text-lg leading-7 text-gray-500">
                                    Next Release is your personal Software
                                    Delivery Management Team.
                                </p>
                            </div>
                            <div className="px-6 pt-6 pb-8 bg-grey-100 sm:p-10 sm:pt-6">
                                <ul>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            Unlimited public repositories
                                        </p>
                                    </li>
                                    <li className="mt-4 flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            6 Private Repositories
                                        </p>
                                    </li>
                                    <li className="mt-4 flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            5 Users
                                        </p>
                                    </li>
                                    <li className="mt-4 flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 text-green-500"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-base leading-6 text-gray-700">
                                            5 Report Templates
                                        </p>
                                    </li>
                                </ul>
                                <div className="mt-6 rounded-md shadow">
                                    <a
                                        href="https://my.nextrelease.io"
                                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="max-w-md mx-auto lg:max-w-5xl">
                    <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                        <div className="flex-1">
                            <div>
                                <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-green-100 text-green-600">
                                    Free For Open Source
                                </span>
                            </div>
                            <div className="mt-4 text-lg leading-7 text-gray-500">
                                We're committed to supporting open-source
                                projects through our own open-source
                                contributions and making Next Release free for
                                any public repository on Github. Next Release
                                works great by automatically tagging and
                                publishing releases, with automatic changelog
                                support.
                            </div>
                        </div>
                        <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                            <a
                                href="https://my.nextrelease.io/"
                                className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                            >
                                Sign Up Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="max-w-md mx-auto lg:max-w-5xl">
                    <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                        <div className="flex-1">
                            <div>
                                <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                                    Enterprise
                                </span>
                            </div>
                            <div className="mt-4 text-lg leading-7 text-gray-500">
                                If you have special needs or custom
                                requirements, we work with customers to develop
                                a pricing and feature set that makes the most
                                sense for their unique business requirements.
                            </div>
                        </div>
                        <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                            <Link
                                to="contact"
                                className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pricing = () => {
    return (
        <Layout>
            <SEO title="Pricing" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">Pricing</p>
                <h1 className="text-4xl font-bold text-white">
                    The right price for you, whoever you are
                </h1>
                <h2 className="text-purple-200 mt-4 font-bold">
                    Try Next Release for 60 Days for free. No Credit Card
                    Required
                </h2>
            </Row>
            <Row classNames="bg-grey-300">
                <Content />
            </Row>
        </Layout>
    );
};

export default Pricing;
