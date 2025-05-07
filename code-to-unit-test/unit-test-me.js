




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




import functions from '../code-to-unit-test/unit-test-me.js';

describe('isPhoneNumber', () => {
    test('Valid phone number with parentheses and hyphen', () => {
        expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
    });
    test('Valid phone number with hyphens', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });
    test('Invalid phone number with missing digits', () => {
        expect(functions.isPhoneNumber('123-45-6789')).toBe(false);
    });
    test('Invalid phone number with letters', () => {
        expect(functions.isPhoneNumber('abc-456-7890')).toBe(false);
    });
});

describe('isEmail', () => {
    test('Valid email with basic format', () => {
        expect(functions.isEmail('test@example.com')).toBe(true);
    });
    test('Valid email with subdomain and dot', () => {
        expect(functions.isEmail('user.name@mail.co')).toBe(true);
    });
    test('Invalid email missing @ symbol', () => {
        expect(functions.isEmail('plainaddress')).toBe(false);
    });
    test('Invalid email missing domain name', () => {
        expect(functions.isEmail('user@.com')).toBe(false);
    });
});

describe('isStrongPassword', () => {
    test('Valid strong password with letters and digits', () => {
        expect(functions.isStrongPassword('Password1')).toBe(true);
    });
    test('Valid strong password with mixed case and digits', () => {
        expect(functions.isStrongPassword('aA1b2c3d')).toBe(true);
    });
    test('Invalid strong password starting with digit', () => {
        expect(functions.isStrongPassword('12345')).toBe(false);
    });
    test('Invalid strong password too short', () => {
        expect(functions.isStrongPassword('ab')).toBe(false);
    });
});

describe('isDate', () => {
    test('Valid date in MM/DD/YYYY format', () => {
        expect(functions.isDate('12/31/2020')).toBe(true);
    });
    test('Valid leap year date in MM/DD/YYYY format', () => {
        expect(functions.isDate('02/29/2020')).toBe(true);
    });
    test('Invalid date with invalid month', () => {
        expect(functions.isDate('13/01/2020')).toBe(false);
    });
    test('Invalid date with wrong format', () => {
        expect(functions.isDate('2020-02-29')).toBe(false);
    });
});

describe('isHexColor', () => {
    test('Valid 3-digit hex color code', () => {
        expect(functions.isHexColor('#FFF')).toBe(true);
    });
    test('Valid 6-digit hex color code', () => {
        expect(functions.isHexColor('#123ABC')).toBe(true);
    });
    test('Invalid hex color code with invalid characters', () => {
        expect(functions.isHexColor('#123ABCG')).toBe(false);
    });
    test('Invalid hex color code missing hash', () => {
        expect(functions.isHexColor('123ABC')).toBe(false);
    });
});
export default {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
};
