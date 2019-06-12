import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';

const Container = styled.div`
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
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
      <Description><FormattedMessage id={description} /></Description>
    </Container>
  );
};

HeroCharacteristics.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroCharacteristics;
