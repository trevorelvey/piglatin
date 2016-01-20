var vowels = ['a', 'e', 'i', 'o', 'u'];
var ay = ['ay']

var piglatin = function(word) {

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
  }



};
//       return (word.concat(ay));
