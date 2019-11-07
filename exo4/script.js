$(function(){//Attend que le document soit charger avant d'utiliser le fichier js.
  let sizeSquare = 10;//Déclaration d'une variable
  $('#sizeButton').click(function(){
    if (sizeSquare == 100) {//Si la hauteur du carré est = à 100px, il retombe à 10px
      sizeSquare = 10;
    }else {//Sinon il augmente de 10px
      sizeSquare += 10;
    }
    $('div').height(sizeSquare + 'px');//Change la valeur de la hauteur du carré.
  });
  $('#greenButton').click(function(){
    $('div').css('background-color','green');//Change la couleur du carré en vert
  });
  $('#originColor').click(function(){
    $('div').css('background-color','black');//Change la couleur du carré en noir
  });
  $('#hideButton').click(function(){
    $('div').hide();//Cache le carré
  });
  $('#showButton').click(function(){
    $('div').show();//Montre le carré
  });
});
