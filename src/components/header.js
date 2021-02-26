import React, { useState } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import logo from '../images/NextRelease_TextLogo_White.svg';

const HeaderLink = ({ className, children, ...props }) => {
    className = cx(
        'w-full md:w-auto py-2 md:px-1 -mb-1 text-white font-bold hover:text-purple-100 border-transparent border-t-4 md:hover:border-orange-600 relative',
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

    className = cx('w-full bg-purple-800', className);
    return (
        <div className={className} {...props}>
            <div className="flex flex-row items-start md:items-center justify-between px-6 md:px-10 lg:px-24 text-white-100">
                <div className="my-2">
                    <Link to="/">
                        <img
                            className="w-3/5"
                            alt="Next Release Homepage"
                            src={logo}
                        />
                    </Link>
                </div>

                <div
                    className={`${
                        isExpanded ? `block` : `hidden`
                    } md:w-3/4 flex md:flex flex-col md:flex-row justify-center md:justify-between items-stretch md:items-baseline py-1`}
                >
                    <HeaderLink to="/features">Features</HeaderLink>
                    <HeaderLink to="/pricing">Pricing</HeaderLink>
                    <HeaderLink to="/blog">Blog</HeaderLink>
                    <HeaderLink to="/contact">Contact</HeaderLink>
                    <div className="flex px-1">
                        <a
                            className="w-full md:w-auto py-1 px-4 hover:bg-orange-700 transition mb-1 bg-orange-600 text-white font-bold rounded border-transparent relative"
                            href="https://my.nextrelease.io"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
                <button
                    className="block relative md:hidden border border-white my-2 px-3 py-2"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                        className="fill-current text-white h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="relative bg-orange-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="pr-16 sm:text-center sm:px-16">
                        <p className="font-medium text-white">
                            <span className="md:hidden">
                                We're Growing Our Team!
                            </span>
                            <span className="hidden md:inline">
                                We're Growing Our Team! Help Us Build
                                Communities Around Release Notes!
                            </span>
                            <span className="block sm:ml-2 sm:inline-block">
                                <Link
                                    to="/hiring"
                                    className="text-white font-bold underline"
                                >
                                    Apply Today{' '}
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                        <button
                            type="button"
                            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <span className="sr-only">Dismiss</span>
                            <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
