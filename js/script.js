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

let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav.medium");

burger.addEventListener("click", function(e) {

    if(burger.classList.contains("active")) {
        burger.classList.remove("active");
    } else {
        burger.classList.add("active");
    }

    if(nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }
})
