import { Link } from 'gatsby';
import React from 'react';

const HelpCard = ({ url, title, excerpt }) => {
    return (
        <div>
            <div className="inline-block"></div>
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
