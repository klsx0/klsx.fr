if ($('.pres').length != 0) {
    $(window).scroll(function(){
            $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.pres').offset().top);
    });
} else {
    $('.navbar').toggleClass('scrolled');
}