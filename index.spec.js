const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('./index');

describe('add', () => {
  it('suma dos números', () => {
    assert.strictEqual(add(2, 3), 5);
  });
});

describe('subtract', () => {
  it('resta dos números', () => {
    assert.strictEqual(subtract(5, 3), 2);
  });
});
