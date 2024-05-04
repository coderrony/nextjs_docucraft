import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "docs"); // I:\NEXTJS_COURSE\Next_js\Next\02_docucraft\docs

export function getDocuments() {
  //fileNames return array of files like [
  //    'analysis.md',
  //    'introduction.md',
  //  ]
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", ""); // resources,quick-start

    //  pullPath return I:\NEXTJS_COURSE\Next_js\Next\02_docucraft\docs\analysis.md
    // I:\NEXTJS_COURSE\Next_js\Next\02_docucraft\docs\introduction.md
    const fullPath = path.join(postDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
