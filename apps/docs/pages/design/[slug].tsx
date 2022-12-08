import { Fragment } from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { getAllFrontmatter, getMdxBySlug } from "../../lib/mdx";
import { MDXComponents } from "../../components/MDX";

const components = { ...MDXComponents };

// TODO: Fix type definitions
export default function ComponentsDoc({ source }: { source: any }) {
  return (
    <Fragment>
      <Head>
        <title>{source.frontmatter.metaTitle}</title>
        <meta name="description" content={source.frontmatter.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MDXRemote {...source} components={components} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter("design");

  return {
    paths: frontmatters.map((fm: any) => ({
      params: { slug: fm.slug.replace("design/", "") },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const source = await getMdxBySlug("design/", context.params.slug);
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx",
    },
    parseFrontmatter: true,
  });

  return { props: { source: mdxSource } };
}
