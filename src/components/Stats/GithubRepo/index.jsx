import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, useStaticQuery } from 'gatsby';

import { useFetch } from 'hooks/useFetch';
import { sendCustomAnalyticsEvent, formatNumber } from 'utils';
import Button from 'components/Button';
import DevIcon from 'components/DevIcon';

const GithubRepo = () => {
  const data = useStaticQuery(graphql`
    query CodeLines {
      statsJson {
        Markdown {
          code
          nFiles
        }
        JavaScript {
          code
          nFiles
        }
        JSX {
          code
          nFiles
        }
        SCSS {
          code
          nFiles
        }
        SUM {
          code
        }
      }
    }
  `);

  const getProgrammingLanguageInfo = (technology, loC, fileCount) => (
    <div className="flex flex-col items-center">
      <DevIcon
        colored
        className="mr-2"
        size="text-2xl"
        technology={technology}
      />
      <div className="flex mt-2 mr-2">
        <span className="mr-2">
          <FormattedMessage
            id="statsPage.githubRepo.linesOfCode"
            values={{ count: loC }}
          />
        </span>
      </div>
      <div className="flex mt-2">
        <span className="mr-2">
          <FormattedMessage
            id="statsPage.githubRepo.numberFiles"
            values={{ count: fileCount }}
          />
        </span>
      </div>
    </div>
  );

  const {
    statsJson: {
      Markdown: { code: markdownLoC, nFiles: markdownFiles },
      JavaScript: { code: jsLoC, nFiles: jsFiles },
      JSX: { code: jsxLoC, nFiles: jsxFiles },
      SCSS: { code: scssLoC, nFiles: scssFiles },
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
          id="statsPage.githubRepo.totalLinesOfCode"
          values={{
            linesOfCode: (
              <strong className="text-accent text-2xl">
                {formatNumber(linesOfCode)}
              </strong>
            ),
          }}
        />
      </span>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-4">
        {getProgrammingLanguageInfo('javaScript', jsLoC, jsFiles)}
        {getProgrammingLanguageInfo('markdown', markdownLoC, markdownFiles)}
        {getProgrammingLanguageInfo('react', jsxLoC, jsxFiles)}
        {getProgrammingLanguageInfo('scss', scssLoC, scssFiles)}
      </div>
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
