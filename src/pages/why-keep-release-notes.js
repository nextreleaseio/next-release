import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import help_image from '../images/NR_Help_Mast.png';
import communicate from '../images/nr_icon_communicate.svg';
import lifebelt from '../images/icons/lifebelt.svg';
import social from '../images/icons/social.svg';
import source from '../images/icons/source-code.svg';
import group from '../images/icons/user-group.svg';
import releases from '../images/nr_icon_managereleases.svg';
import calendar from '../images/nr_icon_track.svg';
import handshake from '../images/nr_icon_partna.svg';
import Bottom from '../components/bottom';

export default () => {
    return (
        <Layout>
            <SEO title="Why Automate Your Release Notes" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${help_image})` }}
            >
                <p className="text-small text-center text-teal-400 uppercase">
                    Automate The Boring Stuff
                </p>
                <h1 className="text-4xl text-center font-bold text-white">
                    Why Should You Automate Your Release Notes?
                </h1>
            </Row>
            <Row classNames="bg-grey-100">
                <div className="md:w-10/12 sm:w-10/12 mx-auto flex justify-between">
                    <div className="w-1/4 sm:p-2 md:px-8">
                        <img
                            alt="Communicate Changes to Everyone"
                            src={communicate}
                        />
                    </div>
                    <div className="w-3/4 sm:p-2 md:px-8">
                        <h2 className="font-bold text-3xl">
                            Communicate Changes to Everyone
                        </h2>
                        <p className="text-grey-700 mt-4">
                            Whether you work among multiple cross functional
                            teams or in a highly siloed organization, release
                            notes are how you share exactly what other teams
                            need to know. You can be using completely different
                            toolchains from your peers and still get the updates
                            you need to understand what actions your team needs
                            to take.
                        </p>
                    </div>
                </div>
            </Row>
            <Row classNames="bg-grey-100 flex flex-wrap">
                <div className="sm:w-1/2 md:w-3/12 flex flex-col px-4 items-start sm:mt-8">
                    <img alt="Developer Focused" src={source} />
                    <h4 className="font-bold mt-4 text-2xl">Developers</h4>
                    <p className="text-grey-600 mt-2">
                        If you’re developing services, release notes are your
                        way to tell other teams what changes you’ve made to your
                        interfaces.
                    </p>
                </div>
                <div className="sm:w-1/2 md:w-3/12 flex flex-col px-4 items-start sm:mt-8">
                    <img alt="Keep the Team Informed" src={group} />
                    <h4 className="font-bold mt-4 text-2xl">QA Teams</h4>
                    <p className="text-grey-600 mt-2">
                        If you’re on a quality assurance team, release notes are
                        your way to understand what other teams are expecting
                        you to test and where you can find the updates.
                    </p>
                </div>
                <div className="sm:w-1/2 md:w-3/12 flex flex-col px-4 items-start sm:mt-8">
                    <img src={lifebelt} alt="Sales & Customer Support" />
                    <h4 className="font-bold mt-4 text-2xl">
                        Sales & Customer Support
                    </h4>
                    <p className="text-grey-600 mt-2">
                        Even sales and customer support rely on release notes to
                        understand what is available to customers and which bugs
                        have been fixed.
                    </p>
                </div>
                <div className="sm:w-1/2 md:w-3/12 flex flex-col px-4 items-start sm:mt-8">
                    <img src={social} alt="Your Customers" />
                    <h4 className="font-bold mt-4 text-2xl">Your Customers</h4>
                    <p className="text-grey-600 mt-2">
                        Release notes are your means to notify and showcase your
                        latest updates to your customers. Allowing them to
                        understand what bugs have been fixed and which new
                        features are ready for them to utilize.
                    </p>
                </div>
            </Row>
            <Row classNames="bg-purple-800 text-white">
                <div className="md:w-3/4 sm:w-10/12 mx-auto flex justify-between">
                    <div className="w-3/4 sm:p-2 md:px-8">
                        <h2 className="font-bold text-3xl">
                            Communicate Changes to Everyone
                        </h2>
                        <p className="text-grey-400 mt-4">
                            Managing multiple systems can be a nightmare.
                            Keeping release notes sheds light on which systems
                            and services are compatible with others, which
                            updates create breaking changes that others must
                            react to, and enables teams to identify which
                            releases should be in what environments. Release
                            notes reduce the chance of integration issues that
                            plague even simple applications and help teams to
                            quickly identify holes and issues that otherwise
                            wouldn’t have been caught until validation tests
                            started, saving valuable time and resources.
                        </p>
                    </div>
                    <div className="w-1/4 sm:p-2 md:px-8">
                        <img
                            src={releases}
                            alt="Communicate Changes to Everyone"
                        />
                    </div>
                </div>
            </Row>
            <Row classNames="bg-grey-100">
                <div className="md:w-10/12 sm:w-10/12 mx-auto flex justify-between">
                    <div className="w-1/4 sm:p-2 md:px-8">
                        <img src={calendar} alt="Track Your Releases" />
                    </div>
                    <div className="w-3/4 sm:p-2 md:px-8">
                        <h2 className="font-bold text-3xl">
                            Track your Releases
                        </h2>
                        <p className="text-grey-700 mt-4">
                            Managing multiple systems can be a nightmare.
                            Keeping release notes sheds light on which systems
                            and services are compatible with others, which
                            updates create breaking changes that others must
                            react to, and enables teams to identify which
                            releases should be in what environments. Release
                            notes reduce the chance of integration issues that
                            plague even simple applications and help teams to
                            quickly identify holes and issues that otherwise
                            wouldn’t have been caught until validation tests
                            started, saving valuable time and resources.
                        </p>
                    </div>
                </div>
            </Row>
            <Row classNames="bg-purple-800 text-white">
                <div className="md:w-3/4 sm:w-10/12 mx-auto flex justify-between">
                    <div className="w-3/4 sm:p-2 md:px-8">
                        <h2 className="font-bold text-3xl">
                            Your Release Note Partner
                        </h2>
                        <p className="text-grey-400 mt-4">
                            We’re here to help you make every release a success
                            and we know that starts with managing your release
                            notes. Whether you already have a strategy for
                            managing your release notes or are just getting
                            started, Next Release makes it simple to automate
                            your release note pipeline. From creation to
                            distribution we’ll keep every one of your
                            stakeholders informed of what they need to know,
                            when they need to know it.
                        </p>
                    </div>
                    <div className="w-1/4 sm:p-2 md:px-8">
                        <img src={handshake} alt="Your Release Note Partner" />
                    </div>
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};
