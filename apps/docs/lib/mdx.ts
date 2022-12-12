import fs from "fs";
import path from "path";
// @ts-ignore
import glob from "glob";
import matter from "gray-matter";
import { hasProperty } from "hast-util-has-property";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";

const ROOT_PATH = process.cwd();
const CONTENT_PATH = path.join(ROOT_PATH, "content");

export const getAllFrontmatter = (fromPath: string) => {
  const PATH = path.join(CONTENT_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths
    .map((filePath: string) => {
      const source = fs.readFileSync(path.join(filePath), "utf-8");
      const { data, content } = matter(source);

      return {
        ...data,
        slug: filePath.replace(`${CONTENT_PATH}/`, "").replace(".mdx", ""),
      };
    })
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
};

export const getMdxBySlug = async (basePath: string, slug: string) => {
  const source = fs.readFileSync(
    path.join(CONTENT_PATH, basePath, `${slug}.mdx`),
    "utf8"
  );
  return source;
};

export const extractHeadings = ({ headings }: { headings: any }) => {
  return (tree: any) => {
    const toc: any = [];
    const flatToc: any = [];

    visit(tree, "element", (node) => {
      if (hasProperty(node, "id")) {
        const depth = parseInt(node.tagName.substring(1));
        const entry = {
          id: node.properties.id.toString(),
          title: toString(node),
          depth,
          children: [],
        };

        flatToc.push(entry);

        let parent = toc;

        for (let i = flatToc.length - 1; i >= 0; i--) {
          const current = flatToc[i] || {};

          if ((current.depth || 0) < entry.depth) {
            parent = current.children || [];
            break;
          }
        }
        parent.push(entry);
      }
    });

    headings.push(...toc);
  };
};
