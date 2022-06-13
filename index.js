function isPalindrome(str) {
  let l = str.length;
  for (let i = 0; i < l / 2; i++) {
    if (str[i] !== str[l - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  function takes a word as the argument and returns true 
  if the word is a palindrome 
*/

/*
 1. First need to consider any non one word strings. => can't get to work
 2.  .reverse() only works with arrays so need to turn my string into an array
 3. reverse the array
 4. put it back together
 5. compare the intial string to the reversed one
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
