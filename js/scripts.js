var piglatin = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var ay = ['ay']
    if (vowels.includes(word[0])) {
      return (word.concat(ay));
    }
    else {
      return false;
    }
};



// vowels.forEach(function(vowel) {
//   if (word.charAt(0) === vowels) {
