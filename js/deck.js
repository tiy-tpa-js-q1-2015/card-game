var Deck = (function(){

  function Deck() {
    this.cards = this.makeCards();
  }

  Deck.prototype = {

    makeCards: function() {
      var cards, totalFaces, uniqFaces;

      // Generate the 13 uniq card faces
      uniqFaces = "23456789AJQK".split("");
      uniqFaces.push("10");

      // get all the faces for a deck (uniq * 4)
      totalFaces = [];
      _.each(_.range(1,5), function() {
        totalFaces = totalFaces.concat(uniqFaces);
      });

      // map the faces to card instances
      cards = _.map(totalFaces, function(face) {
        return new Card(face);
      });

      return cards;
    }

  }

  return Deck;

})();
