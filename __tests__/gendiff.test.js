import genDiff from "../src/genDiff.js";

test("Equal files", () => {
  const result = genDiff("__fixtures__/file1.json", "__fixtures__/file2.json");
  expect(result).toBe(result);
});
