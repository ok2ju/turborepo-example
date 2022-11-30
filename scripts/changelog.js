const fs = require("fs");
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // eslint-disable-line
});

const getMergedPullRequests = async () => {
  const { data } = await octokit.pulls.list({
    state: "all",
    owner: "ok2ju",
    repo: "turborepo-example",
    base: "main",
    head: "turborepo-example:changeset-release/main",
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

  const date = new Date(
    pullRequest.merged_at ?? pullRequest.updated_at
  ).toLocaleDateString("en-US", dateFormatOptions);

  const body = [
    "---",
    `title: Release date ${date}`,
    `releaseUrl: ${pullRequest.html_url}`,
    `releaseDate: ${date}`,
    "---",
    "\n",
    `${content}`,
  ];

  return {
    id: pullRequest.number,
    url: pullRequest.html_url,
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

  return fs.promises.writeFile(
    `.changelog/${pullRequest.date}.md`,
    pullRequest.body
  );
};

const generateChangelog = async () => {
  const pullRequests = await getMergedPullRequests();
  console.log("merged pullRequests", pullRequests);
  const content = pullRequests.map(getPullRequestData).filter(Boolean);
  console.log("pullRequests content", content);
  await Promise.all([...content.map(writeChangelog)]);
};

generateChangelog();
