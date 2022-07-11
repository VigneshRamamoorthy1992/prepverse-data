const dirTree = require("directory-tree");
const fs = require("fs-extra");

const statementPattern =
  /(?<=\/\* statement \*\/)(.*)(?=\/\* solution \*\/)/gms;
const solutionPattern = /(?<=\/\* solution \*\/)(.*)/gms;
const tagsPattern = /(?<=\/\* tags: \[)(.*?)(?=\] \*\/)/gms;

function generateMetadata() {
  const filteredTree = dirTree("resources", { extensions: /\.js/ });

  const stack = [filteredTree];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.children) {
      stack.push(...current.children);
    } else {
      parseContent(current);
    }
  }

  fs.writeFileSync("resource-metadata.json", JSON.stringify(filteredTree));
  console.log("DONE");
}

function parseContent(fileDetail) {
  const content = fs.readFileSync(fileDetail.path).toString();
  fileDetail["name"] = fileDetail.name.slice(0, -3);
  fileDetail["docs"] = content
    .match(statementPattern)
    ?.pop()
    ?.replace("/*", "")
    ?.replace("*/", "");
  fileDetail["solution"] = content.match(solutionPattern)?.pop();
  fileDetail["tags"] = content.match(tagsPattern)?.pop()?.split(",");
}

generateMetadata();
