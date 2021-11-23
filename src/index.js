let url = "https://www.google.com/search?q=";
const open = require("open");
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      message: "Pick site:",
      name: "site",
      choices: ["google", "stack overflow", "youtube", "leetcode", "reddit"],
    },
    {
      type: "text",
      message: "Search Query",
      name: "query",
    },
  ])
  .then((answers) => {
    const { site, query } = answers;
    const queryString = encodeURIComponent(query);
    search(site, queryString);
    open(url);
  })
  .catch((error) => {
    console.log(error);
  });

const search = (site, query) => {
  switch (site) {
    case "google":
      url = `https://www.google.com/search?q=${query}`;
      break;
    case "stack overflow":
      url = `https://stackoverflow.com/search?q=${query}`;
      break;
    case "youtube":
      url = `https://www.youtube.com/search?q=${query}`;
      break;
    case "leetcode":
      url = `https://leetcode.com/problemset/all/?search=${query}`;
      break;
    case "reddit":
      url = `https://www.reddit.com/search?q=${query}`;
      break;
  }
};
