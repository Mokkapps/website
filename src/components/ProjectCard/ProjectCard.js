import React from 'react';

import Card from './Card';
import ProjectCardDescription from './ProjectCardDescription';

import './styles.css';

class ProjectCard extends React.Component {
  render() {
    let { photo, productName, description, rating, url } = this.props;

    return (
      <Card className="product-card">
        <div
          className="gallery gallery-item"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        />
        <ProjectCardDescription
          productName={productName}
          description={description}
          rating={rating}
          url={url}
        />
      </Card>
    );
  }
}

export default ProjectCard;
