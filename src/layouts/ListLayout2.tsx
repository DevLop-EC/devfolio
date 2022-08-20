import { Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ProjectCard from 'src/components/ProjectCard';
import SnippetCard from 'src/components/ProjectCard';

export default function ListLayout({ repository }: { repository: Project[] }) {
  const [search, setsearch] = useState('');
  const filteredPosts = repository.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="border-b-[1px] pb-8 mb-8 border-muted">
        <div className="max-w-xl ">
          <h1 className="mb-4 text-3xl font-bold uppercase md:text-5xl text-text">
            Projects
          </h1>

          <div className="relative w-full">
            <input
              aria-label="Search my projects"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              placeholder="Search my projects"
              className="block w-full px-4 py-2 border rounded-md border-hightlight-med bg-surface focus:ring-rose focus:border-rose"
            />
            <svg
              className="absolute w-5 h-5 right-3 top-3 text-subtle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        layout="position"
        transition={{ duration: 0.5 }}
      >
        {filteredPosts.map((snippet) => (
          <ProjectCard key={snippet.slug} {...snippet} />
        ))}
      </motion.div>
    </div>
  );
}
