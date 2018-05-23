const tap = require("tap");
const test = tap.test;

const sut = require("../index");

test("It throws when input is invalid", (suite) => {
  suite.test("null", (t) => {
    t.plan(1);
    t.throws(() => {
      sut(null);
    }, { message: "Expected object, got null." });
  });

  suite.test("undefined", (t) => {
    t.plan(1);
    t.throws(() => {
      sut(void 0);
    }, { message: "Expected object, got undefined." });
  });

  suite.test("array", (t) => {
    t.plan(1);
    t.throws(() => {
      sut([1, 2]);
    }, { message: "Expected object, got 1,2." });
  });

  suite.end();
});

test("It normalizes input", (t) => {
  t.plan(1);
  t.strictDeepEqual(
    sut({
      valtrueString: "true",
      valfalseString: "false",
      valTrueString: "True",
      valFalseString: "False",
      val0String: "0",
      val1String: "1",
      val42String: "42",
      val42pxString: "42px",
      valJSONString: JSON.stringify({
        val42Number: 42,
        val42String: "42",
        valtrueBool: true,
        valtrueString: "true",
        valJSONArray: [42],
      }),
      valJSONArrayString: JSON.stringify([
        1,
        true,
      ]),
    }),
    {
      valtrueString: true,
      valfalseString: false,
      valTrueString: "True",
      valFalseString: "False",
      val0String: 0,
      val1String: 1,
      val42String: 42,
      val42pxString: "42px",
      valJSONString: {
        val42Number: 42,
        val42String: "42",
        valtrueBool: true,
        valtrueString: "true",
        valJSONArray: [42],
      },
      valJSONArrayString: [
        1,
        true,
      ],
    }
  );
});
