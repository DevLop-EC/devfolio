import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './Logo.scss';

export const Logo = () => {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <h1 className={darkMode ? 'reveal-text' : 'reveal-text-light'}>DevLop</h1>
  );
};
