import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../css/markdown-github.css';
import help_image from '../images/NR_Help_Mast.png';
import nr_logo from '../images/icons/NextRelease_Color_Stacked.png';
import Row from '../components/row';
import Bottom from '../components/bottom';
import AuthorDetails from '../components/author';

export default ({ data }) => {
    const { hiring } = data;
    const { title, subtitle, author, date } = hiring.frontmatter;
    const { html, timeToRead } = hiring;
    const image = hiring.frontmatter.image || nr_logo;
    const heading = subtitle ? subtitle : 'Next Release';
    return (
        <Layout
            headerClass="relative bg-white"
            bodyClass="px-0 md:px-0 lg:px-0"
        >
            <SEO title={title} description={subtitle} image={image} />
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
            </Row>
            <Row>
                <div className="md:w-2/5 flex md:flex-row flex-col justify-content-between xs:w-full  mx-auto">
                    <div className="sm:w-full">
                        <div
                            className="text-grey-600 prose mt-2"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </Row>
        </Layout>
    );
};

export const query = graphql`
    query($id: String) {
        hiring: markdownRemark(id: { eq: $id }) {
            frontmatter {
                path
                title
                subtitle
            }
            html
            timeToRead
        }
    }
`;
