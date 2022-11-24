import hello from "../src/hello";

describe("hello()", () => {
  it("Says hello", () => {
    expect(hello().substring(0, 5)).toBe("Hello");
  });
  it("takes an argument", () => {
    expect(hello("Mims")).toBe("Hello, Mims!");
  });
  it("Defaults to world", () => {
    expect(hello()).toBe("Hello, world!");
  });
});
