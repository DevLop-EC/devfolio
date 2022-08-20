import { allProjects, Project } from 'contentlayer/generated';
import siteMetadata from 'data/siteMetadata';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import SnippetLayout from 'src/layouts/SnippetLayout';
import components from '../../components/MDXComponents';

export default function BlogDetailPage({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.html);
  return (
    <SnippetLayout project={project}>
      <SEO project={project} />
      <Component
        components={{
          ...components,
        }}
      />
    </SnippetLayout>
  );
}

function SEO({ project }: { project: Project }) {
  return (
    <>
      <NextSeo
        title={project.name}
        description={project.description}
        openGraph={{
          type: 'article',
        }}
      />
      <ArticleJsonLd
        url={`${siteMetadata.siteUrl}/snippet/${project.slug}`}
        title={project.name}
        authorName={siteMetadata.author}
        description={project.description}
        images={[]}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);
  return { props: { project } };
}
