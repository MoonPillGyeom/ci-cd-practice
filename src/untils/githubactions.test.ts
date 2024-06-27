import { githubactionstest } from "./githubactionstest";

describe("Ddd", () => {
  test("adds 1 * 2 to equal 2", () => {
    expect(githubactionstest(1, 2)).toBe(2);
  });
});
