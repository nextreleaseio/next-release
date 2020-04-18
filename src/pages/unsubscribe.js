import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import background from '../images/NR_Help_Mast.png';
import React from 'react';
import withLocation from '../components/location';

const Button = ({ token }) => {
    let [isSending, setIsSending] = React.useState(false);
    let [hasSent, setSent] = React.useState(false);
    let [error, setError] = React.useState(false);

    async function submitForm(code) {
        setIsSending(true);
        await fetch('https://api.nextrelease.io/app/unsubscribe', {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({ token: code })
        })
            .then(res => res.json())
            .then(() => {
                setIsSending(false);
                setSent(true);
            })
            .catch(() => {
                setIsSending(false);
                setError(true);
            });
    }

    if (isSending) {
        return (
            <div className="w-50 flex justify-center">
                <p>Submitting...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-50 flex justify-center">
                <div className="flex column justify-center">
                    <p className="text-red-700">
                        An error has occurred, please try again!
                    </p>
                    <button
                        className="btn btn-purple"
                        onClick={() => {
                            submitForm(token);
                        }}
                    >
                        Unsubscribe
                    </button>
                </div>
            </div>
        );
    }

    if (hasSent) {
        return (
            <div className="w-50 flex justify-center">
                You have been unsubscribed!
            </div>
        );
    }

    return (
        <div className="w-50 flex justify-center">
            <button
                className="btn btn-purple"
                onClick={() => {
                    submitForm(token);
                }}
            >
                Unsubscribe
            </button>
        </div>
    );
};

const UnsubscribePage = ({ token }) => {
    return (
        <Layout>
            <SEO title="Unsubscribe From Email Reports" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Sorry To See You Go
                </p>
                <h1 className="text-4xl font-bold text-white">Unsubscribe</h1>
            </Row>
            <Row>
                <Button token={token} />
            </Row>
        </Layout>
    );
};

export default withLocation(UnsubscribePage);
