import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Toggle.scss';

function Toggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };
  return (
    <input
      onClick={handleTheme}
      onKeyDown={handleTheme}
      id="toggle"
      className="toggle"
      type="checkbox"
    />
  );
}

export default Toggle;
