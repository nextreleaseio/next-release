import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Row from "../components/row";
import background from "../images/NR_Help_Mast.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

const Feature = ( { feature, classNames } ) => {
  classNames = cx(classNames, "w-full sm:w-1/2 md:w-1/3 p-2");
  const { title, path, items } = feature.node.frontmatter;
  return (
    <div className={classNames}>
      <Link
        to={path}
        className="text-2xl text-purple-700 font-bold hover:text-purple-600 hover:underline"
      >
        {title}
      </Link>
      <ul className="list-disc text-grey-600 pl-8">
        {
          items.map(( feature, index ) => {
            return (<li className="mt-4" key={index}>{feature}</li>)
          })
        }
      </ul>
      <div className="mt-4 ml-8">
        <Link to={path} className="font-bold text-purple-500">
          Learn More <FontAwesomeIcon icon={faArrowRight}/>
        </Link>
      </div>
    </div>
  );
};

const Features = ( { data } ) => {
  const features = data.allMarkdownRemark.edges;

  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Features"/>

      <Row classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
           style={{ backgroundImage: `url(${background})` }}>
        <p className="text-small text-teal-400 uppercase">Features</p>
        <h1 className="text-4xl font-bold text-white">Tired of managing release notes? We’re here to help.</h1>
        <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
          A no-code, no-config solution aimed at providing release notes for every repository across your
          organization. Share product updates with zero developer effort, featuring automatic versioning, Slack updates,
          and fully editable release notes.
        </p>
      </Row>
      {features.map((feature, index) => {
        const direction = (index % 2) ? 'row': 'flex-row-reverse';
        const rowClass = cx('flex', direction);
        return (
          <Row key={feature.node.frontmatter.path}>
            <div className={rowClass}>
              <div className="md:w-1/3 sm:w-full px-4">
                <img src={feature.node.frontmatter.image} class="w-full"/>
              </div>
              <Feature classNames="md:w-1/3 sm:w-full px-4" feature={feature}/>
            </div>
          </Row>
        )
      })

      }
    </Layout>
  );
};

export const query = graphql`
    query ProductQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/product/" } }
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

export default Features;
