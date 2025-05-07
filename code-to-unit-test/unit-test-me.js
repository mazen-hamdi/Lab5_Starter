// code-to-unit-test/unit-test-me.js
// ------------------------------------------------------------
// 1.  Implementations
// ------------------------------------------------------------

// matches valid phone numbers
export function isPhoneNumber(phoneNumber) {
  const phoneRegex = /((\(\d{3}\)\s?)|(\d{3}-))?\d{3}-\d{4}/;
  return phoneRegex.test(phoneNumber);
}

// matches valid emails
export function isEmail(email) {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

/**
 * Strong password rules:
 *  • first char must be a letter
 *  • total length 4–15 chars
 *  • only letters, digits, underscore
 */
export function isStrongPassword(password) {
  const pwRegex = /^[a-zA-Z]\w{3,14}$/;
  return pwRegex.test(password);
}

// matches dates like 1/1/2025 or 12/31/1999
export function isDate(date) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return dateRegex.test(date);
}

// matches 3‑ or 6‑digit hex color codes, # optional
export function isHexColor(color) {
  const colorRegex = /^#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
  return colorRegex.test(color);
}

// ------------------------------------------------------------
// 2.  Default export so you can do `import functions from ...`
// ------------------------------------------------------------
export default {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
};
