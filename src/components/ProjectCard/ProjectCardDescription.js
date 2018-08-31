import React from 'react';

import './styles.css';

export default ({ productName, description, rating, url }) => (
  <div className="product-card-description-box">
    <div className="product-card-name">{productName}</div>
    <p className="product-card-description">{description}</p>
    <div className="row">
      <a className="buy-button" href={url}>
        Buy now
      </a>
    </div>
  </div>
);
