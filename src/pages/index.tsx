import Link from 'next/link';

import classNames from 'classnames';

import { worked } from '../../data/experience/worked';
import { BsFillCloudDownloadFill } from 'react-icons/bs';

import ConsoleSocialMedia from 'src/components/ConsoleSocialMedia';

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="md:grid-cols-0 grid px-8 lg:grid-cols-5">
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold tracking-wide md:text-4xl text-text sm:leading-10 md:leading-14 ">
            Christian Lopez{' '}
            <Link href="/about" passHref>
              <div className="hover-underline-animation text-gold cursor-pointer">
                Software developer
              </div>
            </Link>
          </h1>
          <h2 className="mt-2 text-justify  font-mono text-slate-600 dark:text-subtle  md:w-3/4 md:text-left">
            I am a full-stack developer based in Ecuador. I have a passion for
            building web applications and solving problem
          </h2>
          <div className="mt-4 flex justify-center md:block">
            <a
              href="https://drive.google.com/file/d/1yHsK83u6pAjODBnb_hgj7Zqiv_ecwY6Z/view?usp=sharing"
              className="inline-flex rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-400 motion-reduce:hover:brightness-90 transition duration-100 animate-shadow bg-white text-gray-800 disabled:bg-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:disabled:bg-gray-700 mr-4 glow"
            >
              Download Resume
              <BsFillCloudDownloadFill className="flex justify-center items-center translate-x-[5px] translate-y-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" />
            </a>
          </div>
        </div>

        <ConsoleSocialMedia />
      </div>

      <NewestPost />
    </div>
  );
}

function NewestPost() {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Experience</h3>
      <div className="flex flex-col gap-5 md:flex-row">
        {worked.map((work, i) => (
          <div
            key={i}
            className={classNames(
              'transform hover:scale-105 duration-300 transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 ',
              {
                'from-[#D8B4FE] to-[#818CF8]': i == 0,
                'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]': i == 1,
                'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]': i == 2,
              },
            )}
          >
            <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-surface ">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="w-full mb-6 text-lg font-medium text-text md:text-lg sm:mb-10 ">
                  {work.title}
                </h4>
              </div>
              <div>
                <Link
                  href={work.url ? work.url : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <a className="text-subtle font-medium hover:underline">
                    {work.company}
                  </a>
                </Link>
                <p className="text-subtle">{work.range}</p>
                <div>{work.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/about">
        <a className="flex items-center mt-5 transition-all hover:text-text text-subtle">
          About me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}
