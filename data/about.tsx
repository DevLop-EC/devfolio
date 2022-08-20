import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { HiNewspaper } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';

export const aboutData = [
  {
    title: 'Work Developer',
    data: [
      {
        image: '/static/images/datafast.png',
        company: 'Datafast',
        position: 'Frontend Engineer',
        date: 'April 2021 - July 2021',
        description: (
          <>
            <li>
              Implementacion de ambientes de pasarela de pagos Datafast,
              siguiendo estandares y convenciones de la arquitectura REST API y
              documentacion de la empresa.
            </li>
            <li>
              Soporte a desarrolladores para la respectiva implementación de
              pasarela de pagos en lenguajes como PHP, C# y gestores CMS
              (Wordpress,Prestashop)
            </li>
          </>
        ),
        location: 'Guayaquil, Ecuador',
        url: 'https://www.linkedin.com/company/bountiegaming/',
      },
      {
        image: '/static/images/drocaras.png',
        company: 'Drocaras',
        position: 'Systems Support and DBA Junior',
        date: 'March 2020 - November 2020',
        description: (
          <>
            <li>Soporte en hardware y software de los usuarios internos</li>
            <li>
              Garantizar la disponibilidad de la base de datos y administrar el
              servidor de facturacion desplegado en Linux CentOS.
            </li>
            <li>
              Diseñar la distribucion de los datos y las soluciones de
              almacenamiento para garantizar la seguridad de las bases de datos,
              incluyendo backups
            </li>
            <li>
              Desarrollar tareas de tunning de base de datos en las consultas
              SQL y en procedimientos almacenados
            </li>
            <li>
              Mantenimiento del sistema empresarial desarrollado en Visual Basic
              6.0 corrigendo errores del e implementado mejoras en reporteria.
            </li>
          </>
        ),
        location: 'Guayaquil, Ecuador',
        url: 'https://www.linkedin.com/company/happyfresh/',
      },
      {
        image: '',
        company: 'Manasystems',
        position: 'Frontend Engineer',
        date: 'June 2019 - November 2019',
        description: (
          <>
            <li>
              Soporte a empleados y clientes de los sistemas desarrollados por
              la empresa mediante acceso remoto y prescencial
            </li>
            <li>
              Desarrollo y mantenimientos de proyectos web enfocados en clinicas
              y hospitales con tecnologías como Laravel,PHP, Arquitectura
              Restfull API’s, JavaScript, React y frameworks como Bootstrap y
              Tailwind
            </li>
          </>
        ),
        location: 'Guayaquil, Ecuador',
        url: 'https://www.linkedin.com/company/next-ins/',
      },
    ],
  },
  {
    title: 'Education',
    data: [
      {
        image: '/static/images/ecotec.png',
        company: 'Ecotec University',
        position: 'Software Engineering',
        date: 'January 2020 - Present',
        description: (
          <>
            <li>Enrolled from Sept. 2021 to present</li>
            <li>
              Take online classes or non-regular classes in the field of
              computer science
            </li>
          </>
        ),
        location: 'Guayaquil, Ecuador',
        url: 'https://binus.ac.id/',
      },
      {
        image: '/static/images/liceo.png',
        company: 'Tecnologico de Liceo Cristiano de Guayaquil',
        position: 'Technology Analysis in Computer Science',
        date: 'Sep 2019 - Des 2019',
        description: (
          <>
            <li>Attended from Sept. 2019 to Jan 2020</li>
            <li>
              Scholarship awardee for Full Stack Web Development Program from
              KEB Hana Bank
            </li>
          </>
        ),
        location: 'Guayaquil, Ecuador',
        url: 'https://impactbyte.com/id/home',
      },
    ],
  },
];

export const AboutBio = `Hello! My name is Christian. I'm passionate about web development. Building things is what I love the most, I like to code things and enjoy bringing ideas to life in the browser.I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code`;

export const AboutSocial = [
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1yHsK83u6pAjODBnb_hgj7Zqiv_ecwY6Z/view?usp=sharing',
    icon: (
      <HiNewspaper className="inline mb-1 text-subtle group-hover:text-black dark:group-hover:text-white w-5 h-5" />
    ),
  },
  {
    name: 'Email',
    url: 'mailto:chrisdev.jobs@gmail.com',
    icon: (
      <MdOutlineEmail className="inline mb-1 text-subtle group-hover:text-black dark:group-hover:text-white w-5 h-5" />
    ),
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/christdevlop/',
    icon: (
      <BsLinkedin className="inline mb-1 text-subtle group-hover:text-blue-400 dark:group-hover:text-blue-400 w-5 h-5" />
    ),
  },
  {
    name: 'Github',
    url: 'https://github.com/DevLop-EC',
    icon: (
      <BsGithub className="inline mb-1 text-subtle group-hover:text-black dark:group-hover:text-white w-5 h-5" />
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codeandoandoec',
    icon: (
      <BsTwitter className="inline mb-1 text-subtle group-hover:text-blue-400 dark:group-hover:text-blue-400 w-5 h-5" />
    ),
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/+593959404624',
    icon: (
      <BsWhatsapp className="inline mb-1 text-subtle group-hover:text-black dark:group-hover:text-white w-5 h-5" />
    ),
  },
];
