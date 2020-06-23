// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  // Your code here
  if (str.length >= index && typeof str === 'string') {
    return str.charAt(index);
  } else {
    return undefined;
  }
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex(44, 1), undefined);
expect(getLetterAtIndex(Infinity, 2), undefined);
expect(getLetterAtIndex('', 1), undefined);
expect(getLetterAtIndex('bacon', 10), undefined);
expect(getLetterAtIndex('123456', 5), '6');
expect(getLetterAtIndex('nothing', ''), 'n');

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
