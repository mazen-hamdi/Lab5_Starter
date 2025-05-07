




// // matches valid phone numbers
// export function isPhoneNumber(phoneNumber) {
//   const phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
//   return phoneRegex.test(phoneNumber);
// }

// // matches valid emails
// export function isEmail(email) {
//   const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   return emailRegex.test(email);
// }

// /**
//  * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
//  */
// export function isStrongPassword(password) {
//   const pwRegex = /^[a-zA-Z]\w{3,14}$/;
//   return pwRegex.test(password);
// }

// // 	This regular expressions matches dates of the form XX / XX / YYYY where
// // XX can be 1 or 2 digits long and YYYY is always 4 digits long.
// export function isDate(date) {
//   const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
//   return dateRegex.test(date);
// }

// // Matches valid 3 or 6 character hex codes used for HTML or CSS.
// export function isHexColor(color) {
//   const colorRegex = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
//   return colorRegex.test(color);
// }




/*  __tests__/unit.test.js  */

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

/* ----------  Phone numbers  ---------- */
test('valid phone ‑ parentheses', () =>
  expect(isPhoneNumber('(858) 534-2230')).toBe(true));

test('valid phone ‑ dashes', () =>
  expect(isPhoneNumber('858-534-2230')).toBe(true));

test('invalid phone ‑ missing dash', () =>
  expect(isPhoneNumber('8585342230')).toBe(false));

test('invalid phone ‑ wrong format', () =>
  expect(isPhoneNumber('(858 534-2230')).toBe(false));

/* ----------  Emails  ---------- */
test('valid email ‑ edu domain', () =>
  expect(isEmail('student123@ucsd.edu')).toBe(true));

test('valid email ‑ underscore', () =>
  expect(isEmail('hello_world@domain.com')).toBe(true));

test('invalid email ‑ missing TLD', () =>
  expect(isEmail('user@domain')).toBe(false));

test('invalid email ‑ no @', () =>
  expect(isEmail('notanemail.com')).toBe(false));

/* ----------  Strong passwords  ---------- */
test('valid pw ‑ starts with letter, 4 chars', () =>
  expect(isStrongPassword('A123')).toBe(true));

test('valid pw ‑ underscores allowed', () =>
  expect(isStrongPassword('Z__9_good')).toBe(true));

test('invalid pw ‑ starts with digit', () =>
  expect(isStrongPassword('1BadPass')).toBe(false));

test('invalid pw ‑ too short', () =>
  expect(isStrongPassword('Ab')).toBe(false));

/* ----------  Dates (MM/DD/YYYY or M/D/YYYY)  ---------- */
test('valid date ‑ single digits', () =>
  expect(isDate('1/1/2025')).toBe(true));

test('valid date ‑ double digits', () =>
  expect(isDate('12/31/1999')).toBe(true));

test('invalid date ‑ wrong separator', () =>
  expect(isDate('1-1-2025')).toBe(false));

test('invalid date ‑ 5‑digit year', () =>
  expect(isDate('12/31/19999')).toBe(false));

/* ----------  Hex colors  ---------- */
test('valid hex ‑ 3 chars with #', () =>
  expect(isHexColor('#0fA')).toBe(true));

test('valid hex ‑ 6 chars no #', () =>
  expect(isHexColor('00ffcc')).toBe(true));

test('invalid hex ‑ 4 chars', () =>
  expect(isHexColor('#FFFF')).toBe(false));

test('invalid hex ‑ non‑hex symbols', () =>
  expect(isHexColor('zzzzzz')).toBe(false));
