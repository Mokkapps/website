import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import WorkIcon from 'react-feather/dist/icons/briefcase';
import SchoolIcon from 'react-feather/dist/icons/book-open';

import { MokkappsBlack, MokkappsRed } from '../../styles/variables';

export default () => (
  <Timeline>
    <TimelineEvent
      title="ZEISS Microscopy GmbH, Munich/Germany"
      createdAt="October 2018"
      icon={<WorkIcon width="20px" />}
      iconColor={MokkappsBlack}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsBlack, color: 'white' }}
    >
      <strong>Software Engineer</strong>
    </TimelineEvent>
    <TimelineEvent
      title="jambit GmbH, Munich/Germany"
      createdAt="2015-2018"
      icon={<WorkIcon width="20px" />}
      iconColor={MokkappsBlack}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsBlack, color: 'white' }}
    >
      <strong>Software Architect</strong>
      <ul>
        <li>Development of an operation dashboard based on Angular 4+</li>
        <li>
          Development of A4A (Apps for Automotive) based on Vanilla JavaScript
          for a leading German car manufacturer
        </li>
        <li>
          iOS development using Swift for a leading German car manufacturer
        </li>
        <li>
          Project lead and Scrum Master for up to 4 team members and key contact
          for client
        </li>
      </ul>
    </TimelineEvent>
    <TimelineEvent
      title="BMW Forschung und Technik GmbH, Munich/Germany"
      createdAt="2015"
      icon={<WorkIcon width="20px" />}
      iconColor={MokkappsBlack}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsBlack, color: 'white' }}
    >
      <strong>Master Thesis</strong>
      <br />
      <p>
        "Concept and Prototype Development of an Event-Driven Architecture for
        an Intermodal Route Guide"
      </p>
    </TimelineEvent>
    <TimelineEvent
      title="Technical University of Munich, Munich/Germany"
      createdAt="2013-2015"
      icon={<SchoolIcon width="20px" />}
      iconColor={MokkappsRed}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsRed, color: 'white' }}
    >
      Master of Science in Electrical Engineering
    </TimelineEvent>
    <TimelineEvent
      title="Bertrandt AG, Munich/Germany"
      createdAt="2012-2013"
      icon={<WorkIcon width="20px" />}
      iconColor={MokkappsBlack}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsBlack, color: 'white' }}
    >
      <strong>Bachelor Thesis</strong>
      <br />
      <p>
        "Development of an Android smartphone application to control and
        visualize sensors and actors which meet the KNX standard"
      </p>
    </TimelineEvent>
    <TimelineEvent
      title="University of Applied Science, Deggendorf/Germany"
      createdAt="2009-2013"
      icon={<SchoolIcon width="20px" />}
      iconColor={MokkappsRed}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsRed, color: 'white' }}
    >
      Bachelor of Science in Electrical Engineering
    </TimelineEvent>
    <TimelineEvent
      title="Gaming blog www.rebelgamer.de"
      createdAt="2010-2016"
      icon={<WorkIcon width="20px" />}
      iconColor={MokkappsBlack}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsBlack, color: 'white' }}
    >
      <ul>
        <li>Head for up to six content journalists</li>
        <li>Responsible for the CMS (WordPress)</li>
        <li>
          Relationship management with game publishers and game developers
        </li>
      </ul>
    </TimelineEvent>
    <TimelineEvent
      title="Zollner AG, Zandt/Germany"
      createdAt="2006-2009"
      icon={<WorkIcon width="20px" />}
      iconColor={MokkappsBlack}
      container="card"
      cardHeaderStyle={{ backgroundColor: MokkappsBlack, color: 'white' }}
    >
      Apprenticeship as electronics technician for devices and systems
    </TimelineEvent>
  </Timeline>
);
