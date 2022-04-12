import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GitHub } from '@material-ui/icons';

import './sass/projects.scss';
import { useFetchRepository } from '../hooks/useFetchRepository';

const Projects = () => {
  const { data: repository } = useFetchRepository();

  const { darkMode } = React.useContext(ThemeContext);

  return (
    <section id="projects" className="projects">
      <h2 className={darkMode ? 'numbered-heading' : 'numbered-heading-light'}>
        My Recent Works
      </h2>

      <div className="container__proyects">
        <div
          className={darkMode ? 'cards__proyects' : 'cards__proyects__light'}
        >
          {repository.map((proyect, i) => (
            <div key={proyect.id} className="cards-inner">
              <a
                href={proyect.html_url}
                target="_blank"
                rel="noreferrer"
                style={{
                  margin: '5px',
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <GitHub />
              </a>

              <div>
                <h4>{proyect.name}</h4>

                <p>{proyect.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
