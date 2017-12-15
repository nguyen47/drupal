
function setRateElement(objects, x, y) {
    var w = x || 5;
    var h = y || 3;
    // objects.height(objects.width() * h / w);
    objects.each(function () {
        $(this).height($(this).width() * h / w);
    });
}


(function ($) {

    $(document).ready(function () {

        // RESIZE
        var logo = $( '.factoria-temp .logo-item > div' ).width();
        $( '.factoria-temp .logo-item > div' ).height(logo);
        
        setRateElement($('.imgResize-9-5'), 9, 5);
        setRateElement($('.imgResize-2-1'), 2, 1);
        setRateElement($('.imgResize-1-1'), 1, 1);

        var heightPost = $('.post-lists .post-item .imgResize-1-1').height();
        $('.post-lists .item-first .post-bg').height(heightPost);

        //Home Banner Slider
        $('.slider-home').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 750,
            items: 1,
            nav: true,
            navText: ['<div class="btn-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="btn-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
            dots: false
        });

        //Journals Slider
        $('.journals-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 500,
            center: true,
            nav: true,
            navText: ['<div class="btn-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="btn-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });

        if ($(window).width() > 991) {
            $('.journals-slider .owl-item.center').prev().addClass('prevslide');
            $('.journals-slider .owl-item.center').next().addClass('nextslide');
            $('.journals-slider').on('translated.owl.carousel', function () {
                $('.journals-slider .owl-item').removeClass('prevslide').removeClass('nextslide');
                $('.journals-slider .owl-item.center').prev().addClass('prevslide');
                $('.journals-slider .owl-item.center').next().addClass('nextslide');
            });
        }

        //Revistas Slider
        $('.revistas-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 500,
            center: true,
            nav: true,
            navText: ['<div class="btn-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="btn-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1199: {
                    items: 6
                }
            }
        });
    });
    $(window).resize(function () {
// RESIZE
        setRateElement($('.imgResize-9-5'), 9, 5);
        setRateElement($('.imgResize-2-1'), 2, 1);
        setRateElement($('.imgResize-1-1'), 1, 1);
        var heightPost = $('.post-lists .post-item .imgResize-1-1').height();
        $('.post-lists .item-first .post-bg').height(heightPost);
    });
    $(window).bind('scroll', function (e) {

    });
})(jQuery);