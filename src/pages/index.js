import React from "react";
import cx from "classnames";
import Features from "../components/features";
import Helmet from "react-helmet";
import { Link, graphql, withPrefix, withAssetPrefix } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bottom from "../components/bottom";
import StyledButton from "../components/button"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = ({feature}) => {
  const {title, path, image, items} = feature.node.frontmatter;
  const src = withPrefix(image);
  return (
    <div className="w-1/3 mr-4">
      <div className="flex flex-row items-start">
        <div className="w-4/12">
          <img src={src} className="w-full"/>
        </div>
        <div className="w-8/12">
          <Link to={path} className="text-xl font-bold font-serif text-purple-800">
            {title}
          </Link>

        </div>
      </div>
      <div>
        <ul className="list-disc text-grey-600 pl-8">
          {
            items.map(( feature, index ) => {
              return (<li className="mt-4" key={index}>{feature}</li>)
            })
          }
        </ul>
        <div className="text-center mt-2">
          <Link to={path} className="font-bold text-purple-500">
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

function Index({ data }) {
  const features = data.features.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div className="w-full bg-purple-800">
        <div className="px-6 md:px-10 lg:px-24 text-white py-16 sm:w-full md:w-7/12">
          <h1 className="text-5xl font-black font-serif leading-1">Simpler release notes. Finally.</h1>
          <h2 className="text-purple-200 text-2xl leading-none mt-8 font-hairline">Automatic, consistent and effortless notes for every release, for every project.</h2>
          <a href="https://my.nextrelease.io" className="rounded py-2 btn-orange font-light px-12 text-3xl mt-8 inline-block">
            Start Free Trial
          </a>
        </div>
      </div>
      <div className="w-full py-6 pb-12 clearfix px-6 md:px-10 lg:px-24">
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 self-start">
          <h3 className="text-3xl md:text-5xl text-purple-700 font-serif leading-tight">
            Your Time is Valuable. Spend less of it managing release notes.
          </h3>
          <p className="text-grey-600 font-sans mt-4">
            Introducing a no-code, no-config solution aimed at providing release notes for every repository across your
            organization. Share product updates with zero developer effort, featuring automatic versioning, Slack
            updates, and fully editable release notes.
          </p>
          <div className="self-center mt-8">
            <Link to="/product">
              <StyledButton>Features</StyledButton>
            </Link>
          </div>


          <div className="flex flex-col mt-10 md:mt-16">
            <p className="mb-2 text-4xl text-gray-800 self-center">
              Features
            </p>

            <div className="flex flex-row">
              {
                features.map(feature => {
                  return (
                    <Feature feature={feature} key={feature.path} />
                  )
                })
              }
            </div>


          </div>
        </div>

      </div>

    <div className="bg-grey-200 w-100 py-6 pb-12 px-6 md:px-10 lg:px-24">
      <div className="mt-20 font-serif">
        <h4 className="w-full text-center md:text-4xl sm:text-3xl">Three Steps to Automatic Release Notes</h4>
      </div>
      <Features/>
    </div>
    <Bottom/>
    </Layout>
  );
}

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
            image
            items
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
