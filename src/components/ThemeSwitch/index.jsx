import React, { useContext } from 'react';
import { MdOutlineNightlight, MdOutlineWbSunny } from 'react-icons/md';

import { ThemeContext } from 'context/themeContextProvider';

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = value => {
    if (value === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <i
      role="button"
      tabIndex={0}
      data-cy="theme-switch"
      className="w-10 h-10 rounded-full p-2 bg-secondary select-none hover:cursor-pointer border-transparent border hover:border-main-text"
      onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div className="flex justify-center items-center w-full h-full">
        {theme === 'light' ? (
          <MdOutlineNightlight size="2em" />
        ) : (
          <MdOutlineWbSunny size="2em" />
        )}
      </div>
    </i>
  );
};

export default ThemeSwitch;
