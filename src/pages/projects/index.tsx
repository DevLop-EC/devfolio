import { allProjects, Project } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import { useFetchRepository } from 'src/hooks/useFetchRepository';
import ListLayout2 from 'src/layouts/ListLayout2';

export default function BlogPage() {
  const { data: repository } = useFetchRepository();

  return (
    <>
      <NextSeo
        title="Snippet list"
        description="All the code snippet I made that maybe useful to you."
      />
      <ListLayout2 repository={repository} />
    </>
  );
}
