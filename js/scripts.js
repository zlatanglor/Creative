$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        // autoplayTimeout:4000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    $('.burger').click(function() {
        $('.burger').toggleClass('burger_active');
    });
});
// .nav-bar