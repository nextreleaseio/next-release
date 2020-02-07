import cx from "classnames";
import React from "react";

export default ( { className, children, ...props } ) => {
  className = cx(
    "py-2 px-4 text-white font-bold btn-purple btn font-sans uppercase shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};