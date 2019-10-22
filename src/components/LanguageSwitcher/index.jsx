import React from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { MokkappsRed } from '../../styles/variables';

const CustomButton = styled.button`
  background-color: ${MokkappsRed};
  border: 0.16em solid rgba(255, 255, 255, 0);
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  padding: 0.2rem 0.5rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
    border-color: rgba(255, 255, 255, 1);
  }
`;

const LanguageText = styled.span`
  color: white;
  font-size: 0.8rem;
`;

const LanguageSwitcher = () => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <CustomButton
        type="button"
        title="Switch language"
        onClick={toggleLanguage}
      >
        {lang === 'de' ? (
          <LanguageText>Deutsch</LanguageText>
        ) : (
          <LanguageText>English</LanguageText>
        )}
      </CustomButton>
    )}
  </Context.Consumer>
);

export default LanguageSwitcher;
