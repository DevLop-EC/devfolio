import React from 'react';
import './sass/footer.scss';
import { email } from '../config';
import { GitHub, Instagram, LinkedIn, Telegram } from '@material-ui/icons';
import { ThemeContext } from '../context/ThemeContext';
function Social() {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <>
      <div className="fbl">
        <a
          className={!darkMode && 'light'}
          href="https://github.com/nirajsharma99"
        >
          <GitHub />
        </a>
        <a
          className={!darkMode && 'light'}
          href="https://www.linkedin.com/in/niraj-sharma-40132b165"
        >
          <LinkedIn />
        </a>
        <a className={!darkMode && 'light'} href="https://t.me/bazoooka99">
          <Telegram />
        </a>
        <a
          className={!darkMode && 'light'}
          href="https://www.instagram.com/niraj.sharma__"
        >
          <Instagram />
        </a>
        <div className="vl"></div>
      </div>
      <div className="fbr">
        <a className={!darkMode && 'light'} href={'mailto:' + email}>
          {email}
        </a>
        <div className="vl"></div>
      </div>
    </>
  );
}
export default Social;
