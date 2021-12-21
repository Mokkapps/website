import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from '@hooks/useFetch';
import { sendCustomAnalyticsEvent } from '@utils';
import Button from "@components/Button";

const GithubRepo = () => {
  const { data: githubRepoData } = useFetch('/api/statistics/github-repo');

  return (
    <>
      <span className="text-lg">
        <FormattedMessage
          id="statsPage.githubRepo.description"
          values={{
            stars: (
              <strong className="text-accent text-2xl">
                {githubRepoData ? githubRepoData.stars : '--'}
              </strong>
            ),
            forks: (
              <strong className="text-accent text-2xl">
                {githubRepoData ? githubRepoData.forks : '--'}
              </strong>
            ),
          }}
        />
      </span>
      <div className="flex mt-4">
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
