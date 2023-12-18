test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

// toBeFalsy(): This matcher checks if a value is falsy, meaning it is false, 0, '', null, undefined, or NaN. It matches any value that can be treated as false in a JavaScript if statement.
