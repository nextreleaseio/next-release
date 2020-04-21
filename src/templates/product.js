import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import '../css/markdown-github.css';
import Bottom from '../components/bottom';
import help_image from '../images/NR_Help_Mast.png';
import Img from 'gatsby-image';

export default ({ data }) => {
    const { service } = data;
    const { title, subtitle, items, image } = service.frontmatter;
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
                    Next Release
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    {title}
                </h1>
                <p className="text-small text-center text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    {subtitle}
                </p>
            </Row>
            <Row classNames="bg-grey-100 flex flex-row flex-wrap">
                <div className="md:w-1/3 md:px-4 sm:w-full sm:px-2">
                    <div className="flex">
                        <div className="flex flex-row items-center">
                            <div className="w-4/12">
                                <Img fluid={image.childImageSharp.fluid} />
                            </div>
                            <div className="w-8/12">{title}</div>
                        </div>
                    </div>
                    <div>
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
                    <div className="flex justify-center mt-8">
                        <Link to="/features" className="btn btn-purple">
                            All Features
                        </Link>
                    </div>
                </div>
                <div
                    className="md:w-2/3 md:px-4 sm:w-full sm:px-2 sm:mt-4 markdown-body"
                    dangerouslySetInnerHTML={{ __html: service.html }}
                />
            </Row>
            <Bottom />
        </Layout>
    );
};

export const query = graphql`
    query($id: String) {
        service: markdownRemark(id: { eq: $id }) {
            frontmatter {
                path
                title
                items
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
`;
