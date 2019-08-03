import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';

import { MokkappsLightGray } from '../../styles/variables';

const Container = styled.div`
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  background-color: ${MokkappsLightGray};
`;

const Title = styled.h4`
  text-align: center;
  word-wrap: normal;
`;

const Description = styled.p`
  text-align: center;
`;

const HeroCharacteristics = ({ text, icon, description }) => {
  const Icon = icon;

  const StyledIcon = styled(Icon)`
    width: 30px;
    height: 30px;
    margin: 0 auto;
  `;

  return (
    <Container>
      {Icon && <StyledIcon />}
      <Margin top={2}>
        <Title>
          <FormattedMessage id={text} />
        </Title>
      </Margin>
      <Description>
        <FormattedMessage id={description} />
      </Description>
    </Container>
  );
};

HeroCharacteristics.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroCharacteristics;
