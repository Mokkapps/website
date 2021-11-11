import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

import './styles.scss';

const TipCard = ({ children, language, highlight }) => {
  const codeElement = useRef(null);

  useEffect(() => {
    if (codeElement && codeElement.current) {
      Prism.highlightElement(codeElement.current)
    }
  }, []);

  const languageClassName = `language-${language}`;

  const isGood = highlight === 'good';

  return (
    <div className={`p-4 rounded-md border-t-4 tip-highlight-${highlight}`}>
      {isGood ? (
        <strong className="flex items-center tip-highlight-good-text">
          <FaRegCheckCircle className="mr-2" />
          Good
        </strong>
      ) : (
        <strong className="flex items-center tip-highlight-bad-text">
          <FaRegTimesCircle className="mr-2" />
          Bad
        </strong>
      )}
      <div className="gatsby-highlight mt-2" data-language={languageClassName}>
        <pre className={languageClassName}>
          <code ref={codeElement} className={languageClassName}>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default TipCard;
