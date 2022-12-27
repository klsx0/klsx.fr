// Navbar color on change

if ($('.pres').length != 0) {
    $(window).scroll(function(){
            $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.pres').offset().top);
    });
} else {
    $('.navbar').toggleClass('scrolled');
}

// Select cats on comp. pages

if ($('.selector').length != 0) {
    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            $(".filter-button").removeClass("active")
            $(this).addClass("active");
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });

    });
}

// Scroll top
// ===== Scroll to Top ====
var btn = $('.top-link');
btn.hide()

// If the page is scrolled more than 300px,
// show the scroll-to-top button
// Otherwise hide the button
$(window).scroll(function() {
 if ($(window).scrollTop() > 300) {
 btn.show();
 } else {
      btn.hide();
 }
});

btn.on('click', function(e) {
 e.preventDefault();
 $('html, body').animate({scrollTop:0}, '300');
});