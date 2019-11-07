$(function(){
  $('#move').keydown(function(moveSquare){//Déclaration d'une fonction qui s'active quand on appuie sur une touche.
    let offset;
    let screenSize;
    screenWidth = $(window).width();//Variable qui est égale à la largeur de l'écran
    screenHeight = $(window).height();//Variable qui est égale à la hauteur de l'écran
    offset = $('#square').offset();// Variable qui correspond à la position du carré à déplacer
    if (moveSquare.which == 37) {//Condition quand on appuie sur la flèche gauche
      if (offset.left < 10) {//Condition si le carré sort de l'écran par la gauche
        $('#square').offset({left: screenWidth-50});//Changement de la position du carré vers le côté opposé de l'écran
      } else {
        $('#square').finish().animate({left: '-=10'});// Déplacement du carré de 10px vers la gauche
      }
    }
    if (moveSquare.which == 38) {//idem mais vers le haut
      if (offset.top < 10) {
        $('#square').offset({top: screenHeight-50});
      } else {
        $('#square').finish().animate({top: '-=10'});
      }
    }
    if (moveSquare.which == 39) {//idem mais vers la droite
      if (offset.left > screenWidth-60) {
        $('#square').offset({left: (0)});
      } else {
        $('#square').finish().animate({left: '+=10'});
      }
    }
    if (moveSquare.which == 40) {//idem mais vers le bas
      if (offset.top > screenHeight-60) {
        $('#square').offset({top: (0)});
      } else {
      $('#square').finish().animate({top: '+=10'});
      }
    }
  });
});
