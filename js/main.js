var cardFaces = function() {
  var faces = "23456789AJQK".split("");
  faces.push("10");

  var deck = [];

  _.each(_.range(1,5), function() {
    deck = deck.concat(faces);
  });

  return deck;
};

var cardsLeft = function() {
  return $(".cards").find(".card").not(".matched").length;
}

var updateStatus = function() {
  var matches = cardsLeft();
  if (matches === 0) {
    $(".status").html("You won!");
  } else {
    $(".status .count").text( matches/2 );
  }
}


$(function() {

  var faces = _.shuffle( cardFaces() );
  _.each(faces, function(face) {
    var card = $("<div data-face='"+ face +"' class='card back'>" + face + "</div>");
    $(".cards").append(card);
  });

  updateStatus();

  var firstCard;
  var waiting = false;

  $(".cards").on("click", ".card", function(e) {

    var card = $(e.currentTarget);

    if( card.hasClass("front") ) {
      // if the card they clicked on is already
      // flipped foward then return this function
      // to prevent doing any of the steps below.
      return;
    }

    if (waiting) {
      // if we are waiting don't do anything.
      return;
    }

    card.addClass("front").removeClass("back");

    if( firstCard ) {
      if (firstCard.data("face") === card.data("face")) {
        card.addClass("matched");
        firstCard.addClass("matched");
        firstCard = null;
        updateStatus();
      } else {
        waiting = true;
        setTimeout(function(){
          card.addClass("back").removeClass("front");
          firstCard.addClass("back").removeClass("front");
          firstCard = null;
          waiting = false;
        }, 1000);


      }
    }
    else {
      firstCard = card;
    }

  });

});
