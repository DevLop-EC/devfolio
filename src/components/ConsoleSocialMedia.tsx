import React from 'react';
import Typewriter from 'typewriter-effect';

export default function ConsoleSocialMedia() {
	return (
		<div className="hidden items-center motion-reduce:transition-none md:col-span-3 md:mt-7 md:-mb-7 md:flex lg:col-span-2 lg:mt-0 lg:mb-0">
			<div className="border-hightlight-high block w-full rounded-md border font-poppins text-[15px] text-sm shadow-codeLight transition-colors motion-reduce:transition-none dark:border-[1px] dark:bg-surface shadow-md">
				<div className="w-fill border-b-dark/5 relative flex h-8 items-center gap-[6px] border-b bg-white/[0.05%] p-2 dark:border-b-white/10">
					<div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fb5f57]"></div>
					<div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fdbf2d]"></div>
					<div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#27cb3f]"></div>
					<div className="absolute top-0 bottom-0 flex w-full items-center justify-center">
						<span className="opacity-50" aria-hidden="true">
							Console
						</span>
					</div>
				</div>
				<div className="p-4">
					<span
						className="font-semibold leading-6 text-[#ea4aaa]"
						aria-hidden="true">
						→
					</span>{' '}
					<span
						className="font-semibold text-[#66e777]"
						aria-hidden="true">
						~/christdevlop
					</span>{' '}
					<span className="italic">
						<span
							className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300"
							aria-hidden="true">
							$
						</span>{' '}
						<span aria-label="list github account DevLop-EC">
							list github --user=
							<a
								target="_blank"
								rel="noreferrer"
								aria-label="See undefined github"
								href="https://github.com/DevLop-EC">
								&quot;DevLop-Ec&quot;
							</a>
						</span>
					</span>
					<br />
					<span className="leading-6">
						<div>
							<span aria-hidden="true"> + </span>
							<span className="font-semibold">
								19 Open Source
							</span>{' '}
							repositories on Github (total size: 103.1 MB)
						</div>
					</span>
					<div>
						<span
							className="font-semibold leading-6 text-[#ea4aaa]"
							aria-hidden="true">
							→
						</span>{' '}
						<span
							className="font-semibold text-[#66e777]"
							aria-hidden="true">
							~/christdevlop
						</span>{' '}
						<span className="italic">
							<span className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300">
								$
							</span>{' '}
							<span>contact --linkedin</span>
						</span>
						<div className="leading-6">
							+ <span className="font-semibold">User:</span>{' '}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/christdevlop/">
								christdevlop
							</a>
							<br />+{' '}
							<span className="font-semibold">Link:</span>{' '}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/christdevlop/">
								https://www.linkedin.com/in/christdevlop/
							</a>
						</div>
					</div>
					<span
						className="font-semibold leading-6 text-[#ea4aaa]"
						aria-hidden="true">
						→
					</span>{' '}
					<span
						className="font-semibold text-[#66e777]"
						aria-hidden="true">
						~/christdevlop
					</span>{' '}
					<span className="italic">
						<span
							className="relative inline-flex gap-1 font-semibold text-slate-700 duration-200 after:absolute after:top-0 after:right-[-1.5em] after:bottom-0 after:my-auto after:text-[1em]  dark:text-slate-300"
							aria-hidden="true">
							$
							<Typewriter
								options={{
									strings: [],
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}
