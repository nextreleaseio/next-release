import React from "react";
import Helmet from "react-helmet";
import cx from "classnames";
import Header from "./header";
import Footer from "./footer";
import SEO from './seo'
import "../css/style.css";

const Layout = ({ className, headerClass, bodyClass, children, ...props }) => {
  bodyClass = bodyClass || "w-full";
  return (
    <div className={cx(className, "flex flex-col justify-content-between")} {...props}>
      <SEO/>
      <Helmet>
        <body className="font-sans antialiased" />
      </Helmet>

      <Header className={headerClass} />
      <div className={bodyClass}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
