import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/markdown-github.css';
import Bottom from '../components/bottom';
import Row from '../components/row';
import background from '../images/NR_Help_Mast.png';

const TOC = ({ filtered }) => {
    return (
        <div>
            <h4 className="text-2xl text-grey-500">Related</h4>
            {filtered.map(({ node }) => {
                return (
                    <div
                        key={node.frontmatter.path}
                        className="px-4 py-2 mt-2 rounded border border-grey-300 bg-grey-100 hover:shadow hover:bg-grey-200"
                    >
                        <Link to={node.frontmatter.path}>
                            <p className="font-bold">
                                {node.frontmatter.title}
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ({ data }) => {
    const { kb, all } = data;
    const title = kb.frontmatter.title;
    const matches = all.edges.filter(({ node }) => {
        return node.frontmatter.section === kb.frontmatter.section;
    });
    return (
        <Layout
            headerClass="relative bg-white"
            bodyClass="px-0 md:px-0 lg:px-0"
        >
            <SEO title={title} />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Help Center
                </p>
                <h1 className="text-4xl font-bold text-white">{title}</h1>
            </Row>
            <div className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover">
                <div className="container py-6 pb-12 px-6 md:px-10 lg:px-24">
                    <div className="flex md:flex-row sm:flex-row-reverse justify-between flex-wrap">
                        <div className="md:w-1/4 sm:w-full">
                            <TOC filtered={matches} />
                        </div>
                        <div className="md:w-1/2 sm:w-full md:mr-16">
                            <h2 className="text-4xl font-bold text-purple-700">
                                {title}
                            </h2>
                            <div className="markdown-body mt-8">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: kb.html
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query($id: String) {
        kb: markdownRemark(id: { eq: $id }) {
            frontmatter {
                path
                section
                title
            }
            html
        }
        all: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/kb/" }
                id: { ne: $id }
            }
            sort: { fields: [frontmatter___weight], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        section
                    }
                    excerpt
                }
            }
        }
    }
`;
