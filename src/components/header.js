import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import logo from "../images/NextRelease_TextLogo_White.svg";

const StyledLink = ({ className, ...props }) => {
  className = cx(className);
  return (
    <Link className={className} {...props}>
      {props.children}
    </Link>
  );
};

const HeaderLink = ({ className, children, ...props }) => {
  className = cx(
    "w-full md:w-auto py-2 md:px-1 -mb-1 text-white font-bold hover:text-purple-100 border-transparent border-t-4 md:hover:border-orange-600 relative",
    className
  );
  return (
    <div className="flex px-1">
      <Link
        className={className}
        {...props}
        activeClassName="md:border-orange-700"
      >
        {children}
      </Link>
    </div>
  );
};

const Header = ({ className, ...props }) => {
  let [isExpanded, toggleExpansion] = useState(false);

  className = cx("w-full bg-purple-800", className);
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap flex-row items-start md:items-center justify-between px-6 md:px-10 lg:px-24 text-white-100">
        <div className="my-2">
          <Link to="/">
            <img className="w-3/5" alt="Next Release Homepage" src={logo} />
          </Link>
        </div>

        <button
          className="block relative md:hidden border border-white-100 my-2 px-3 py-2"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:w-1/2 flex md:flex flex-col md:flex-row justify-center md:justify-between items-stretch md:items-center py-1`}
        >
          <HeaderLink to="/product">Features</HeaderLink>
          <HeaderLink to="/pricing">Pricing</HeaderLink>
          <div className="flex px-1">
            <a className="w-full md:w-auto py-2 md:px-1 -mb-1 text-white font-bold hover:text-purple-100 border-transparent border-t-4 md:hover:border-orange-800 relative"
               href="https://my.nextrelease.io">
              Login
            </a>
          </div>
          <div className="flex px-1">
            <a className="w-full md:w-auto py-2 px-4 hover:bg-orange-700 transition mb-1 bg-orange-600 text-white font-bold rounded border-transparent relative"
               href="https://my.nextrelease.io">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
