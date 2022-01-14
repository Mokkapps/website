import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from 'hooks/useFetch';
import { sendCustomAnalyticsEvent, formatNumber } from 'utils';
import Button from 'components/Button';
import { graphql, useStaticQuery } from 'gatsby';

const GithubRepo = () => {
  const data = useStaticQuery(graphql`
    query CodeLines {
      statsJson {
        SUM {
          code
        }
      }
    }
  `);

  const {
    statsJson: {
      SUM: { code: linesOfCode },
    },
  } = data;

  const repoName = 'website';
  const ownerName = 'mokkapps';
  const { data: githubRepoData } = useFetch(
    `https://api.github.com/repos/${ownerName}/${repoName}`
  );

  return (
    <>
      <span className="text-lg">
        <FormattedMessage
          id="statsPage.githubRepo.description"
          values={{
            stars: (
              <strong className="text-accent text-2xl">
                {githubRepoData ? githubRepoData.stargazers_count : '--'}
              </strong>
            ),
            forks: (
              <strong className="text-accent text-2xl">
                {githubRepoData ? githubRepoData.forks_count : '--'}
              </strong>
            ),
          }}
        />
      </span>
      <span className="text-lg">
        <FormattedMessage
          id="statsPage.githubRepo.linesOfCode"
          values={{
            linesOfCode: (
              <strong className="text-accent text-2xl">
                {formatNumber(linesOfCode)}
              </strong>
            ),
          }}
        />
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <Button
          className="mr-2"
          onClick={() => {
            sendCustomAnalyticsEvent('Clicked GitHub follow button');
            window.open('https://github.com/mokkapps', '_blank');
          }}
        >
          <FormattedMessage id="statsPage.githubRepo.buttons.follow" />
        </Button>
        <Button
          className="mr-2"
          onClick={() => {
            sendCustomAnalyticsEvent('Clicked GitHub fork button');
            window.open('https://github.com/mokkapps/website/fork', '_blank');
          }}
        >
          <FormattedMessage id="statsPage.githubRepo.buttons.fork" />
        </Button>
        <Button
          onClick={() => {
            sendCustomAnalyticsEvent('Clicked GitHub star button');
            window.open('https://github.com/mokkapps/website', '_blank');
          }}
        >
          <FormattedMessage id="statsPage.githubRepo.buttons.star" />
        </Button>
      </div>
    </>
  );
};

GithubRepo.propTypes = {};

export default GithubRepo;
