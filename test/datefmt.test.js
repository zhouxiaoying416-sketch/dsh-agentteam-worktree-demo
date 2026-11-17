const test = require('node:test');
const assert = require('node:assert');
const { formatDate, daysBetween } = require('../src/datefmt');

test('formatDate', () => {
  assert.strictEqual(formatDate(new Date(Date.UTC(2026, 10, 17))), '2026-11-17');
});
test('daysBetween', () => {
  const a = new Date(Date.UTC(2026, 10, 17));
  const b = new Date(Date.UTC(2026, 10, 20));
  assert.strictEqual(daysBetween(a, b), 3);
  assert.strictEqual(daysBetween(b, a), 3);
});
