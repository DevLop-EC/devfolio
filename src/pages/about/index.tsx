import clsx from 'clsx';
import type { NextPage } from 'next';
import Image, { default as NextImage } from 'next/image';
import { Suspense } from 'react';

import useLoaded from '../../hooks/useLoaded';

import UnstyledLink from 'src/components/UnstyledLink';
import StyledLink from 'src/components/StyledLink';

import { AboutBio, aboutData, AboutSocial } from '../../../data/about';

const About: NextPage = () => {
  const isLoaded = useLoaded();
  return (
    <Suspense fallback={null}>
      <div
        className={clsx(
          'flex flex-col justify-center items-start max-w-2xl border-text-subtle dark:border-gray-700 mx-auto pb-16 gap-6',
          isLoaded && 'fade-in-start',
        )}
      >
        <div className="flex flex-col w-full text-center">
          <div className="w-[100px] sm:w-[150px] mb-6 mx-auto" data-fade="2">
            <NextImage
              alt="Christian Lopez"
              height={227}
              width={210}
              src="/static/images/avatar.jpg"
              sizes="30vw"
              priority
              className="rounded-full object-cover"
            />
          </div>
          <h1
            className="mb-1 text-3xl font-bold tracking-tight text-center text-text md:text-4xl"
            data-fade="2"
          >
            Christian López
          </h1>
          <h2 className="text-subtle select-none" data-fade="3">
            Full Stack Web Developer{' '}
            {/* <span className='font-semibold'>HappyFresh</span> */}
          </h2>
          <h2 className="text-subtle mb-4 select-none" data-fade="3">
            Studying software engineering at{' '}
            <span className="font-semibold">Ecotec University</span>
            {/* <span className='font-semibold'>Bountie</span> */}
          </h2>
          <div
            className="flex flex-wrap items-start justify-center"
            data-fade="5"
          >
            {AboutSocial.map((item, index) => (
              <StyledLink
                variant="one"
                href={item.url}
                className="group"
                key={index}
              >
                {item.icon}
              </StyledLink>
            ))}
          </div>
          <hr className="w-full my-6 border-text-subtle border-1 dark:border-gray-800" />
        </div>
        <div className="flex flex-col">
          <h1
            className="mb-2 text-2xl font-semibold tracking-tight text-text md:text-4xl"
            data-fade="2"
          >
            Bio
          </h1>
          <p className="text-gray-600 dark:text-gray-400" data-fade="4">
            {AboutBio}
          </p>
        </div>
        {aboutData.map((item, index) => (
          <div key={index}>
            <h1
              className="w-full mb-4 text-2xl font-semibold tracking-tight md:text-4xl text-text"
              data-fade="2"
            >
              {item.title}
            </h1>

            {item.data.map((subItem, subIndex) => (
              <div
                className="grid w-full grid-cols-12 gap-2 mb-6"
                data-fade="3"
                key={subIndex}
              >
                <div className="col-span-9 list-outside border-l border-text-subtle dark:border-yellow-600">
                  <div className="mb-10 ml-2 last:mb-0">
                    <h2 className="text-lg font-medium text-foam md:text-xl">
                      {subItem.position} - {subItem.company}
                    </h2>
                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {subItem.date}
                    </time>
                    <address className="mb-1 text-sm not-italic font-normal leading-none text-gray-400 dark:text-gray-500">
                      {subItem.location}
                    </address>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default About;
