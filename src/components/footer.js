import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <div>

      <div className="w-full px-8 py-2 text-white text-xs font-light bg-black flex flex-col sm:flex-row justify-between items-start md:items-center">
        <div>
          <strong className="font-bold">Phone: </strong>
          XXX XXX XXX
          <strong className="ml-3 font-bold">Email: </strong>
          xxx@xxx.com
        </div>
        <div>
          <Link to="/" className="hover:underline">
            www.xxx.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

