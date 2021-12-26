import React from 'react';
import PropType from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import DevIcon from 'components/DevIcon';
import Divider from 'components/Divider';

export const BUSINESS_PROJECTS = [
  { name: 'vhv', contributions: 3 },
  { name: 'segmentationTool', contributions: 3 },
];

const BusinessProjectList = ({ intl, dataCy }) => {
  const businessProjects = BUSINESS_PROJECTS.map(({ name, contributions }) => {
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
    <div className="flex flex-col items-center" data-cy={dataCy}>
      {businessProjects.map(
        ({ baseId, titleId, companyId, contributionIDs }, index) => {
          const usedTechnologies = intl
            .formatMessage({ id: `${baseId}.techStack` })
            .split(',')
            .map(tech => (
              <DevIcon
                key={tech}
                size="text-2xl"
                className="mr-2 mb-2 sm:mb-0"
                technology={tech}
              />
            ));

          return (
            <details
              key={titleId}
              className="border border-text-main w-full flex flex-col bg-secondary p-4 rounded-md shadow-md mt-4"
              data-cy={`${dataCy}-${titleId}`}
              open={index === 0}
            >
              <summary>
                <span className="text-center font-bold">
                  <FormattedMessage id={titleId} />
                </span>
              </summary>
              <div>
                <Divider />
                <div className="flex">
                  <span className="font-bold">
                    <FormattedMessage id="projectsPage.businessProjects.customer" />
                  </span>
                  &nbsp;
                  <FormattedMessage id={companyId} />
                </div>
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
                <Divider />
                <div className="flex flex-wrap items-center justify-center">
                  {usedTechnologies}
                </div>
              </div>
            </details>
          );
        }
      )}
    </div>
  );
};

BusinessProjectList.propTypes = {
  intl: PropType.object,
  dataCy: PropType.string,
};

export default injectIntl(BusinessProjectList);
