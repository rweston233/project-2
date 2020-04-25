// jshint esversion: 6

//Req. 3-a

//easy way
let revWords1 = (str) => {
    let char = str.split(" ");
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result = str[i] + result;
    }
    return result;
}
/*
//hard way
let revWords1 = (str) => {
    let words = str.split(" ");
    let temp;
    for (let i = 0; i < words.length; i++) {
        temp = "";
        for (let j = words[i].length-1; j >= 0; j--) {
            temp += words[i][j];
        }
        words[i] = temp;
    }
    return words.join(" ");
}
*/

//Req. 3-b
let revWords2 = (str) => {
    let arr = str.split('');
    let result = "";

    arr.forEach((char) => {
      result = char + result;
    });
    return result;
};

//Req. 3-c
let revWords3 = (str) => {
    let result = "";

  for(char of str){
      result = char + result;
    };
    return result;
};

//extra credit code
let containsDuplicates = (s) => {
  let charCount = new Array(26).fill(0);
  let charArray = Array.from(s.toUpperCase());
  for (let i in charArray) {
    if (charArray[i] != " ") {
      let index = s.toUpperCase().charCodeAt(i) - 65;

      if (charCount[index] == 0) {
        charCount[index] = charArray[i];
      } else {
        return true;
      }
    }
  }
  return false;
};
