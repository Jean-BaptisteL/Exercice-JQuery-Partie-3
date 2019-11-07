$(function(){
  let randomNumber = Math.floor((Math.random() * 100) + 1);//Math.random() donne un nombre aléatoire entre 0 et 1.
  let numberOfClicks = 0;
  $('#button').click(function(){
    let number = document.getElementById('numberMyst').value;
    if (isNaN(number) || number > 100 || number < 0) {
      $('#text').html('Veuillez entrer un nombre entre 0 et 100');
    } else if (number < randomNumber) {
      numberOfClicks++;
      $('#result').html('Plus');
      $('#text').html('');
    } else if (number > randomNumber){
      numberOfClicks++;
      $('#result').html('Moins');
      $('#text').html('');
    } else{
      numberOfClicks++;
      $('#result').html('Correcte !');
      $('#text').html('Vous avez fait ' + numberOfClicks + ' essais !');
    }
  });
});
