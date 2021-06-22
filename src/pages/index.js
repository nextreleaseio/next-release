import React from 'react';
import cx from 'classnames';
import Features from '../components/features';
import { Link, graphql, withPrefix, withAssetPrefix } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bottom from '../components/bottom';
import StyledButton from '../components/button';
import {
    faArrowRight,
    faChartLine,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from '../components/row';
import logo from '../images/NextRelease_Color_Icon.svg';
import Img from 'gatsby-image';
import help_image from '../images/NR_Help_Mast.png';
import Loom from '../components/loom';

const Feature = ({ feature }) => {
    const { title, path, image, items } = feature.node.frontmatter;
    return (
        <div className="px-4 flex flex-col justify-between">
            <div>
                <div className="flex flex-row items-center">
                    <div className="w-4/12">
                        <Img fluid={image.childImageSharp.fluid} />
                    </div>
                    <div className="w-8/12">
                        <Link
                            to={path}
                            className="text-xl font-bold font-serif text-purple-800"
                        >
                            {title}
                        </Link>
                    </div>
                </div>

                <ul className="list-disc text-grey-600 pl-8">
                    {items.map((feature, index) => {
                        return (
                            <li className="mt-4" key={index}>
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="text-center mt-2 mt-4">
                <Link to={path} className="font-bold text-purple-500">
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    );
};

const Testimonial = ({ testimonial, className }) => {
    const { name, business, jobtitle, image } = testimonial.node.frontmatter;
    className = cx(
        className,
        'rounded bg-purple-100 px-4 py-4 shadow flex flex-col justify-between'
    );
    return (
        <div className={className}>
            <div
                className="italic py-2 font-serif text-grey-800"
                dangerouslySetInnerHTML={{ __html: testimonial.node.html }}
            />
            <div className="mt-4 flex items-center">
                <div className="w-1/4 rounded-full border-2 border-white overflow-hidden">
                    <Img fluid={image.childImageSharp.fluid} />
                </div>
                <div className="w-3/4 pl-2">
                    <h4 className="font-bold text-purple-700 text-2xl leading-none">
                        {name}
                    </h4>
                    <h5 className="text-grey-600 font-bold leading-none mt-1">
                        {jobtitle}, {business}
                    </h5>
                </div>
            </div>
        </div>
    );
};

const Index = ({ data }) => {
    const features = data.features.edges;
    const testimonials = data.testimonials.edges;
    return (
        <Layout headerClass="relative bg-white">
            <SEO title="The Changelog Platform" />
            <div className="w-full bg-purple-800 relative">
                <div className="px-6 md:px-10 lg:px-24 text-white py-12 sm:w-full md:w-7/12">
                    <h1 className="text-5xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
                        Engage on Change
                    </h1>
                    <h2 className="text-purple-100 text-2xl leading-none mt-8 font-hairline">
                        Connect With Your Community on Every Change
                    </h2>
                    <a
                        href="https://my.nextrelease.io"
                        className="rounded py-2 btn-orange font-light px-12 text-3xl mt-8 inline-block"
                    >
                        Start Free Trial
                    </a>
                </div>
                <img
                    alt={'Next Release Logo'}
                    src={logo}
                    className="w-4/12 hidden sm:hidden md:block lg:block xl:block absolute home-page-icon"
                />
            </div>
            <Row>
                <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-5 self-start">
                    <div className="max-w-screen-xl mx-auto py-12 px-0 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Increase attention on your upcoming and recent
                            changes
                            <br />
                        </h2>
                        <ul className="mt-10">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded bg-purple-600 text-white">
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                size="2x"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                                            Release Notes and Changelogs
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Generate automatic and consistent
                                            release notes automatically with
                                            zero code, zero config, and zero
                                            effort. Next Release uses pull
                                            requests to organize and create your
                                            release notes with deep git and
                                            GitHub integration.
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded bg-purple-600 text-white">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                size="2x"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                                            Automatic Status Checks
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Next Release's powers your team with
                                            custom check runs to create custom
                                            checks ensuring code doesn't get
                                            merged in until all your
                                            dependencies are ready.
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex rounded items-center justify-center h-12 w-12 rounded bg-purple-600 text-white">
                                            <FontAwesomeIcon
                                                icon={faChartLine}
                                                size="2x"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                                            Reports & Analytics
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Your Next Release dashboard will
                                            give you project level data guiding
                                            you to understand how quickly
                                            releases are shipping and other
                                            critical insights about your team's
                                            performance.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Row>
            <Row classNames="bg-grey-200">
                <div className="sm:w-full md:w-3/4 mx-auto overflow-hidden rounded shadow-xl">
                    <Loom id="a45009101d8142d5ac50adb5e6adf4ff" />
                </div>
            </Row>

            <Row>
                <h4 className="text-4xl font-thin uppercase text-purple-600 text-center">
                    Features
                </h4>
                <div className="mx-auto sm:w-full md:w-8/10 grid grid-cols-1 md:grid-cols-2">
                    {features.map(feature => {
                        return (
                            <Feature
                                feature={feature}
                                key={feature.node.frontmatter.path}
                            />
                        );
                    })}
                </div>
            </Row>

            <Row
                classNames="bg-purple-800 bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-teal-400 uppercase text-center">
                    What Happy Customers Say
                </p>
                <h4 className="text-center text-purple-100 text-4xl font-black">
                    Why We Use Next Release
                </h4>
                <div className="flex flex-wrap w-full mt-4">
                    {testimonials.map(item => {
                        return (
                            <div
                                key={item.node.frontmatter.path}
                                className="flex h-full w-full md:w-1/2 mb-4 md:mb-0 md:p-4"
                            >
                                <Testimonial testimonial={item} />
                            </div>
                        );
                    })}
                </div>
            </Row>
            <div className="bg-grey-200 w-100 py-6 pb-12 px-6 md:px-10 lg:px-24">
                <div className="mt-20 font-serif">
                    <h4 className="w-full text-center md:text-4xl sm:text-3xl">
                        Three Steps to Automatic Release Notes
                    </h4>
                </div>
                <Features />
            </div>

            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query {
        features: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/product/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        items
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
        testimonials: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "content/testimonials/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        name
                        business
                        jobtitle
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    html
                }
            }
        }
    }
`;

export default Index;
