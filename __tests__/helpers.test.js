const {format_date} = require('../utils/helpers');
const {format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('lion', 1);
  const word2 = format_plural('tiger', 2);

  expect(word1).toBe('lion');
  expect(word2).toBe('tigers');
});

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});