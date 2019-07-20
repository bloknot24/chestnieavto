$( function() {
    $( "#accordion" ).accordion();
});
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.hamburg__menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);