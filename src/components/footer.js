import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/nr_logo.svg';

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="xl:col-span-1">
                        <img
                            src={logo}
                            alt="next release logo"
                            className="h-10"
                        />
                        <p className="mt-8 text-grey-600 text-base leading-6">
                            Automatic and effortless Release Notes, with no code
                            required.
                        </p>
                        <div className="mt-8 flex">
                            <a
                                href="https://www.github.com/nextreleaseio/next-release"
                                className="text-grey-500 hover:text-grey-600"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/nextreleaseio"
                                className="ml-6 text-grey-500 hover:text-grey-600"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-grey-500 uppercase">
                                    Solutions
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="features/automatic"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Automatic Release Notes
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="features/share-changes"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Reports
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/performance_notes"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Team Performance
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-grey-500 uppercase">
                                    Support
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="/pricing"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/help"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Documentation
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/kb/setup-next-release"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Setup Next Release
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/kb/what-is-next-release"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            What is Next Release?
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-grey-500 uppercase">
                                    Company
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="/blog"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Blog
                                        </Link>
                                    </li>

                                    <li className="mt-4">
                                        <Link
                                            to="/security"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Security
                                        </Link>
                                    </li>

                                    <li className="mt-4">
                                        <Link
                                            to="/contact"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-grey-500 uppercase">
                                    Legal
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="/cookie-policy"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Cookie Policy
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/terms-of-service"
                                            className="text-grey-600 hover:text-gray-900"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/privacy-policy"
                                            className="text-base leading-6 text-grey-600 hover:text-gray-900"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base leading-6 text-grey-500 xl:text-center">
                        &copy; 2020 Next Release, LLC. All rights reserved. Made
                        with &#10084; in Michigan.
                    </p>
                </div>
            </div>
        </div>
    );
};

const oldFooter = () => {
    return (
        <div className="w-full px-6 md:px-10 lg:px-24 py-8 pb-2">
            <div className="w-full flex">
                <div className="w-2/12 mr-8">
                    <ul className="text-grey-700">
                        <li className="mt-4">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/terms-of-service">Terms of Service</Link>
                        </li>
                        <li className="mt-4"></li>
                    </ul>
                </div>
                <div className="w-2/12 mr-8">
                    <p className="font-bold text-lg">Product</p>
                    <ul className="text-grey-700">
                        <li className="mt-4">
                            <Link to="/why-keep-release-notes">
                                Why Keep Release Notes?
                            </Link>
                        </li>
                        <li className="mt-4"></li>
                        <li className="mt-4"></li>
                        <li className="mt-4"></li>
                    </ul>
                </div>
                <div className="w-2/12 mr-8">
                    <p className="font-bold text-lg">Support</p>
                    <ul className="text-grey-700">
                        <li className="mt-4"></li>
                        <li className="mt-4"></li>
                        <li className="mt-4">
                            <Link to="/kb/how-next-release-categorizes-your-pull-requests/">
                                How Next Release Categorizes Your Pull Requests
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-100 text-center text-sm text-grey-500 mt-8">
                <p>Copyright 2020</p>
                <p>Made with &#10084; in Michigan</p>
            </div>
        </div>
    );
};

export default Footer;
