$(function() {

  window.game = new Game();

  $(".cards").html( game.render() );

});
