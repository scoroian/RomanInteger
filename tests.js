test("convertIntegerToRoman - Basic Test Cases", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1: convertIntegerToRoman(1) => I");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-2: convertIntegerToRoman(3999) => MMMCMXCIX");
});

test("convertIntegerToRoman - Edge Test Cases", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-3: convertIntegerToRoman(0) => Out of range");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4: convertIntegerToRoman(4000) => Out of range");
});

test("convertIntegerToRoman - Error Test Cases", function(assert) {
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-5: convertIntegerToRoman('X') => Invalid input");
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-6: convertIntegerToRoman(-1) => Invalid input");
});

test("convertIntegerToRoman - Intermediate Test Cases", function(assert) {
  assert.propEqual(convertIntegerToRoman(500), {value: "D", message: '', result: true}, "TC-7: convertIntegerToRoman(500) => D");
  assert.propEqual(convertIntegerToRoman(2023), {value: "MMXXIII", message: '', result: true}, "TC-8: convertIntegerToRoman(2023) => MMXXIII");
});

// Pruebas para convertRomanToInteger
test("convertRomanToInteger - Basic Test Cases", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-9: convertRomanToInteger('I') => 1");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-10: convertRomanToInteger('MMMCMXCIX') => 3999");
});

test("convertRomanToInteger - Edge Test Cases", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11: convertRomanToInteger('') => Invalid roman");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12: convertRomanToInteger('MMMM') => Invalid roman");
});

test("convertRomanToInteger - Error Test Cases", function(assert) {
  assert.propEqual(convertRomanToInteger("IIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13: convertRomanToInteger('IIII') => Invalid roman");
  assert.propEqual(convertRomanToInteger("MXD"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-14: convertRomanToInteger('MXD') => Invalid roman");
});

test("convertRomanToInteger - Intermediate Test Cases", function(assert) {
  assert.propEqual(convertRomanToInteger("D"), {value: 500, message: '', result: true}, "TC-15: convertRomanToInteger('D') => 500");
  assert.propEqual(convertRomanToInteger("MMXXIII"), {value: 2023, message: '', result: true}, "TC-16: convertRomanToInteger('MMXXIII') => 2023");
});
