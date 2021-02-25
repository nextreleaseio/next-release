import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Row from '../../components/row';
import background from '../../images/NR_Help_Mast.png';

export default ({ pageContext: { releases } }) => {
    if (typeof releases !== 'undefined' && releases.length === 0) {
        releases = [
            {
                url:
                    'https://www.reddit.com/r/MarvelStrikeForce/comments/lb3l1n/510_release_notes/'
            },
            {
                url:
                    'https://www.reddit.com/r/cosmosnetwork/comments/lmmdq7/cosmos_stargate_is_live/'
            },
            {
                url:
                    'https://www.reddit.com/r/Amd/comments/lhudbk/radeon_software_adrenalin_2020_edition_2122/'
            },
            {
                url:
                    'https://www.reddit.com/r/StarWarsSquadrons/comments/l0nf8j/update_42_release_notes/'
            },
            {
                url:
                    'https://www.reddit.com/r/xboxinsiders/comments/lcmdzr/xbox_insider_release_notes_alpha_skipahead/'
            },
            {
                url:
                    'https://www.reddit.com/r/salesforce/comments/lawou4/spring_21_release_notes_abridged_edition/'
            },
            {
                url:
                    'https://www.reddit.com/r/rust/comments/lkd50a/rustanalyzer_changelog_64/'
            }
        ];
    }
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
                    Showcasing the Top Release Conversations of the Day
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
                <ul className="divide-y divide-gray-200">
                    {releases.map(post => {
                        return (
                            <li className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                <div className="mt-1">
                                    <blockquote className="reddit-card">
                                        <a href={post.url}> </a>
                                    </blockquote>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Row>
        </Layout>
    );
};
