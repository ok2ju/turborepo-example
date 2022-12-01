import fs from "fs";
import path from "path";
// @ts-ignore
import glob from "glob";
import matter from "gray-matter";

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
