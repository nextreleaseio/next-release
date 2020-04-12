import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import background from '../images/NR_Help_Mast.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Img from 'gatsby-image';

const Solution = ({ solution, classNames }) => {
    classNames = cx(classNames, 'w-full sm:w-1/2 md:w-1/3 p-2');
    const { title, path, items } = solution.node.frontmatter;
    return (
        <div className={classNames}>
            <Link
                to={path}
                className="text-2xl text-purple-700 font-bold hover:text-purple-600 hover:underline"
            >
                {title}
            </Link>
            <ul className="list-disc text-grey-600 pl-8">
                {items.map((solution, index) => {
                    return (
                        <li className="mt-4" key={index}>
                            {solution}
                        </li>
                    );
                })}
            </ul>
            <div className="mt-4 ml-8">
                <Link to={path} className="font-bold text-purple-500">
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    );
};

const Performance_Notes = ({ data }) => {
    const solutions = data.allMarkdownRemark.edges;

    return (
        <Layout headerClass="bg-white relative">
            <SEO title="Solutions" />

            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Performance Notes
                </p>
                <h1 className="text-4xl font-bold text-white">
                    For Teams Who Need Elite Operations
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    You need to understand how changes are impacting your
                    product’s, team’s, and organization’s performance. We
                    integrate with your existing toolchains to bring you release
                    notes that visually show what has changed and what the
                    impact of those changes are.
                </p>
            </Row>
            {solutions.map((solution, index) => {
                const direction = index % 2 ? 'flex-row-reverse' : 'row';
                const rowClass = cx('flex', direction);
                const image = solution.node.frontmatter.image;
                return (
                    <Row key={solution.node.frontmatter.path}>
                        <div className={rowClass}>
                            <div className="md:w-1/3 sm:w-full px-4">
                                <Img fluid={image.childImageSharp.fluid} />
                            </div>
                            <Solution
                                classNames="md:w-1/3 sm:w-full px-4"
                                solution={solution}
                            />
                        </div>
                    </Row>
                );
            })}
            <Row classNames="text-center md:py-12 sm:py-8">
                <a
                    className="btn btn-purple hover:bg-orange-600"
                    href="https://calendly.com/nextrelease-devon/performance-release-notes-introductory-meeting"
                >
                    Schedule Your Performance Notes Integration Today
                </a>
            </Row>
        </Layout>
    );
};

export const query = graphql`
    query SolutionQuery {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/performance_notes/" }
            }
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
    }
`;

export default Performance_Notes;
