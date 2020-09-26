const sum = require("./scketch");

test("adds 1 + 2 to equal 3", sumeTest);

function sumeTest() {
  expect(sum(1, 2)).toBe(3);
}
