test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

//if a value is not false it is truthy

// .toBeTruthy()
// toBeTruthy(): This matcher checks if a value is truthy, meaning it is not false, 0, '', null, undefined, or NaN. It matches any value that can be treated as true in a JavaScript if statement.
