var vowels = ['a', 'e', 'i', 'o', 'u'];
var ay = ['ay']
var qu = ['qu']

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

  //
  // else if word = word.substring(1) {
  //   return (word.concat())

  // }


};
//       return (word.concat(ay));
