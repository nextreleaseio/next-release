import React from "react";
import cx from "classnames";
import Features from "../components/features";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bottom from "../components/bottom";
import StyledButton from "../components/button"


const Product = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-indigo-700 hover:text-indogo-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};


function Index({ data }) {
  const services = data.product.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div className="w-full bg-purple-800">
        <div className="px-6 md:px-10 lg:px-24 text-white py-20">
          <h1 className="font-bold text-5xl">Simpler release notes. Finally.</h1>
          <h2 className="text-purple-200 text-3xl">Consistent, effortless notes for every release, for every project</h2>
          <a href="https://my.nextrelease.io" className="btn btn-orange text-3xl mt-8 inline-block">
            Start Free Trial
          </a>
        </div>
      </div>
      <div className="w-100 py-6 pb-12 clearfix px-6 md:px-10 lg:px-24">
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif self-start">
          <h3 className="text-3xl md:text-5xl text-purple-700 leading-tight">
            Your Time is Valuable. Spend less of it managing release notes.
          </h3>
          <p className="text-grey-600 font-sans">
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
              Our Services
            </p>

            <div className="flex flex-wrap">
              {services.map(( { node } ) => (
                <Product
                  title={node.frontmatter.title}
                  url={node.frontmatter.path}
                  key={node.frontmatter.path}
                >
                  {node.excerpt}
                </Product>
              ))}
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
    product: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/product/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
