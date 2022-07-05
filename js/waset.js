    $('.owl-slider').owlCarousel({
        loop: true,
        nav: false,
        navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
        }
    })



    jQuery(document).ready(function() {
        jQuery("#video").click(function() {
            if (jQuery("#video").get(0).paused) {
                jQuery("#video").trigger('play');
                jQuery(".play").fadeOut(500);
            } else {
                jQuery("#video").trigger('pause');
                jQuery(".play").fadeIn(500);
            }
        });
    });
    

        $(document).ready(function(){
            $(".click-1").click(function(){
            $(".txt-1").toggleClass("show");
            });
        });
        $(document).ready(function(){
            $(".click-2").click(function(){
            $(".txt-2").toggleClass("show");
            });
        });
        $(document).ready(function(){
            $(".click-3").click(function(){
            $(".txt-3").toggleClass("show");
            });
        });
        $(document).ready(function(){
            $(".click-4").click(function(){
            $(".txt-4").toggleClass("show");
            });
        });
       

        $('.owl-theme').owlCarousel({
            loop:true,
            margin:10,
            dots: true,
            // nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        var owl = $('.owl-services');

        owl.owlCarousel({
            loop:false,
            margin:0,
            dots: false,
            autoplay: false,
            URLhashListener:true,
            startPosition: 'slide1',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
        owl.on('changed.owl.carousel', function(event) {
            location.hash = 'slide' + event.property.value;
          })

        var $backToTop = $(".back-to-top");
        $backToTop.hide();
        
        
        $(window).on('scroll', function() {
          if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn();
          } else {
            $backToTop.fadeOut();
          }
        });
        
        $backToTop.on('click', function(e) {
          $("html, body").animate({scrollTop: 0}, 500);
        });
        