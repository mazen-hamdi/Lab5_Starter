import functions from './unit-test-me.js';

// Lab5_Starter/code-to-unit-test/unit-test-me.test.js

/* ---------- isPhoneNumber ---------- */
describe('isPhoneNumber', () => {
  test('should return true for valid phone number: (123) 456-7890', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('should return true for valid phone number: (123)456-7890 (no space after parentheses)', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
  });
  test('should return true for valid phone number: 123-456-7890', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('should return true for valid phone number without area code: 456-7890', () => {
    expect(functions.isPhoneNumber('456-7890')).toBe(true);
  });
  test('should return false for invalid phone number: 1234567890 (all digits, no formatting)', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
  });
  test('should return false for invalid phone number: (123) 4567890 (missing dash)', () => {
    expect(functions.isPhoneNumber('(123) 4567890')).toBe(false);
  });
  test('should return false for invalid phone number: 123 456-7890 (wrong area code format)', () => {
    expect(functions.isPhoneNumber('123 456-7890')).toBe(false);
  });
  test('should return false for invalid phone number: 123-456-789 (too few digits at end)', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
  });
  test('should return false for invalid phone number: 123-456-78901 (too many digits at end)', () => {
    expect(functions.isPhoneNumber('123-456-78901')).toBe(false);
  });
  test('should return false for non-digit characters: abc-def-ghij', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
  });
  test('should return false for empty string', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
  });
});

/* ---------- isEmail ---------- */
describe('isEmail', () => {
  test('should return true for valid email: user@domain.com', () => {
    expect(functions.isEmail('user@domain.com')).toBe(true);
  });
  test('should return true for valid email with underscore in username: user_name@example.edu', () => {
    expect(functions.isEmail('user_name@example.edu')).toBe(true);
  });
  test('should return true for valid email with numbers in username and underscore in domain: user123@sub_domain.io', () => {
    expect(functions.isEmail('user123@sub_domain.io')).toBe(true);
  });
  test('should return false for invalid email: user@domain (missing .tld)', () => {
    expect(functions.isEmail('user@domain')).toBe(false);
  });
  test('should return false for invalid email: userdomain.com (missing @)', () => {
    expect(functions.isEmail('userdomain.com')).toBe(false);
  });
  test('should return false for invalid email: user@domain.c (TLD too short)', () => {
    expect(functions.isEmail('user@domain.c')).toBe(false);
  });
  test('should return false for invalid email: user@domain.comm (TLD too long)', () => {
    expect(functions.isEmail('user@domain.comm')).toBe(false);
  });
  test('should return false for invalid email: user@.com (domain part missing)', () => {
    expect(functions.isEmail('user@.com')).toBe(false);
  });
  test('should return false for invalid email: @domain.com (username part missing)', () => {
    expect(functions.isEmail('@domain.com')).toBe(false);
  });
  test('should return false for invalid email: user@domain.123 (TLD contains numbers)', () => {
    expect(functions.isEmail('user@domain.123')).toBe(false);
  });
  test('should return false for invalid email: user@do-main.com (domain contains hyphen, not allowed by regex)', () => {
    expect(functions.isEmail('user@do-main.com')).toBe(false);
  });
  test('should return false for empty string', () => {
    expect(functions.isEmail('')).toBe(false);
  });
});

/* ---------- isStrongPassword ---------- */
describe('isStrongPassword', () => {
  test('should return true for valid password (4 chars, starts with letter): Pass', () => {
    expect(functions.isStrongPassword('Pass')).toBe(true);
  });
  test('should return true for valid password (mixed case, numbers, underscore): Password_123', () => {
    expect(functions.isStrongPassword('Password_123')).toBe(true);
  });
  test('should return true for valid password (max length 15 chars): A______________', () => {
    expect(functions.isStrongPassword('A______________')).toBe(true); // A + 14 underscores
  });
  test('should return false for invalid password (starts with digit): 1Pass', () => {
    expect(functions.isStrongPassword('1Pass')).toBe(false);
  });
  test('should return false for invalid password (too short, 3 chars): Pas', () => {
    expect(functions.isStrongPassword('Pas')).toBe(false);
  });
  test('should return false for invalid password (starts with underscore): _Pass', () => {
    expect(functions.isStrongPassword('_Pass')).toBe(false);
  });
  test('should return false for invalid password (too long, 16 chars): A_______________', () => {
    expect(functions.isStrongPassword('A_______________')).toBe(false); // A + 15 underscores
  });
  test('should return false for invalid password (contains invalid char "!"): Pass!', () => {
    expect(functions.isStrongPassword('Pass!')).toBe(false);
  });
  test('should return false for empty string', () => {
    expect(functions.isStrongPassword('')).toBe(false);
  });
});

/* ---------- isDate ---------- */
describe('isDate', () => {
  test('should return true for valid date: 01/01/2024', () => {
    expect(functions.isDate('01/01/2024')).toBe(true);
  });
  test('should return true for valid date: 1/1/2024', () => {
    expect(functions.isDate('1/1/2024')).toBe(true);
  });
  test('should return true for valid date: 12/31/1999', () => {
    expect(functions.isDate('12/31/1999')).toBe(true);
  });
  test('should return false for invalid date (wrong separator): 1-1-2024', () => {
    expect(functions.isDate('1-1-2024')).toBe(false);
  });
  test('should return false for invalid date (year not 4 digits): 01/01/24', () => {
    expect(functions.isDate('01/01/24')).toBe(false);
  });
  test('should return false for invalid date (year too long): 1/1/20244', () => {
    expect(functions.isDate('1/1/20244')).toBe(false);
  });
  test('should return false for invalid date (missing day): 01//2024', () => {
    expect(functions.isDate('01//2024')).toBe(false);
  });
  test('should return false for invalid date (missing month): /01/2024', () => {
    expect(functions.isDate('/01/2024')).toBe(false);
  });
  // The regex does not validate month/day values, only format
  test('should return true for date with month > 12 (e.g., 13/01/2024) as regex only checks format', () => {
    expect(functions.isDate('13/01/2024')).toBe(true);
  });
  test('should return true for date with day > 31 (e.g., 01/32/2024) as regex only checks format', () => {
    expect(functions.isDate('01/32/2024')).toBe(true);
  });
  test('should return false for empty string', () => {
    expect(functions.isDate('')).toBe(false);
  });
});

/* ---------- isHexColor ---------- */
describe('isHexColor', () => {
  test('should return true for valid hex color: #FFF', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
  });
  test('should return true for valid hex color: abc (3 chars, no #)', () => {
    expect(functions.isHexColor('abc')).toBe(true);
  });
  test('should return true for valid hex color: #123456', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
  });
  test('should return true for valid hex color: ABCDEF (6 chars, no #)', () => {
    expect(functions.isHexColor('ABCDEF')).toBe(true);
  });
  test('should return true for valid hex color: 0fA (3 chars, mixed case, no #)', () => {
    expect(functions.isHexColor('0fA')).toBe(true);
  });
  test('should return true for valid hex color: #00ffCc (6 chars, mixed case, with #)', () => {
    expect(functions.isHexColor('#00ffCc')).toBe(true);
  });
  test('should return false for invalid hex color: #FF (2 chars after #)', () => {
    expect(functions.isHexColor('#FF')).toBe(false);
  });
  test('should return false for invalid hex color: #FFFF (4 chars after #)', () => {
    expect(functions.isHexColor('#FFFF')).toBe(false);
  });
  test('should return false for invalid hex color: 12345 (5 chars, no #)', () => {
    expect(functions.isHexColor('12345')).toBe(false);
  });
  test('should return false for invalid hex color (contains invalid char "G"): #12345G', () => {
    expect(functions.isHexColor('#12345G')).toBe(false);
  });
  test('should return false for invalid hex color: 12 (2 chars, no #)', () => {
    expect(functions.isHexColor('12')).toBe(false);
  });
  test('should return false for invalid hex color: #12 (2 chars, with #)', () => {
    expect(functions.isHexColor('#12')).toBe(false);
  });
  test('should return false for invalid hex color: 1234 (4 chars, no #)', () => {
    expect(functions.isHexColor('1234')).toBe(false);
  });
  test('should return false for invalid hex color (only #): #', () => {
    expect(functions.isHexColor('#')).toBe(false);
  });
  test('should return false for empty string', () => {
    expect(functions.isHexColor('')).toBe(false);
  });
});