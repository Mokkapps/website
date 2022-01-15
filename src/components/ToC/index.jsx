import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ToC = ({ headings, className }) => (
  <ul className={`${className} border-2 border-secondary ml-0 p-3 flex flex-col rounded`}>
    <h3>
      <FormattedMessage id="blogPage.tableOfContents" />
    </h3>
    <div className="max-h-72 pl-2 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-accent scrollbar-track-accent-darken">
      {headings.map(heading => {
        if (heading.depth > 4) {
          return <div />;
        }

        return (
          <li
            key={heading.value}
            className="p-1 leading-5 mb-4 last:mb-0"
          >
            <a
              className="text-main-text no-underline"
              href={`#${heading.value
                .replace(/\s+/g, '-')
                .replace('.', '')
                .toLowerCase()}`}
            >
              {heading.value}
            </a>
          </li>
        );
      })}
    </div>
  </ul>
);

ToC.propTypes = {
  headings: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ToC;
