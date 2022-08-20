import { NextSeo } from 'next-seo';
import { useState } from 'react';
import siteMetadata from '../../data/siteMetadata';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <NextSeo title="contact" />
      <div className="mx-auto max-w-4xl overflow-hidden">
        <h1 className="text-3xl font-bold tracking-wide uppercase md:text-5xl text-text sm:leading-10 md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <div className="relative">
            <span className="absolute -right-7 top-[90px] z-[1] fill-black/40 dark:fill-white/40">
              <svg
                width="134"
                height="107"
                viewBox="0 0 134 107"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                fill="currentColor"
              >
                <defs>
                  <pattern
                    id="patt"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      rx="15"
                      ry="15"
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-blue-200 dark:text-slate-700"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect width="134" height="107" fill="url(#patt)"></rect>
              </svg>
            </span>
            <span className="absolute -left-2 -bottom-7 z-[1] fill-black/40 dark:fill-white/40">
              <svg
                width="134"
                height="70"
                viewBox="0 0 134 70"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <defs>
                  <pattern
                    id="patt"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      rx="15"
                      ry="15"
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-blue-200 dark:text-slate-700"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect width="134" height="70" fill="url(#patt)"></rect>
              </svg>
            </span>
            <div className="relative mt-6 grid h-full w-full grid-cols-1 gap-6 divide-x divide-none dark:divide-none md:grid-cols-2 md:divide-gray-200 md:dark:divide-white/20 z-10">
              <div className="relative m-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-hightlight-high bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:bg-surface">
                <form className="relative flex w-full flex-col items-center justify-center">
                  <div className="z-[2] block w-full items-center justify-center gap-1.5 text-left md:flex">
                    <label
                      htmlFor="contact_name"
                      className="w-full text-left text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400"
                    >
                      Name
                      <span
                        aria-hidden="true"
                        className="cursor-help text-red-500"
                        title="Required"
                      >
                        *
                      </span>
                      <input
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="my-2 w-full rounded-lg border-[1px] border-hightlight-high p-2 text-text outline-none duration-200 focus:border-blue-700  dark:bg-transparent focus:dark:border-blue-500 "
                        type="text"
                        placeholder="John Doe"
                      />
                    </label>
                    <label
                      htmlFor="contact_email"
                      className="w-full text-left text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400"
                    >
                      Email
                      <span
                        aria-hidden="true"
                        className="cursor-help text-red-500"
                        title="Required"
                      >
                        *
                      </span>
                      <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="my-2 w-full rounded-lg border-[1px] border-hightlight-high p-2 text-text outline-none duration-200 focus:border-blue-700  dark:bg-transparent  focus:dark:border-blue-500 "
                        type="email"
                        placeholder="john@doe.com"
                      />
                    </label>
                  </div>
                  <div className="mt-2 flex w-full items-center justify-center gap-1.5">
                    <label
                      htmlFor="contact_message"
                      className="w-full text-left text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400"
                    >
                      Message
                      <span
                        aria-hidden="true"
                        className="cursor-help text-red-500"
                        title="Required"
                      >
                        *
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="my-2 max-h-40 min-h-[80px] w-full resize-none rounded-lg border-[1px] border-hightlight-high p-2 text-text outline-none duration-200 focus:border-blue-700  dark:bg-transparent  focus:dark:border-blue-500"
                        placeholder="Hello there!"
                      ></textarea>
                    </label>
                  </div>
                  <div className="w-full py-2 outline-none">
                    <button
                      type="submit"
                      className="font-poppins group mt-2 ml-auto flex rounded-md border border-transparent px-4 py-2 text-sm font-medium text-text duration-200 bg-surface motion-reduce:transition-none dark:bg-subtle/[5%] hover:bg-overlay  "
                    >
                      Send
                      <svg
                        className="mt-[2px] ml-2 h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <div className="space-y-4 p-4">
                  <p className="text-xl font-semibold">Or contact me with...</p>
                  <a
                    className="font-poppins group mt-2 ml-auto flex w-full rounded-md border border-transparent px-4 py-2 text-sm font-semibold bg-surface backdrop-blur-[9px] duration-200 hover:bg-overlay motion-reduce:transition-none dark:bg-subtle/[5%]"
                    href={siteMetadata.email}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-[2px] mr-2 h-4 w-4 duration-200 motion-reduce:transition-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                    Email
                  </a>
                  <a
                    className="font-poppins group mt-2 ml-auto flex w-full rounded-md border border-transparent px-4 py-2 text-sm font-semibold bg-surface backdrop-blur-[9px] duration-200 hover:bg-overlay motion-reduce:transition-none dark:bg-subtle/[5%]"
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    href={siteMetadata.linkedin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="duration mt-[2px] mr-2 h-4 w-4 duration-200 motion-reduce:transition-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                    </svg>
                    Linkedin
                  </a>
                  <a
                    className="font-poppins group mt-2 ml-auto flex w-full rounded-md border border-transparent px-4 py-2 text-sm font-semibold bg-surface backdrop-blur-[9px] duration-200 hover:bg-overlay motion-reduce:transition-none dark:bg-subtle/[5%]"
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    href={siteMetadata.twitter}
                  >
                    <svg
                      className="mt-[2px] mr-2 h-4 w-4  duration-200 motion-reduce:transition-none "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
