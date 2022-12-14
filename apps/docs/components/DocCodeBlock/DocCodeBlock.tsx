import { refractor } from "refractor/lib/core";
import js from "refractor/lang/javascript";
import jsx from "refractor/lang/jsx";
import bash from "refractor/lang/bash";
import css from "refractor/lang/css";
import { toHtml } from "hast-util-to-html";

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);

export enum Langs {
  js = "js",
  jsx = "jsx",
  bash = "bash",
  css = "css",
  diff = "diff",
}

export interface DocCodeBlockProps {
  code: string;
  language: Langs.js | Langs.jsx | Langs.bash | Langs.css | Langs.diff;
}

export const DocCodeBlock = ({ code, language }: DocCodeBlockProps) => {
  const result = refractor.highlight(code, language);
  const html = toHtml(result);

  return (
    <div className="max-h-[400px] overflow-auto rounded-lg mt-5 mb-5">
      <pre className={`language-${language} px-[26px] py-5`}>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
};
