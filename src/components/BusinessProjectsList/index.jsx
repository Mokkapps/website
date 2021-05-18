import React from 'react';
import PropType from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import DevIcon from '../DevIcon';
import CardDivider from '../Card/CardDivider';

const BusinessProjectList = ({ intl }) => {
  const projects = [
    { name: 'segmentationTool', contributions: 3 },
    { name: 'apeer', contributions: 2 },
  ];

  const businessProjects = projects.map(({ name, contributions }) => {
    const baseId = `projectsPage.businessProjects.${name}`;
    return {
      baseId,
      companyId: `${baseId}.company`,
      titleId: `${baseId}.title`,
      contributionIDs: Array.from(Array(contributions).keys()).map(
        (_, i) => `${baseId}.keyContribution${i + 1}`
      ),
    };
  });

  return (
    <div className="flex flex-col items-center">
      {businessProjects.map(
        ({ baseId, titleId, companyId, contributionIDs }) => {
          const usedTechnologies = intl
            .formatMessage({ id: `${baseId}.techStack` })
            .split(',')
            .map(tech => (
              <DevIcon
                key={tech}
                size="2xl"
                className="mr-2"
                technology={tech}
              />
            ));

          return (
            <div
              key={titleId}
              className="border border-text-main w-full lex flex-col bg-secondary p-4 rounded-md shadow-md mt-4"
            >
              <h5 className="text-center mb-0">
                <FormattedMessage id={titleId} />
              </h5>
              <p className="italic text-center my-2">
                <FormattedMessage id={companyId} />
              </p>
              <CardDivider />
              <h6 className="my-4">
                <FormattedMessage id="projectsPage.keyContributions" />
              </h6>
              <ul>
                {contributionIDs.map(id => (
                  <li key={id}>
                    <FormattedMessage id={id} />
                  </li>
                ))}
              </ul>
              <CardDivider />
              <div className="flex items-center justify-center">
                {usedTechnologies}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

BusinessProjectList.propTypes = {
  intl: PropType.object,
};

export default injectIntl(BusinessProjectList);
