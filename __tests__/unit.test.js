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
  