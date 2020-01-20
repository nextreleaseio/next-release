import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bottom from "../components/bottom";
import help_image from "../images/NR_Help_Mast.png";
import surf from "../images/narwhal_surfing.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Faqs = ({nodes}) => {
  return (
    <Accordion>

      {
        nodes.map(( faq, index ) => {
          return (
            <AccordionItem className="mt-4 bg-white rounded border-1 shadow py-4 px-6" key={index}>
              <AccordionItemHeading>
                <AccordionItemButton className="flex justify-between">
                  <h4 className="font-serif font-4xl font-bold">
                    {faq.node.frontmatter.title}?
                  </h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="pt-2 text-grey-700">
                <div dangerouslySetInnerHTML={{ __html: faq.node.html }}></div>
              </AccordionItemPanel>
            </AccordionItem>
          )
        })
      }
    </Accordion>
  );
};


const Help = ({data}) => {
  const faqs = data.faq.edges;
    return (
      <Layout headerClass="bg-white relative">
          <SEO title="Help"/>
          <div className="w-100 bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-32 sm:py-8"
               style={{ backgroundImage: `url(${help_image})` }}>
              <h1 className="text-4xl text-white font-black">
                  Hi! How Can We Help?
              </h1>
          </div>
          <div className="py-6 pb-12 px-6 md:px-10 lg:px-24 flex justify-center">
              <div className="md:w-1/3 sm:w-1/2 flex flex-col mx-3 p-8 rounded border border-grey-300 hover:shadow hover:bg-grey-100">
                <img src={surf} className="max-w-full"/>
                <div className="text-center">
                  <h4 className="font-bold font-serif">Get Started</h4>
                  <p className="mt-4 text-grey-600">Everything you need to know about Next Release</p>
                  <Link to="help/gettingstarted" className="text-purple-500 mt-8 text-sm px-2 font-bold rounded-full bg-purple-100">view</Link>
                </div>
              </div>
              <div className="md:w-1/3 sm:w-1/2 flex flex-col p-8 rounded border border-grey-300 hover:shadow hover:bg-grey-100"></div>
          </div>
          <div className="py-6 pb-12 px-6 md:px-10 lg:px-24 bg-grey-100">
            <div className="m-auto w-1/2">
              <h4 className="font-bold text-center text-grey-700 tracking-wide">Frequently Asked Questions</h4>
              <Faqs nodes={faqs}/>
            </div>
          </div>
          <Bottom/>
      </Layout>
    );
};


export const query = graphql`
    query {
        faq:
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/faq/" } }
                sort: { fields: [frontmatter___weight], order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            weight
                        }
                        html
                    }
                }
        },
        kb:
         allMarkdownRemark(
             filter: { fileAbsolutePath: { regex: "/content/kb/" } }
             sort: { fields: [frontmatter___weight], order: DESC }
         ) {
            edges {
                node {
                    frontmatter {
                        title,
                        path,
                        section
                    }
                }
            }
        }

    }
`;

export default Help