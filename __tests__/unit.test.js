// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Part 2 - Unit tests for validation functions
describe('Validation Functions', () => {
  // Test isPhoneNumber function
  test('isPhoneNumber validates (123) 456-7890 as true', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  
  // Test isEmail function
  test('isEmail validates user@domain.com as true', () => {
    expect(isEmail('user@domain.com')).toBe(true);
  });
  
  // Test isStrongPassword function
  test('isStrongPassword validates Password123 as true', () => {
    expect(isStrongPassword('Password123')).toBe(true);
  });
  
  // Test isDate function
  test('isDate validates 01/01/2023 as true', () => {
    expect(isDate('01/01/2023')).toBe(true);
  });
  
  // Test isHexColor function
  test('isHexColor validates #FF5500 as true', () => {
    expect(isHexColor('#FF5500')).toBe(true);
  });
});
