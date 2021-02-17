import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Row from '../../components/row';
import background from '../../images/NR_Help_Mast.png';

export default ({ pageContext: { releases } }) => {
    const latestRelease = releases || [
        {
            url:
                'https://www.reddit.com/r/AZURE/comments/lb6t4w/devops_pipelines_ui_vs_release_ui_question/'
        },
        {
            url:
                'https://www.reddit.com/r/AZURE/comments/lb6t4w/devops_pipelines_ui_vs_release_ui_question/'
        },
        {
            url:
                'https://www.reddit.com/r/AZURE/comments/lb6t4w/devops_pipelines_ui_vs_release_ui_question/'
        },
        {
            url:
                'https://www.reddit.com/r/AZURE/comments/lb6t4w/devops_pipelines_ui_vs_release_ui_question/'
        }
    ];
    return (
        <Layout headerClass="bg-white relative">
            <SEO title="Recent Release Notes Posted to Reddit" />

            <Row
                classNames="bg-purple-800 text-center bg-no-repeat bg-center bg-cover md:py-12 sm:py-8"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p className="text-small text-teal-400 uppercase">
                    Release Notes Posted to Reddit
                </p>
                <h1 className="text-4xl font-bold text-white">
                    Showcasing the Top Release Notes of the Day
                </h1>
                <p className="text-small text-grey-500 sm:w-full md:w-1/2 mx-auto">
                    Join the changelog community by sharing your thoughts and
                    ideas for how to make Release Notes the best for your
                    community on&nbsp;
                    <a href="https://www.reddit.com/r/releasenote/">
                        /r/releasenote
                    </a>
                    .
                </p>
            </Row>
            <Row>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {latestRelease.map(post => {
                        return (
                            <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                <div className="w-full flex items-center justify-between p-6 space-x-6">
                                    <div className="flex-1 truncate">
                                        <div className="flex items-center space-x-3">
                                            <blockquote className="reddit-card">
                                                <a href={post.url}> </a>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Row>
        </Layout>
    );
};
