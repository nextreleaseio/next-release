import React from 'react';
import background from '../images/NR_Help_Mast.png';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Row from '../components/row';
import box from '../images/nr_icon_ideation-05-05.svg';
import installation from '../images/screenshots/Screenshot-2019-12-12-01.13.02-300x244.png';
import backlog from '../images/nr_icon_backlog-06.svg';
import feedback from '../images/NRicons-07-1.svg';
import releaseNotes from '../images/nr_icon_releasenotes-08.svg';
import notePreview from '../images/screenshots/note-preview-300x178.png';
import Bottom from '../components/bottom';

const categorizeVideo =
    '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/81a2fb7e6ad94fe79bf78e759b9500a9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

export default () => {
    return (
        <Layout>
            <SEO title="Automatic Release Notes" />
            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Automatic Release Notes
                </p>
                <h1 className="text-4xl font-bold text-white">
                    How Next Release Works
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    A great set of release notes in the hands of both your team
                    and customers will help your release cycles run more
                    smoothly and efficiently.
                </p>
            </Row>
            <Row>
                <div className="flex flex-wrap md:w-3/4 sm:w-full mx-auto">
                    <div className="md:w-1/4 sm:w-full mr-8">
                        <img
                            src={box}
                            className="w-100"
                            alt="Install Next Release"
                        />
                    </div>
                    <div className="md:w-1/2 sm:w-full">
                        <h3 className="font-bold text-3xl">
                            Install Next Release
                        </h3>
                        <p className="text-grey-700 text-lg">
                            Install the Next Release App in your Github personal
                            or team account. It takes three clicks to setup your
                            first project, then you’re off to create your first
                            Release.
                        </p>
                        <div className="flex flex-wrap">
                            <div className="w-1/2">
                                <img
                                    src={installation}
                                    className="w-full"
                                    alt="View on Github"
                                />
                            </div>
                            <div className="w-1/2">
                                <a
                                    href="https://github.com/marketplace/nextrelease-io"
                                    className="bg-purple-800 transition rounded-full mt-8 py-4 text-white hover:bg-purple-500 font-bold block text-center"
                                >
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row classNames="bg-purple-800 text-white">
                <div className="flex flex-row-reverse flex-wrap md:w-3/4 sm:w-full">
                    <div className="md:w-1/4 sm:w-full ml-8">
                        <img
                            src={backlog}
                            className="w-100"
                            alt="Make Pull Requests"
                        />
                    </div>
                    <div className="md:w-1/2 sm:w-full">
                        <h3 className="font-bold text-3xl">
                            Make Pull Requests
                        </h3>
                        <p className="text-grey-400 text-lg">
                            Make a pull request to change code in your
                            repository and Next Release will automatically add
                            the details in your Release Notes.
                        </p>
                        <div
                            className="mt-8 w-full"
                            dangerouslySetInnerHTML={{
                                __html: categorizeVideo
                            }}
                        ></div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="flex flex-wrap md:w-3/4 sm:w-full mx-auto">
                    <div className="md:w-1/4 sm:w-full mr-8">
                        <img
                            src={feedback}
                            className="w-100"
                            alt="Make Pull Requests, Get Automatic Updates"
                        />
                    </div>
                    <div className="md:w-1/2 sm:w-full">
                        <h3 className="font-bold text-3xl">
                            Make Pull Requests, Get Automatic Updates
                        </h3>
                        <p className="text-grey-700 text-lg">
                            As your team makes additional pull requests, Next
                            Release automatically categorizes and adds them to
                            the release notes. These are available to edit,
                            remove, and add additional entries, and provide a
                            custom summary.
                        </p>
                    </div>
                </div>
            </Row>
            <Row classNames="bg-purple-800 text-white">
                <div className="flex flex-row-reverse flex-wrap md:w-3/4 sm:w-full">
                    <div className="md:w-1/4 sm:w-full ml-8">
                        <img
                            src={releaseNotes}
                            className="w-100"
                            alt="Share release notes"
                        />
                    </div>
                    <div className="md:w-1/2 sm:w-full">
                        <h3 className="font-bold text-3xl">
                            Publish Your Work
                        </h3>
                        <p className="text-grey-400 text-lg">
                            Once you’ve completed all your code changes for the
                            release and edit your notes, Next Release will
                            automatically draft a release and tag your
                            repository. (With support for changelog and version
                            publishing coming soon!)
                        </p>
                        <div className="flex flex-wrap mt-8">
                            <div className="w-1/2 pr-4">
                                <img
                                    src={notePreview}
                                    className="w-full"
                                    alt="View on Github"
                                />
                            </div>
                            <div className="w-1/2">
                                <a
                                    href="https://github.com/nextreleaseio/example-branch-per-environment/releases"
                                    className="bg-white transition rounded-full mt-8 py-4 text-orange-600 hover:text-orange-700 hover:bg-orange-200 font-bold block text-center"
                                >
                                    View on Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Bottom />
        </Layout>
    );
};
