import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './sass/about.scss';
function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Tailwind CSS',
    'PHP',
    'Laravel',
    'MySQL',
    'SQL Server',
    'C#',
  ];

  const { darkMode } = React.useContext(ThemeContext);

  return (
    <section id="about" className="about">
      <h2 className={darkMode ? 'numbered-heading' : 'numbered-heading-light'}>
        About Me
      </h2>
      <div className="about-inner">
        <div className="about-info">
          <p className={!darkMode ? 'light' : ''}>
            Hello! My name is Christian. I'm passionate about web design and
            development. Building things is what I love the most, I like to code
            things and enjoy bringing ideas to life in the browser.I love
            learning new and better ways to create seamless user experiences
            with clean, efficient, and scalable code.
          </p>
          <p className={!darkMode ? 'light' : ''}>
            I am looking for new opportunities as React/Laravel Developer.
            Currently i'm learning Microsoft technologies.
          </p>

          <p className={!darkMode ? ' fw-bold light' : 'fw-bold'}>I love</p>
          <ul className={darkMode ? 'skills-list' : 'skills-list-light'}>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            <img src="mypic.jpg" width="500" height="500" alt="ugliest" />
            <div className="box"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
