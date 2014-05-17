$(document).ready(function(){
  if ($(window).width() <= "640") {
  $('#section-links').removeClass("section-links");
  $("#section-links").addClass("menu-button");
}
  $('a[href*=#]').click(function() {
    if ($(window).width() <= "640") {
    $("#section-links").toggleClass("menu-display");
    $("#section-links").toggleClass("menu-button");
  }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

  $(window).resize(function() {
    if ($(".image img").css("width") == $(window).width().toString() + "px") {
      $(".description").height($(".image img").height() - 10);
      console.log("resized");
    }
  if ($(window).width() <= "640") {
    $('#section-links').removeClass("section-links");
    $("#section-links").addClass("menu-button");
  }
  if ($(window).width() > "640") {
    $("#section-links").removeClass("menu-button");
    $('#section-links').addClass("section-links");
  }
  });
  $("ul").click(function() {
    $("#section-links").toggleClass("menu-display");
    $("#section-links").toggleClass("menu-button");
  });
});