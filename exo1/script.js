$(function(){
  let numberOfClicks = 0;
  $('#clickMe').click(function(){
    numberOfClicks++;
    $('#text').val(numberOfClicks);
  });
});
