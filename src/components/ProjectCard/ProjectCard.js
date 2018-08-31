import React from 'react';

import Card from '../Card/Card';
import ProjectCardDescription from './ProjectCardDescription';

import './ProjectCard.scss';

class ProjectCard extends React.Component {
  render() {
    let { photo, projectName, description, rating, url } = this.props;

    return (
      <Card className="product-card">
        <div
          className="gallery gallery-item"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        />
        <ProjectCardDescription
          projectName={projectName}
          description={description}
          rating={rating}
          url={url}
        />
      </Card>
    );
  }
}

export default ProjectCard;
