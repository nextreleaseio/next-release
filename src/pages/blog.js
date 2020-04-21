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
                    <div className="w-full mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
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
                                <div key={post.node.frontmatter.path}>
                                    <p className="text-sm leading-5 text-grey-600">
                                        <time
                                            dateTime={
                                                post.node.frontmatter.date
                                            }
                                        >
                                            {post.node.frontmatter.date}
                                        </time>
                                    </p>
                                    <Link
                                        to={post.node.frontmatter.path}
                                        className="block"
                                    >
                                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                            {post.node.frontmatter.title}
                                        </h3>
                                        <div className="flex mt-3 ">
                                            <span className="text-grey-400 font-weight-bold mr-4">
                                                <img style={profileStyle} />
                                                {post.node.frontmatter.author}
                                            </span>
                                            <p className="text-base leading-6 text-gray-500">
                                                {post.node.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="mt-3">
                                        <Link
                                            to={post.node.frontmatter.path}
                                            className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                                        >
                                            Read
                                        </Link>
                                    </div>
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
