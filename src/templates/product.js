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
            </Row>
            <Row classNames="bg-white flex flex-row flex-wrap">
                <div className="overflow-hidden">
                    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
                        <div className="mx-auto text-base max-w-prose lg:max-w-none">
                            <p className="text-base leading-6 text-purple-600 font-semibold tracking-wide uppercase">
                                How It Works
                            </p>
                            <h2 className="mt-2 mb-8 w-3/4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                {subtitle}
                            </h2>
                        </div>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                            <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
                                <svg
                                    className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                    width="404"
                                    height="384"
                                    fill="none"
                                    viewBox="0 0 404 384"
                                >
                                    <defs>
                                        <pattern
                                            id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                            x="0"
                                            y="0"
                                            width="20"
                                            height="20"
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect
                                                x="0"
                                                y="0"
                                                width="4"
                                                height="4"
                                                className="text-gray-200"
                                                fill="currentColor"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect
                                        width="404"
                                        height="384"
                                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                                    />
                                </svg>
                                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                    <figure className="md:hidden lg:block">
                                        <div className="relative pb-7/12 lg:pb-0 bg-white">
                                            <Img
                                                fluid={
                                                    image.childImageSharp.fluid
                                                }
                                                className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                                            />
                                        </div>
                                        <figcaption className="flex mt-3 text-sm text-black font-bold">
                                            <ul className="list-disc ml-8 text-grey-600 pl-8 lg:w-3/4">
                                                {items.map((feature, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {feature}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="prose text-gray-600 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
                                    dangerouslySetInnerHTML={{
                                        __html: service.html
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                subtitle
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
