import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const carbonCode = 'CEAD4K7U';
const carbonPlacement = 'mokkappsde';

const Ad = ({ className }) => {
  const reference = useRef(null);

  useEffect(() => {
    reference.current.innerHTML = '';
    const s = document.createElement('script');
    s.id = '_carbonads_js';
    s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonCode}&placement=${carbonPlacement}`;
    reference.current.appendChild(s);
  }, []);

  return (
    <div className={`${className} carbon-ads hidden ad:flex`} ref={reference} />
  );
};

Ad.propTypes = {
  className: PropTypes.string,
};

export default Ad;
