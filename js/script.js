$(document).ready(function() {
    $('#slider-header').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    });

    $('#slider-promo').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    });

    $('#slider-team').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: false,
        prevArrow: $('.left'),
        nextArrow: $('.right')
    });
});