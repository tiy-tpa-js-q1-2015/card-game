var Card = (function(){

  function Card(face) {
    this.face = face;
    this.$el = this.generateEl(face);
  }

  Card.prototype = {

    generateEl: function(face) {
      // declareing our variable
      var $el;

      // we are creating an empty div within jQuery
      $el = $("<div/>");
      // we are setting the data to face
      $el.data("face", face);
      // we are adding the classes `card` and `back`
      $el.addClass("card back");
      // we are setting the text
      $el.text(face);

      return $el;
    },

    reveal: function() {
      this.$el.removeClass("back").addClass("front");
    },

    conceal: function() {
      this.$el.removeClass("front").addClass("back");
    },

    matched: function() {
      this.$el.addClass("matched");
    },

    // var card1 = new Card("A");
    // var card2 = new Card("J");
    // var card3 = new Card("A");

    // card1.matches(card2); // false
    // card1.matches(card3); // true
    // card1.matches(card1); // false

    matches: function(card) {
      // return false if they are the same card
      if (card === this) {
        return false;
      }
      // return whether they have matching faces
      return this.face === card.face;
    },

    render: function() {
      return this.$el;
    }

  }

  return Card;

})();
