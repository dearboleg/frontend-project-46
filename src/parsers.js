import { readFileSync } from "node:fs";
import path from "node:path";

const pathParser = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = readFileSync(absolutePath);
  const extension = path.extname(filepath).toLowerCase();

  if (extension === ".json") {
    return JSON.parse(content);
  }
};

export default pathParser