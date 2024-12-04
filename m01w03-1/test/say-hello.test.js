const sayHello = require('../say-hello');
const assert = require('assert');

describe('tests for the sayHello function', () => {

  it('returns "hello there alice" when passed the string "alice"', () => {
    const actual = sayHello('alice');
    const expected = 'hello there alice';

    assert.strictEqual(actual, expected);
  });

  it('returns "hi there" when given undefined', () => {
    const actual = sayHello();
    const expected = 'hi there';

    assert.strictEqual(actual, expected);
  });

});
