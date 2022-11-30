const fs = require("fs");
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // eslint-disable-line
});

const getMergedPullRequests = async () => {
  const { data } = await octokit.pulls.list({
    state: "all",
    owner: "chakra-ui",
    repo: "chakra-ui",
    base: "main",
    head: "chakra-ui:changeset-release/main",
    per_page: 100,
  });

  console.log("pullRequests", data);

  return data.filter((pr) => pr.merged_at);
};

const getPullRequestData = (pullRequest) => {
  if (!pullRequest.body) {
    return;
  }

  let content = pullRequest.body ?? "";
  const parts = content.split("# Releases");
  content = parts[1] || content;

  const date = new Date(pr.merged_at ?? pr.updated_at).toLocaleDateString(
    "en-US",
    dateFormatOptions
  );

  const body = [
    "---",
    `title: Release date ${date}`,
    `releaseUrl: ${pr.html_url}`,
    `releaseDate: ${date}`,
    "---",
    "\n",
    `${content}`,
  ];

  return {
    id: pr.number,
    url: pr.html_url,
    body: body.join("\n"),
    date: date,
  };
};

const writeChangelog = async (pullRequest) => {
  if (!pullRequest) {
    return;
  }

  if (!fs.existsSync(".changelog")) {
    fs.mkdirSync(".changelog");
  }

  return fs.promises.writeFile(`.changelog/${pr.date}.md`, pr.body);
};

const pullRequests = await getMergedPullRequests();
const content = pullRequests.map(getPullRequestData).filter(Boolean);
await Promise.all([...content.map(writeChangelog)]);
