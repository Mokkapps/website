import React from 'react';
import styled from 'styled-components';
const Container = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const HowIWork = () => (
  <Container>
    <div>
      <h3>What I Do</h3>
      <ul>
        <li>
          I specialize in building web applications written in React and
          Angular. I always develop them with your end-user in mind as this will
          also help you to meet your business goals
        </li>
        <li>I am reliable and honest to my customers and clients</li>
        <li>
          I produce high quality, clean, well-documented and easily maintainable
          code while respecting deadlines and budgets
        </li>
        <li>I use high code quality standards and static code analyzer</li>
        <li>
          I create beautifully responsive products which work across a variety
          of devices and browsers
        </li>
        <li>I value accessible, valid and semantic HTML</li>
        <li>I use modernized CSS using Grid, Flexbox, and Animations</li>
        <li>I love to use ReactiveExtensions (RxJS)</li>
        <li>I like strict typing in JavaScript, especially using TypeScript</li>
        <li>I like to write tests (unit, integration and end-to-end)</li>
        <li>I have advanced Git knowledge</li>
      </ul>
    </div>

    <div>
      <h3>Who I Work With</h3>
      <p>
        I enjoy working in a close relationship with international teams onsite.
        It is great fun for me to learn about new industries, especially if the
        product has a positive impact.
      </p>
    </div>

    <div>
      <h3>What I Don't Do</h3>
      <p>
        Usually, I do not develop simple websites but am more interested in
        complex web applications or mobile apps.
      </p>
      <p>
        I can provide simple logos or help you pick typography or colors. In
        case you need further help with your brand, I am happy to connect you
        with a trusted graphic and brand designer.
      </p>
    </div>
  </Container>
);

HowIWork.displayName = 'How I Work';

export default HowIWork;
