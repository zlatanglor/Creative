$(document).ready(function(){
    // owl carusel
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
    // burger menu
    $('.burger').click(function() {
        $('.burger').toggleClass('burger_active');
    });
// dialog
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        width: 648,
        height: 495,
        modal: true
        // title: false
    });
    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });

});
