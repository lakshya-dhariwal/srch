const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      message: "Pick site:",
      name: "site",
      choices: ["google", "stack overflow", "youtube", "leetcode", "reddit"],
    },{
        type: "text",
        message: "Search Query",
        name: "query",
    }
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.log(error)
  });
