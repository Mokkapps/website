import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext({
  theme: '',
  setTheme: () => {},
});

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    function loadTheme() {
      const isDarkModePreferred = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const theme = localStorage.getItem('theme');
      return theme || isDarkModePreferred ? 'dark' : 'light';
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
