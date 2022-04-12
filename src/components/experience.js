import React from 'react';

import './sass/experience.scss';
import './sass/about.scss';

import { ThemeContext } from '../context/ThemeContext';

import { useState } from 'react';
function Experience() {
  const worked = [
    {
      title: 'Implementation Web Developer',
      company: 'Datafast S.A',
      location: 'Guayaquil, Ecuador',
      range: 'April 2021 - July 2021',
      url: 'https://www.datafast.com.ec/',
      content: [
        'Implementation of Datafast Payment Gateway environments',
        'Support to developers for the respective implementation of payment buttons in languages such as PHP, C# and CMS (Wordpress, Prestashop).',
        'Inbound and Outbound Process Management in Microsoft Dynamics CRM',
      ],
    },
    {
      title: 'System support and DB manager',
      company: 'Drocaras Industries',
      location: 'Guayaquil, Ecuador',
      range: 'March 2020 - November 2020',
      url: 'https://www.drocaras.com/',
      content: [
        'Ensure high availability of the database and administer the billing server deployed on Linux.',
        'Develop database tuning tasks, both in SQL queries and server configuration.',
        'Maintenance of source code of the business system in VisualBasic, corrected system errors and implemented improvements in reporting.',
      ],
    },
    {
      title: 'Web Developer JR',
      company: 'Manasystems',
      location: 'Guayaquil, Ecuador',
      range: 'March 2020 - November 2020',

      content: [
        'Support to employees and customers of the systems developed by the company.',
        'Development and maintenance of projects focused on clinics and hospitals with technologies such as Laravel, PHP, RestfullAPI development, JavaScript, React and frameworks such as Bootstrap and Tailwind.',
      ],
    },
  ];
  const [selected, setSelected] = useState(worked[0]);
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <section id="experience" className="experience">
      <h2 className={darkMode ? 'numbered-heading' : 'numbered-heading-light'}>
        Experiences
      </h2>
      <div className="inner">
        <div className="tabList">
          {worked.map((item, index) => (
            <button
              className={
                'tabButtons ' + (selected.company === item.company && 'active')
              }
              onClick={() => setSelected(item)}
              role="tab"
              key={index}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className="tabPanels">
          <div className="tabPanels-inner">
            <h3 className={!darkMode ? 'light' : ''}>
              <span>{selected.title}</span>
              <span className="company">
                <a href={selected.url} className="link">
                  {selected.company}
                </a>
              </span>
            </h3>
            <p className={darkMode ? 'range' : 'range__light'}>
              {selected.range}
            </p>
            <div>
              <ul>
                {selected.content.map((item, i) => (
                  <li className={!darkMode ? 'light__li' : ''} key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
