import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Skills from '../Skills';
import AboutMe from './AboutMe';
import HowIWork from './HowIWork';
import FluidImage from '../FluidImage';
import Testimonials from "../Testimonials";

const Heading = styled.h2`
  text-align: center;
  word-wrap: normal;
`;

const About = ({ images }) => (
  <section>
    <AboutMe images={images} />
    <div className="my-8 md:w-4/5 mx-auto" data-cy="about-skills">
    <Testimonials className="mx-auto my-10" />
      <Heading className="mb-8">SKILLS</Heading>
      <Skills />
    </div>
    <div className="mb-8 md:w-4/5 mx-auto" data-cy="about-how-i-work">
      <Heading className="mb-8">
        <FormattedMessage id="howIWork" />
      </Heading>
      <FluidImage class="my-8" image={images.consulting} />
      <HowIWork />
    </div>
  </section>
);

About.propTypes = {
  images: PropTypes.object.isRequired,
};

export default About;
