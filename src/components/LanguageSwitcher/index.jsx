import React, { useState } from 'react';
import Switch from 'react-switch';

import { LanguageContext } from '../../context/languageContext';
import { getCssVariableHexColor } from '../../utils';

const LanguageSwitcher = props => {
  const [checked, setChecked] = useState(false);
  const color = getCssVariableHexColor('--switch-background');

  return (
    <LanguageContext.Consumer>
      {({ toggleLanguage, lang }) => (
        <Switch
          data-cy="language-switch"
          aria-label="Language Switch"
          aria-checked={checked}
          {...props}
          uncheckedIcon={
            <div className="flex justify-center items-center h-full">
              <span role="img" aria-label="usa-flag">
                🇺🇸
              </span>
            </div>
          }
          checkedIcon={
            <div className="flex justify-center items-center h-full">
              <span role="img" aria-label="germany-flag">
                🇩🇪
              </span>
            </div>
          }
          onColor={color}
          offColor={color}
          onChange={value => {
            toggleLanguage();
            setChecked(value);
          }}
          checked={lang === 'de'}
        />
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSwitcher;
