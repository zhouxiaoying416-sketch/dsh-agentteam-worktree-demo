const test = require('node:test');
const assert = require('node:assert');
const { slugify, truncate, countWords } = require('../src/textutil');

test('slugify', () => {
  assert.strictEqual(slugify('Hello, World!'), 'hello-world');
  assert.strictEqual(slugify('  A  B  '), 'a-b');
});
test('truncate', () => {
  assert.strictEqual(truncate('abcdefghij', 8), 'abcde...');
  assert.strictEqual(truncate('abc', 8), 'abc');
});
test('countWords', () => {
  assert.strictEqual(countWords('one two  three'), 3);
  assert.strictEqual(countWords(''), 0);
});
