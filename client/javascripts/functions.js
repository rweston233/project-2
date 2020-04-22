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
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
