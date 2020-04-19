import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bottom from '../components/bottom';
import help_image from '../images/NR_Help_Mast.png';
import Row from '../components/row';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogIndex = ({ data }) => {
    const all = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Blog" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    Next Release
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    Next Release Ideas
                </h1>
                <p className="text-small text-center text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Announcements, articles about our work, and open-source
                    thoughts from the team of Next Release
                </p>
            </Row>
            <Row classNames="flex sm:flex-wrap">
                <div className="sm:w-full mx-auto md:w-2/3 sm:px-2 md:px-4">
                    <h2 className="font-bold text-3xl">Latest Posts</h2>
                    <div className="w-full">
                        {all.map(post => {
                            let profileStyle = {
                                width: '35px',
                                height: '35px',
                                backgroundImage:
                                    'url(' +
                                    post.node.frontmatter.profilePic +
                                    ')',
                                borderRadius: '50%',
                                backgroundSize: 'cover',
                                margin: 'auto'
                            };
                            return (
                                <div
                                    key={post.node.frontmatter.path}
                                    className="w-3/4 mt-4"
                                >
                                    <Link
                                        to={post.node.frontmatter.path}
                                        className="flex justify-between items-end flex-wrap"
                                    >
                                        <div>
                                            <h3 className="font-bold text-2xl">
                                                {post.node.frontmatter.title}
                                            </h3>
                                            <p className="mt-2 uppercase text-purple-800">
                                                {post.node.frontmatter.date}
                                            </p>
                                        </div>
                                        <span className="text-grey-600 font-bold">
                                            <img style={profileStyle} />
                                            {post.node.frontmatter.author}
                                        </span>
                                    </Link>
                                    <p className="text-grey-600 font-serif mt-4">
                                        <em>{post.node.excerpt}</em>
                                    </p>
                                    <Link
                                        to={post.node.frontmatter.path}
                                        className="bg-purple-100 text-purple-700 mt-2 inline-block text-sm rounded px-2 py-1"
                                    >
                                        Read{' '}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/blog/" } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        author
                        profilePic
                        date(formatString: "MMM D, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`;

export default BlogIndex;
