import parse from "./parsers.js"

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);
  
  return `Difference between ${data1} and ${data2}`;
};

export default genDiff;
