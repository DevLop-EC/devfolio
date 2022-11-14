import {Project} from 'contentlayer/generated';

export default function ProjectCard(project: Project) {
	console.log(project);
	return (
		<div>
			<div className="relative w-full p-2 transition duration-500 transform border rounded-xl cursor-pointer bg-surface border-hightlight-high group hover:scale-105">
				<div className="absolute bottom-0 left-0 w-full h-0.5 duration-300 origin-left transform scale-x-0 bg-text group-hover:scale-x-100"></div>
				<div className="absolute bottom-0 left-0 w-0.5 h-full duration-300 origin-bottom transform scale-y-0 bg-text group-hover:scale-y-100"></div>
				<div className="absolute top-0 left-0 w-full h-0.5 duration-300 origin-right transform scale-x-0 bg-text group-hover:scale-x-100"></div>
				<div className="absolute bottom-0 right-0 w-0.5 h-full duration-300 origin-top transform scale-y-0 bg-text group-hover:scale-y-100"></div>
				<div className=" p-4 duration-200 hover:scale-105  motion-reduce:hover:scale-100 dark:border-white/[15%]">
					<div className="text-left">
						<a
							className="break-all text-left font-poppins font-semibold"
							target="_blank"
							rel="noopener noreferrer"
							href={project.url}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								aria-hidden="true"
								className="inline h-6 w-6 text-text duration-200 motion-reduce:transition-none ">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
							</svg>{' '}
							{project.name}
						</a>{' '}
						<span className="inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[55%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:text-white/[50%]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								aria-hidden="true"
								className="inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
							</svg>{' '}
							Active
						</span>
					</div>
					<p className="text-left">{project.description}</p>

					<div className="text-left">
						{project?.topics.map((topic, index) => (
							<span
								key={index}
								className="mr-[10px] mt-1 inline-flex content-center items-center rounded-[2em] border-[1px]  py-[0.12em] px-[0.5em] align-middle text-[88%] text-text duration-200 motion-reduce:transition-none border-text">
								#{topic}
							</span>
						))}
					</div>

					<div className="hide-scrollbar mt-3 flex gap-2 overflow-hidden overflow-x-auto">
						<a
							target="_blank"
							rel="noopener noreferrer"
							aria-label="JavaScript search"
							href="https://github.com/DevLop-EC/DevLop-EC.github.io/search?l=JavaScript">
							<span className="flex w-max content-center items-center rounded-lg border-2 border-transparent bg-text py-[0.12em] px-[0.5em] text-sm text-surface duration-200 motion-reduce:transition-none  ">
								<span
									className="mr-1 block h-[12px] w-[12px] rounded-full bg-gray-400 dark:bg-white"
									style={{
										backgroundColor: 'rgb(241, 224, 90)',
									}}></span>{' '}
								<span>
									{project.language == null
										? 'C#'
										: project.language}
								</span>
							</span>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/DevLop-EC/DevLop-EC.github.io/stargazers">
							<span className="flex w-max content-center items-center rounded-lg border-2 border-transparent bg-text py-[0.12em] px-[0.5em] text-sm text-surface duration-200 motion-reduce:transition-none  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
									className="mr-1 inline h-5 w-5 text-yellow-400 duration-200 motion-reduce:transition-none"
									role="img">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
								</svg>{' '}
								<span>
									{project.stargazers_count} Stars
								</span>
							</span>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/DevLop-EC/DevLop-EC.github.io/network/members">
							<span className="flex w-max content-center items-center rounded-lg border-2 border-transparent bg-text py-[0.12em] px-[0.5em] text-sm text-surface duration-200 motion-reduce:transition-none  ">
								<svg
									className="mr-1 h-5 w-5 fill-black/[50%] duration-200 motion-reduce:transition-none dark:fill-white/[70%]"
									aria-hidden="true"
									role="img"
									viewBox="0 0 32 32">
									<path
										fill="currentColor"
										d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></path>
								</svg>{' '}
								<span>{project.forks_count} Forks</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
