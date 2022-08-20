import { NextSeo } from 'next-seo';
import React from 'react';
import TagComponent from 'src/components/Tag';
import { allTags, Tag } from 'src/lib/tags';

export default function TagPage({ tags }: { tags: Tag[] }) {
  console.log(tags);
  return (
    <div>
      <NextSeo title="Tags" description="All the blog's tag on this website." />
      <div className="border-b-[1px] pb-5 border-muted mb-10">
        <h1 className="text-3xl font-bold tracking-wide uppercase md:text-5xl text-text sm:leading-10 md:leading-14">
          Skills
        </h1>
      </div>
      <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {tags.map((tag) => (
          <TagComponent
            key={tag.name}
            text={tag.name}
            count={tag.count}
            image={tag.image}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const tags = allTags().sort((a, b) => b.count - a.count);

  return {
    props: {
      tags,
    },
  };
}
