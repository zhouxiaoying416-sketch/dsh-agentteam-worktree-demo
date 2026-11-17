const test = require('node:test');
const assert = require('node:assert');
const { clamp, average, median } = require('../src/mathutil');

test('clamp', () => {
  assert.strictEqual(clamp(5, 0, 3), 3);
  assert.strictEqual(clamp(-1, 0, 3), 0);
  assert.strictEqual(clamp(2, 0, 3), 2);
});
test('average', () => {
  assert.strictEqual(average([1, 2, 3, 4]), 2.5);
  assert.strictEqual(average([]), 0);
});
test('median', () => {
  assert.strictEqual(median([3, 1, 2]), 2);
  assert.strictEqual(median([4, 1, 3, 2]), 2.5);
  assert.strictEqual(median([]), 0);
});
