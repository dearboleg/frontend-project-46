import parse from "./parsers.js";
import _ from "lodash";

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const dataKeys1 = Object.keys(data1);
  const dataKeys2 = Object.keys(data2);
  const allDataKeys = _.sortBy(_.union(dataKeys1, dataKeys2));

  const difference = allDataKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data2, key)) {
      return ` - ${key}: ${value1}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${value2}`;
    }
    if (!_.isEqual(value1, value2)) {
      return `  - ${key}: ${value1}\n  + ${key}: ${value2}`;
    }
    return `    ${key}: ${value1}`;
  });

  return `{\n${difference.join("\n")}\n}`;
};

export default genDiff;
