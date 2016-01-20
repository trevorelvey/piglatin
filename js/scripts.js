var vowels = ['a', 'e', 'i', 'o', 'u'];
var ay = ['ay']

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

  } else {
    return (word.concat(word[0]).concat(ay));
  }

  //
  // else if word = word.substring(1) {
  //   return (word.concat())

  // }


};
//       return (word.concat(ay));
