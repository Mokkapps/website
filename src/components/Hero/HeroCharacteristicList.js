import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

import './Hero.scss';

import HeroCharacteristic from './HeroCharacteristic';
import config from '../../content/meta/config';

setConfiguration({ gutterWidth: 15 });

export default () => {
  const { characteristics } = config;
  const [first, second, third, fourth] = characteristics;
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <HeroCharacteristic
            emoji={first.emoji}
            ariaLabel={first.ariaLabel}
            text={first.text}
          />
        </Col>
        <Col sm={6}>
          <HeroCharacteristic
            emoji={second.emoji}
            ariaLabel={second.ariaLabel}
            text={second.text}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={6}>
          <HeroCharacteristic
            emoji={third.emoji}
            ariaLabel={third.ariaLabel}
            text={third.text}
          />
        </Col>
        <Col sm={6}>
          <HeroCharacteristic
            emoji={fourth.emoji}
            ariaLabel={fourth.ariaLabel}
            text={fourth.text}
          />
        </Col>
      </Row>
    </Container>
  );
};
