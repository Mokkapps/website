import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../context/themeContextProvider';
import { getCssVariableHexColor } from '../../utils/helper';

const ThemeSwitch = props => {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const color = getCssVariableHexColor('--switch-background');

  const handleThemeToggle = value => {
    setChecked(value);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Switch
      data-cy="theme-switch"
      aria-label="Theme Switch"
      aria-checked={checked}
      {...props}
      uncheckedIcon={
        <div className="flex justify-center items-center h-full">
          <span role="img" aria-label="sun">
            🌞
          </span>
        </div>
      }
      checkedIcon={
        <div className="flex justify-center items-center h-full">
          <span role="img" aria-label="moon">
            🌜
          </span>
        </div>
      }
      onColor={color}
      offColor={color}
      onChange={handleThemeToggle}
      checked={theme === 'dark'}
    />
  );
};

export default ThemeSwitch;
