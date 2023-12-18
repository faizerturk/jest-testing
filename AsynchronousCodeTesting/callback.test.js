const fetchData = require("../callback");

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (err) {
      done(err);
    }
  }

  fetchData(callback);
});
