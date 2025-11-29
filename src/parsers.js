import { readFileSync } from "node:fs";
import path from "path";

export default (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = readFileSync(absolutePath);
  const extension = path.extname(filepath).toLowerCase();

  if (extension === ".json") {
    return JSON.parse(content);
  }
};
