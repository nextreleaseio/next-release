import React from 'react';
import bottom from '../images/content-bottom-bg1.png';
import cx from 'classnames';

const Bottom = ({ classNames }) => {
    classNames = cx(
        classNames,
        'w-100 bg-no-repeat bg-white bg-cover text-center pt-8 pb-32'
    );
    return (
        <div
            className={classNames}
            style={{ backgroundImage: `url(${bottom})` }}
        >
            <h4 className="text-4xl mt-8">
                Automatic Release Notes. Zero Effort.
            </h4>
            <p>
                Sign up today with instant, no-hassle setup. No credit card
                required!
            </p>
            <a
                href="https://my.nextrelease.io"
                className="btn btn-orange mt-4 inline-block"
            >
                Sign Up Now
            </a>
        </div>
    );
};

export default Bottom;
