import { Fragment } from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllFrontmatter, getMdxBySlug } from "../../lib/mdx";
import { MDXComponents } from "../../components/MDX";
import DocLayout from "../../components/DocLayout";
import { nav, menu } from "../../constants/routes";

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
      <DocLayout nav={nav} menu={menu}>
        <MDXRemote {...source} components={components} />
      </DocLayout>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter("overview");

  return {
    paths: frontmatters.map((fm: any) => ({
      params: { slug: fm.slug.replace("overview/", "") },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const source = await getMdxBySlug("overview/", context.params.slug);
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
      format: "mdx",
    },
    parseFrontmatter: true,
  });

  return { props: { source: mdxSource } };
}
