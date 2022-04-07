let palindromeString = (string) => {
  let arr = string.toLowerCase();

  let reverseString = arr.split("").reverse().join("");

  if (arr === reverseString) {
    alert("given string is palindrome");
  } else {
    alert("sd");
  }
};

palindromeString("aa");
