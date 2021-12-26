import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import TestimonialSlider from 'components/TestimonialSlider';

const itFreelancer2021Url =
  'https://www.it-freelancer-magazin.de/index.php/2021/11/01/it-freelancer-des-jahres-2021-steht-fest/';

const References = ({ dataCy, className }) => (
  <section className={`flex flex-col ${className}`} data-cy={dataCy}>
    <TestimonialSlider className="mx-auto mb-10" />
    <details>
      <summary className="text-center font-bold text-xl">
        <FormattedMessage id="aboutPage.freelancerContest.title" />
      </summary>
      <div className="flex flex-col items-center p-4">
        <p className="mb-5">
          <FormattedMessage id="aboutPage.freelancerContest.description" />
        </p>
        <StaticImage
          width={300}
          src="../../images/3-platz-it-freelancer-des-jahres-2021.jpg"
          alt="3. Platz IT Freelancer des Jahres 2021"
        />
        <a
          className="mt-5"
          href={itFreelancer2021Url}
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="aboutPage.freelancerContest.linkText" />
        </a>
      </div>
    </details>
  </section>
);

References.propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default References;
