
//pop-up 1
$('.open-modal-consist').on('click', function() {
  $('.conclusion__consist').fadeIn();
});

$('.btn-close').on('click', function() {
  $('.conclusion__consist').fadeOut();
});

//Разварачивающиеся блоки
$('.conclusion__consist__block h4').on('click', function() {
  hidden($(this));
});

function hidden(crr) {
  $('.conclusion__hidden').slideUp();
  if (crr.hasClass('active')) {  
    $('.conclusion__consist__block h4').removeClass('active');
    return false;
  }
  $('.conclusion__consist__block h4').removeClass('active');
  crr.find('.conclusion__hidden').slideDown();
  crr.addClass('active');
}


//pop-up 2
$('.head__block__text h2').on('click', function() {
  $('.pop-up').fadeIn();
});

$('.btn-close').on('click', function() {
  $('.pop-up').fadeOut();
});



//pop-up 3
$('.head__block__text span').on('click', function() {
  $('.pop-up-3').fadeIn();
});
$('.submit').on('click', function() {
  $('.form').fadeOut();
  $('.pop-up-3__block__result').fadeIn();
});
$('.submit__home').on('click', function() {
  $('.pop-up-3').fadeOut();
});
