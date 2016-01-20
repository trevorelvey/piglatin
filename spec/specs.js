describe('piglatin', function() {
  it("is a word beginning with a vowel", function() {
   expect(piglatin("apple")).to.equal(true)
 });

 it("is a word beginning with a consonant", function() {
   expect(piglatin("table")).to.equal(false)
 });

it("adds 'ay' to the end of a word that starts with a vowel", function() {
  expect(translate("apple")).to.equal("appleay")
});

 // it("moves the first consonant to the end of the word and adds 'ay'")
});
