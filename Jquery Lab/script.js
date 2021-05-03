$(document).ready(function () {
  
    $('.dropdown').mouseenter(function () {
      $(this).find('.dropdown-menu').show('slow');
    })
    $('.dropdown').mouseleave(function () {
      $(this).find('.dropdown-menu').hide('slow');
    })
  })
