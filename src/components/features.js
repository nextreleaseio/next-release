import React from 'react';
import authenticate from "../images/AuthenticateGithub1.svg";
import selectRepo from "../images/SelectRepo-01.svg";
import configEnv from "../images/ConfigEnvironment-01.svg";

export default () => {
  return (
    <div className="flex flex-wrap justify-center items-stretch -mx-2">
      <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
        <div className="h-full m-2 p-4 bg-white rounded shadow hover:shadow-1 border-1 border-gray-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <img alt="authenticate github app" src={authenticate}/>
          </div>
          <p className="text-2xl w-full font-serif">Authenticate Github</p>
          <p className="text-grey-600">We need your permission to generate release notes on your behalf. To see why we need which permissions
            check out our.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
        <div className="h-full m-2 p-4 bg-white rounded shadow hover:shadow-1 border-1 border-gray-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <img alt="select repositories" src={selectRepo}/>
          </div>
          <p className="text-2xl w-full font-serif">Select Repositories</p>
          <p className="text-grey-600">Pick which projects you want automatic release notes for. If you have a lot of projects, hit us up and
            we’ll help you set them up.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
        <div className="h-full m-2 p-4 bg-white rounded shadow hover:shadow-1 border-1 border-gray-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <img alt="modeling" src={configEnv}/>
          </div>
          <p className="text-2xl w-full font-serif">Define Environment</p>
          <p className="text-grey-600">Track releases created against a single branch or if you maintain a branch for each deployed (Staging, QA, Prod) environment.</p>
        </div>
      </div>
    </div>
  )
}