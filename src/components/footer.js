import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/nr_logo.svg';

const Footer = () => {
    return (
        <div className="w-full px-6 md:px-10 lg:px-24 py-8 pb-2">
            <div className="w-full flex">
                <div className="w-2/12 mr-8">
                    <img
                        src={logo}
                        alt="next release logo"
                        className="m-w-full"
                    />
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
                        <li className="mt-4">
                            <Link to="/cookie-policy">Cookie Policy</Link>
                        </li>
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
                        <li className="mt-4">
                            <Link to="/kb/what-is-next-release">
                                What is Next Release?
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/security">Security</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-2/12 mr-8">
                    <p className="font-bold text-lg">Support</p>
                    <ul className="text-grey-700">
                        <li className="mt-4">
                            <Link to="/help">Help Center</Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/kb/setup-next-release">
                                Setup Next Release
                            </Link>
                        </li>
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
