import React from 'react';
import './sass/footer.scss';
import { email } from '../config';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import { ThemeContext } from '../context/ThemeContext';
function Social() {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <>
      <div className="fbl">
        <a
          className={!darkMode ? 'light' : ''}
          href="https://github.com/DevLop-EC"
        >
          <GitHub />
        </a>
        <a
          className={!darkMode ? 'light' : ''}
          href="https://www.linkedin.com/in/christdevlop/"
        >
          <LinkedIn />
        </a>

        <a
          className={!darkMode ? 'light' : ''}
          href="https://twitter.com/codeandoandoec"
        >
          <Twitter />
        </a>
        <div className="vl"></div>
      </div>
      <div className="fbr">
        <a className={!darkMode ? 'light' : ''} href={'mailto:' + email}>
          {email}
        </a>
        <div className="vl"></div>
      </div>
    </>
  );
}
export default Social;
