import React from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

import deFlag from '../../images/de.svg';
import usFlag from '../../images/us.svg';

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 0;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 0.3rem 1rem;
  cursor: pointer;
  outline: none;
  border: 0;
  margin: 0;
`;

const LanguageSwitcher = () => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <Button type="button" title="Switch language" onClick={toggleLanguage}>
        {lang === 'de' ? (
          <Image src={deFlag} alt="Deutsch" />
        ) : (
          <Image src={usFlag} alt="English" />
        )}
      </Button>
    )}
  </Context.Consumer>
);

export default LanguageSwitcher;
