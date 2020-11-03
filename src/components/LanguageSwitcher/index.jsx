import React, { useState } from 'react';
import Switch from 'react-switch';

import { LanguageContext } from '../../context/languageContext';

const LanguageSwitcher = props => {
  const [checked, setChecked] = useState(false);
  return (
    <LanguageContext.Consumer>
      {({ toggleLanguage, lang }) => (
        <Switch
          aria-label="Language Switch"
          aria-checked={checked}
          {...props}
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
                paddingRight: 2,
              }}
            >
              <span role="img" aria-label="usa-flag">
                🇺🇸
              </span>
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
                paddingRight: 2,
              }}
            >
              <span role="img" aria-label="germany-flag">
                🇩🇪
              </span>
            </div>
          }
          onColor="var(--secondary)"
          onChange={checked => {
            toggleLanguage();
            setChecked(checked);
          }}
          checked={lang === 'de'}
        />
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSwitcher;
