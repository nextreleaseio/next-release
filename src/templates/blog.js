import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/markdown-github.css';
import help_image from '../images/NR_Help_Mast.png';
import Row from '../components/row';
import Bottom from '../components/bottom';
import AuthorDetails from '../components/author';

export default ({ data }) => {
    const { blog } = data;
    const { title, subtitle, author, date } = blog.frontmatter;
    const { html, timeToRead } = blog;

    const heading = subtitle ? subtitle : 'Next Release';
    return (
        <Layout
            headerClass="relative bg-white"
            bodyClass="px-0 md:px-0 lg:px-0"
        >
            <SEO title={title} />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    {heading}
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    {title}
                </h1>
                <p className="text-small text-center text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Est Reading Time: {timeToRead} min
                </p>
            </Row>
            <Row>
                <div className="md:w-3/4 flex md:flex-row sm:flex-col justify-content-between sm:w-full mx-auto">
                    <div className="md:w-1/4 sm:w-full mt-4">
                        <AuthorDetails name={author} />
                    </div>

                    <div className="md:w-3/4 md:px-8 sm:w-full mt-4">
                        <p className="font-bold text-grey-600">{date}</p>
                        <div
                            className="markdown-body mt-2"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query($id: String) {
        blog: markdownRemark(id: { eq: $id }) {
            frontmatter {
                path
                title
                subtitle
                author
                profilePic
                date(formatString: "MMM D, YYYY")
            }
            html
            timeToRead
        }
    }
`;
