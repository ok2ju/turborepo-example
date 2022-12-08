import { Fragment } from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { Button } from "@te/core";
import { getAllFrontmatter, getMdxBySlug } from "../../lib/mdx";
import { MDXComponents } from "../../components/MDX";

const components = { ...MDXComponents, Button };

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
  const frontmatters = getAllFrontmatter("components");
  return {
    paths: frontmatters.map((fm: any) => ({
      params: { slug: fm.slug.replace("components/", "").split("/") },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const source = await getMdxBySlug(
    "components/",
    context.params.slug.join("/")
  );
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
