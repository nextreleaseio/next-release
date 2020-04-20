import { Link } from 'gatsby';
import React from 'react';

const HelpCard = ({ url, title, excerpt, category }) => {
    return (
        <div>
            <div>
                <a href="#" className="inline-block">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                        {category}
                    </span>
                </a>
            </div>
            <Link to={url} className="block">
                <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                    {excerpt}
                </p>
            </Link>
        </div>
    );
};

export default HelpCard;
