import React from 'react';
import { useState } from 'react';
import { MenuItems } from './menu-items';
import '../sass/navbar.scss';
import Hamburger from './hamburger';
import { Logo } from '../Logo/Logo';
import Toggle from '../Toggle/Toggle';
import { ThemeContext } from '../../context/ThemeContext';
/*import Aos from 'aos';
import 'aos/dist/aos.css';*/

function Navbar() {
  /*useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);*/
  const [on, setOn] = useState(false);
  const closeMenu = () => {
    setOn(!on);
  };

  const { darkMode } = React.useContext(ThemeContext);

  return (
    <nav className="NavbarItems">
      <div className="menu-icon">
        <Hamburger on={on} closeMenu={closeMenu} />
      </div>
      <Logo />

      <div className={on ? 'nav-contents active' : 'nav-contents'}>
        <ol className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={darkMode ? item.cName : 'nav-links-light'}
                  href={item.url}
                  onClick={closeMenu}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ol>
        <Toggle />
        {/* <a href="resume.pdf" className="resume-button">
          Resume
        </a> */}
      </div>
    </nav>
  );
}
export default Navbar;
