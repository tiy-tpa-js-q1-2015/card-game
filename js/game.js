var Game = (function() {

  function Game() {
    this.$el = $("<div class='game'></div>");
    this.deck = new Deck();
    this.addListeners();
    this.firstCard;
    this.waiting = false;
  }

  Game.prototype = {

    addListeners: function() {

      var game = this;

      this.$el.on("click", ".card", function(e){

        var $clicked = $(e.currentTarget);
        var card = $clicked.data("card");

        if (game.waiting) {
          return;
        }

        card.reveal();

        if (game.firstCard) {

          if (game.firstCard.matches(card)) {

            card.matched();
            game.firstCard.matched();
            game.firstCard = null;

          } else {

            game.waiting = true;
            setTimeout(function() {
              card.conceal();
              game.firstCard.conceal();
              game.firstCard = null;
              game.waiting = false;
            }, 1000);

          }

        } else {

          game.firstCard = card;

        }

      });
    },

    render: function() {
      this.$el.html( this.deck.render() );
      return this.$el;
    }

  };

  return Game;

})();
