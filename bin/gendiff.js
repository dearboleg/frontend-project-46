import { Command } from "commander";
import genDiff from "../src/index.js"

const program = new Command();

program
  .name("gendiff")
  .description('Compares two configuration files and shows a difference.')
  .version('14.0.2')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .option('-f, --format [type]', 'output format', 'stylish' )
   .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, options.format)
    console.log(diff)
  });

program.parse();
