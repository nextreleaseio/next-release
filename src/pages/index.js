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
import Row from '../components/row';
import logo from "../images/NextRelease_Color_Icon.svg";
import Img from "gatsby-image"
import help_image from "../images/NR_Help_Mast.png";


const Feature = ({feature}) => {
  const {title, path, image, items} = feature.node.frontmatter;
  return (
    <div className="mx-4 px-4 md:w-1/3 sm:w-full">
      <div className="flex flex-row items-center">
        <div className="w-4/12">
          <Img fluid={image.childImageSharp.fluid} />
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

const Testimonial = ({testimonial, className}) => {
  const {name, business, jobtitle, image} = testimonial.node.frontmatter;
  className = cx(className, "rounded bg-purple-100 px-4 py-4 shadow flex flex-col justify-between");
  return (
    <div className={className}>
      <p className="italic py-2 font-serif text-grey-800" dangerouslySetInnerHTML={{ __html: testimonial.node.html }}></p>
      <div className="mt-4 flex items-center">
        <div className="w-1/4 rounded-full border-2 border-white overflow-hidden">
          <Img fluid={image.childImageSharp.fluid} />
        </div>
        <div className="w-3/4 pl-2">
          <h4 className="font-bold text-purple-700 text-2xl leading-none">{name}</h4>
          <h5 className="text-grey-600 font-bold leading-none mt-1">{jobtitle}, {business}</h5>
        </div>

      </div>
    </div>
  );
};

function Index({ data }) {
  const features = data.features.edges;
  const testimonials = data.testimonials.edges;
  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div className="w-full bg-purple-800 relative">
        <div className="px-6 md:px-10 lg:px-24 text-white py-12 sm:w-full md:w-7/12">
          <h1 className="text-5xl font-black font-serif leading-none">Simpler release notes. Finally.</h1>
          <h2 className="text-purple-200 text-2xl leading-none mt-8 font-hairline">Automatic, consistent and effortless notes for every release, for every project.</h2>
          <a href="https://my.nextrelease.io" className="rounded py-2 btn-orange font-light px-12 text-3xl mt-8 inline-block">
            Start Free Trial
          </a>
        </div>
        <img src={logo} className="w-4/12 sm:hidden md:block absolute home-page-icon"/>
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
            <Link to="/automatic-release-notes">
              <StyledButton>How It Works</StyledButton>
            </Link>
          </div>
        </div>

      </div>

      <Row classNames="bg-grey-200">
        <div className="flex flex-row">
          {
            features.map(feature => {
              return (
                <Feature feature={feature} key={feature.path}/>
              )
            })
          }
        </div>
      </Row>

      <Row classNames="bg-purple-800 py-12 bg-no-repeat bg-center bg-cover"
           style={{ backgroundImage: `url(${help_image})` }}>
        <p className="text-small text-teal-400 uppercase text-center">What Happy Customers Say</p>
        <h4 className="text-center text-purple-100 text-4xl font-black">Why We Use Next Release</h4>
        <div className="w-10/12 mx-auto flex mt-4">
          {
            testimonials.map(item => {
              return (<Testimonial className="md:w-1/3 sm:w-full mx-4" key={item.node.path} testimonial={item}/>);
            })
          }
        </div>
      </Row>
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
            items
            image {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
          excerpt
        }
      }
    }
    testimonials: allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "content/testimonials/"}}
    ) {
        edges {
            node {
                frontmatter {
                  path
                  title
                  name
                  business
                  jobtitle
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
    }
  }
`;

export default Index;
