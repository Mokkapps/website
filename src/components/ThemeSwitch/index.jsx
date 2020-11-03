import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../context/themeContextProvider';

const ThemeSwitch = props => {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = checked => {
    setChecked(checked);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Switch
      aria-label="Theme Switch"
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
          <span role="img" aria-label="sun">
            🌞
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
          <span role="img" aria-label="moon">
            🌑
          </span>
        </div>
      }
      onColor="var(--secondary)"
      onChange={handleThemeToggle}
      checked={theme === 'dark'}
    />
  );
};

export default ThemeSwitch;
