import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useForm } from '@statickit/react';
import Row from '../components/row';
import background from '../images/NR_Help_Mast.png';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OptInForm = () => {
    const [state, handleSubmit] = useForm('contact');
    if (state.succeeded) {
        return (
            <div className="sm:w-10/12 md:w-1/2 mx-auto p-4 rounded bg-white shadow rounded">
                Thank's for the feedback!
            </div>
        );
    }
    return (
        <div className="sm:w-10/12 md:w-1/2 px-8 py-4 mx-auto rounded bg-white shadow rounded">
            <form onSubmit={handleSubmit}>
                <div className="w-full text-green-500">
                    <FontAwesomeIcon
                        icon={faEnvelopeOpenText}
                        className="mr-2"
                    />
                    <span>We usually respond in a few hours!</span>
                </div>
                <div className="w-full mt-4">
                    <label htmlFor="email" className="font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="rounded bg-grey-200 w-full border border-grey-400 p-2 block"
                    />
                </div>
                <div className="mt-4 w-full">
                    <label htmlFor="message" className="font-bold">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="rounded bg-grey-200 border border-grey-400 p-2 block w-full"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn btn-purple mt-8"
                >
                    Contact Us
                </button>
            </form>
        </div>
    );
};

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Questions or Comments
                </p>
                <h1 className="text-4xl font-bold text-white">
                    Want To Talk Release Notes?
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    A great set of release notes in the hands of both your team
                    and customers will help your release cycles run more
                    smoothly and efficiently.
                </p>
            </Row>
            <Row classNames="bg-grey-200">
                <OptInForm />
            </Row>
        </Layout>
    );
};

export default Contact;
