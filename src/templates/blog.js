import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/markdown-github.css';
import help_image from '../images/NR_Help_Mast.png';
import Row from '../components/row';
import Bottom from '../components/bottom';

export default ({ data }) => {
    const { blog } = data;
    const { title, subtitle, author, profilePic, date } = blog.frontmatter;
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
                <div className="md:w-2/3 sm:w-full mx-auto">
                    <div className="w-full">
                        <p className="font-bold text-lg text-grey-600">
                            {date}
                        </p>
                    </div>
                    <div
                        className="w-full markdown-body mt-4"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
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
