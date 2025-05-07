  import functions from '../code-to-unit-test/unit-test-me.js';

// 1. Phone number ( (123) 456-7890  OR  123-456-7890 )
export function isPhoneNumber(str) {
  const re = /((\(\d{3}\)\s?)|(\d{3}-))?\d{3}-\d{4}$/;
  return re.test(str);
}

// 2. Email ( basic user@domain.tld )
export function isEmail(str) {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(str);
}

// 3. Strong password: 1st char letter, 4‑15 chars, letters/digits/_
export function isStrongPassword(str) {
  const re = /^[A-Za-z]\w{3,14}$/;
  return re.test(str);
}

// 4. Date MM/DD/YYYY or M/D/YYYY
export function isDate(str) {
  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return re.test(str);
}

// 5. Hex color #RGB, RGB, #RRGGBB, or RRGGBB
export function isHexColor(str) {
  const re = /^#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
  return re.test(str);
}

// default export (so your test can do `import functions from ...`)
export default {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
};
