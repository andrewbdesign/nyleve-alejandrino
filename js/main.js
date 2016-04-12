$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $("#menu-case").fadeIn();
    } else {
        $("#menu-case").fadeOut();
    }

});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if ((wScroll) > $(".responsive-section").offset().top - ($(window).height() / 2))
    $(".responsive-section").each(function(){
      $(".responsive-section .main-container .responsive-mac").addClass("is-showing");
    });

});
