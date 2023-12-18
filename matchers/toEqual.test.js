test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// .toEqual(value)
// .toEqual() matcher in Jest is used to compare the values of two objects or primitives. It recursively checks every field of an object or array for equality, and returns true if the two values are equivalent, and false otherwise.

// toEqual ignores object keys with undefined properties, undefined array items, array sparseness, or object type mismatch. To take these into account use .toStrictEqual instead.
