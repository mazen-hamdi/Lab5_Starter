// unit.test.js

import functions from '../code-to-unit-test/unit-test-me.js';

// Tests for isPhoneNumber
describe('isPhoneNumber', () => {
  // Tests that should return true
  test('validates (123) 456-7890 format', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  
  test('validates 123-456-7890 format', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  
  // Tests that should return false
  test('rejects phone numbers without required formatting', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
  });
  
  test('rejects phone numbers with letters', () => {
    expect(functions.isPhoneNumber('(abc) def-ghij')).toBe(false);
  });
});

// Tests for isEmail
describe('isEmail', () => {
  // Tests that should return true
  test('validates basic email format user@domain.com', () => {
    expect(functions.isEmail('user@example.com')).toBe(true);
  });
  
  test('validates email with underscores user_name@domain.net', () => {
    expect(functions.isEmail('user_name@domain.net')).toBe(true);
  });
  
  // Tests that should return false
  test('rejects email without @', () => {
    expect(functions.isEmail('userexample.com')).toBe(false);
  });
  
  test('rejects email with invalid TLD (more than 3 chars)', () => {
    expect(functions.isEmail('user@domain.comm')).toBe(false);
  });
});

// Tests for isStrongPassword
describe('isStrongPassword', () => {
  // Tests that should return true
  test('validates password starting with letter and containing 4-15 chars', () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
  });
  
  test('validates password with underscores', () => {
    expect(functions.isStrongPassword('test_123')).toBe(true);
  });
  
  // Tests that should return false
  test('rejects password starting with number', () => {
    expect(functions.isStrongPassword('1abc')).toBe(false);
  });
  
  test('rejects password that is too long', () => {
    expect(functions.isStrongPassword('abcdefghijklmnop')).toBe(false);
  });
});

// Tests for isDate
describe('isDate', () => {
  // Tests that should return true
  test('validates date in MM/DD/YYYY format', () => {
    expect(functions.isDate('12/31/2023')).toBe(true);
  });
  
  test('validates date in M/D/YYYY format', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
  });
  
  // Tests that should return false
  test('rejects date with dashes instead of slashes', () => {
    expect(functions.isDate('12-31-2023')).toBe(false);
  });
  
  test('rejects date with invalid format', () => {
    expect(functions.isDate('2023/12/31')).toBe(false);
  });
});

// Tests for isHexColor
describe('isHexColor', () => {
  // Tests that should return true
  test('validates 3-digit hex color with #', () => {
    expect(functions.isHexColor('#abc')).toBe(true);
  });
  
  test('validates 6-digit hex color without #', () => {
    expect(functions.isHexColor('123abc')).toBe(true);
  });
  
  // Tests that should return false
  test('rejects hex colors with invalid characters', () => {
    expect(functions.isHexColor('#xyz')).toBe(false);
  });
  
  test('rejects hex colors with incorrect length', () => {
    expect(functions.isHexColor('#abcd')).toBe(false);
  });
});
