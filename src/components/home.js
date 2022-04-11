import React from 'react';
import './sass/home.scss';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <section className="home">
      <div className="hs1 mt-5">
        <h1>Hi, my name is</h1>
      </div>
      <div className="hs2">
        <h2 className={darkMode ? 'big-heading' : 'big-heading-light'}>
          Christian Lopez.
        </h2>
      </div>
      <div className="hs3">
        <h3 className={!darkMode ? 'big-heading-light' : 'big-heading'}>
          Web Developer
        </h3>
      </div>
      <div className="hs4">
        <p className={!darkMode ? 'light' : ''}>
          I like building things for the web. This is the only thing that keeps
          me going. I currently studying Software Engineer.
        </p>
        <a target="_blank" href="/resume.pdf" className="more mt-5">
          Resume
        </a>
      </div>
    </section>
  );
}
export default Home;
