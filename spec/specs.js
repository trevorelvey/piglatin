describe('piglatin', function() {
  it("is a word beginning with a vowel", function() {
   expect(piglatin("apple")).to.equal(true)
 });

 it("is a word beginning with a consonant", function() {
   expect(piglatin("table")).to.equal(false)
 });

});
