describe('vowelCheck', function() {
  it("is a word beginning with a vowel", function() {
   expect(vowelCheck("apple")).to.equal(true)
   });

   it("is a word beginning with a consonant", function() {
     expect(vowelCheck("table")).to.equal(false)
   });

  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    expect(translate("apple")).to.equal("appleay")
  });

  it("moves the first consonant to the end of the word and adds 'ay'", function() {
    expect(translate("table")).to.equal("abletay")
  });

  it("moves the first and second consonant to the end of the word and adds 'ay'", function() {
    expect(translate("stick")).to.equal("ickstay")
  });
  it("moves the first, second, and third consonants to the end of the word and adds 'ay'", function() {
    expect(translate("string")).to.equal("ingstray")
  });
  it("moves the first, second, third, and fourth consonants to the end of the word and adds 'ay'", function() {
    expect(translate("tttta")).to.equal("attttay")
  });
  it("moves the consonants up to and including 'qu' to the end of the word and adds 'ay'", function(){
    expect(translate("squeal")).to.equal("ealsquay")
  });
});
//
//
// potato
// subString[1,string.length] + subString[0,1] + "ay"
//
// dream
// subString[2,string.length] + subSTring[0,2] + "ay"
