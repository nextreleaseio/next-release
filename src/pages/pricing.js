import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import cx from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Bottom from '../components/bottom';


const features = [
  '60 Day Free Trial',
  'Unlimited Public Repositories',
  'Great Live Chat & Email Support'
];

const plans = [
  {
    title: "Personal",
    blurb: "Start generating release notes for your own personal project",
    prices: {
      annual: {
        price: "$8",
        term: "/ month, billed annually"
      },
      month: {
        price: "$10",
        term: "/ month"
      }
    },
    features: [
      '1 Private Repository',
      '5 Users'
    ]
  },
  {
    title: "Starter",
    blurb: "Great for small teams with multiple projects",
    feature: true,
    prices: {
      annual: {
        price: "$16",
        term: "/ month, billed annually"
      },
      month: {
        price: "$20",
        term: "/ month"
      }
    },
    features: [
      '3 Private Repositories',
      '5 Users'
    ]
  },
  {
    title: "Growth",
    blurb: "Next Release is your personal Software Delivery Management Team",
    prices: {
      annual: {
        price: "$33",
        term: "/ month, billed annually"
      },
      month: {
        price: "$40",
        term: "/ month"
      }
    },
    features: [
      '6 Private Repositories',
      '5 Users'
    ]
  },
  {
    title: "Enterprise",
    blurb: "Next Release is your personal Software Delivery Management Team",
    contact: true,
    prices: {
      annual: {
        price: "Let's Talk!",
      },
      month: {
        price: "$40",
        term: "/ month"
      }
    },
    features: [
      '6 Private Repositories',
      '5 Users'
    ]
  }

];


const PricingCard = ( { classNames, isMonthly, plan } ) => {
  classNames = cx(classNames, 'px-10 py-6 w-3/12 flex flex-col');
  if (plan.feature) {
    classNames += " bg-white shadow"
  }

  return (
    <div className={classNames}>
      <div>
        <h3 className="font-bold text-2xl">{plan.title}</h3>
        <p className="text-grey-600 mt-2">{plan.blurb}</p>
        <div className="mt-4">
          <span className="text-3xl font-extrabold">
            {isMonthly ? plan.prices.month.price : plan.prices.annual.price}
          </span>
          <span className="text-grey-600">
            {isMonthly ? plan.prices.month.term : plan.prices.annual.term}
          </span>
        </div>
        <div className="mt-4">
          <a href="https://my.nextrelease.io" className="btn btn-purple hover:-translate-1 hover:bg-orange-600 block text-center">
            Sign Up
          </a>
        </div>
        <div className="mt-4">
          {
            features.map((feature, key) => {
              return (
                <p className="text-grey-500 mt-2 text-sm" key={key}>
                  <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2"/>
                  {feature}
                </p>
              )
            })
          }
          {
            plan.features.map((feature, key) => {
              return (
                <p className="text-grey-500 mt-2 text-sm" key={key}>
                  <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2"/>
                  {feature}
                </p>
              )
            })
          }
          <p className="text-grey-500 mt-2 text-sm">
            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2"/>
            Great Live Chat & Email Support
          </p>
        </div>
      </div>
    </div>
  )
};


const PricingTable = ({isMonthly}) => {

  return (
    <div className="rounded bg-grey-200 d-flex flex flex-row md:w-8/12 sm:w-11/12 -m-16">
      {plans.map((plan, key) => {
        return (
          <PricingCard plan={plan} isMonthly={isMonthly} key={key}/>
        )
      })}
    </div>
  )
};



const Pricing = () => {
  const [ isMonthly, toggleMonthly ] = useState(false);
  const btnBase = "py-2 px-4 transition flex-grow";
  const activeBtn = "bg-purple-100 text-purple-900";
  const btn = "bg-purple-700 hover:bg-purple-900 text-grey-400";
  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Pricing"/>
      <div className="bg-purple-800 py-16 text-white text-center">
        <div className="md:w-6/12 m-auto mb-20">
          <h1 className="text-4xl font-bold">Flexible, transparent pricing that adapts to your needs</h1>
          <h2 className="text-purple-100 mt-4 text-base font-bold">Try Next Release for 60 Days for free. No Credit Card Required</h2>
          <a href="https://my.nextrelease.io" className="text-teal-600 mt-4">Sign up to get started!</a>
          <div className="flex mt-8 w-9/12 mx-auto">
            <button className={cx(btnBase, "rounded-l", (isMonthly ? activeBtn : btn))} onClick={() => toggleMonthly(true)}>Monthly Billing</button>
            <button className={cx(btnBase, "rounded-r", (isMonthly ? btn : activeBtn))} onClick={() => toggleMonthly(false)}>Annual Billing</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-20">
          <PricingTable isMonthly={isMonthly}/>
      </div>

      <Bottom className="mt-16"/>
    </Layout>
  );
};


export default Pricing;