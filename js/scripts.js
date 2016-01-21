var vowels = ['a', 'e', 'i', 'o', 'u'];
var qu = "qu";
var ay = "ay";

var split = function(phrase) {
  var res = phrase.split(" ");
    return res;
};

var vowelCheck = function(word) {

    if (vowels.includes(word[0])) {
      return true;
    }
    else {
      return false;
    }
};

var translate = function(word) {
  if (vowels.includes(word[0])) {
    return (word.concat(ay));

  // } else if (!vowels.includes(word[0])){
  //   return (word.substring(1,word.length) + word.substring(0,1) + ay);
  // } else if (vowels.includes(word(qu))){
  //   return (word.substring(,word.length) + word.substring(0,1) + ay);

  } else if (vowels.includes(word[1])){
    return (word.substring(1,word.length) + word.substring(0,1) + ay);
  } else if (vowels.includes(word[2])){
    return (word.substring(2,word.length) + word.substring(0,2) + ay);
  } else if (vowels.includes(word[3])){
    return (word.substring(3,word.length) + word.substring(0,3) + ay);
  } else if (vowels.includes(word[4])){
    return (word.substring(4,word.length) + word.substring(0,4) + ay);
  } else {
    return false;
  };
};

var movequ = function(word) {
    if (qu.includes(word[0]) && qu.includes(word[1])){
    return (word.substring(2,word.length) + word[0] + word[1] + ay);

  } else if (qu.includes(word[1]) && qu.includes(word[2])){
    return (word.substring(3,word.length) + word[0] + word[1] + word[2] + ay);

  } else {
      return "abcd";
    };

 };
