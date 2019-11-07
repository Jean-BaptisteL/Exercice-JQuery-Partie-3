$(function(){
  $('#clickMore').click(function(){
    let valNumber = parseInt($('#text').val())+1;
    $('#text').val(valNumber);
  });
  $('#clickLess').click(function(){
    let valNumber = $('#text').val()-1;
    $('#text').val(valNumber);
  });
});
