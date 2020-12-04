$(document).ready(function () {

    function Scroll__init() {
        var lastScrollTop = 0,
            delta = 15;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (Math.abs(lastScrollTop - st) <= delta) return;
            if ((st > lastScrollTop) && (lastScrollTop > 0)) {
                $(".header").css({
                    "top": "-90px",
                    'transition': '0.5s'
                });
            } else {
                $(".header").css({
                    "top": "0"
                });
            }
            lastScrollTop = st;
        });
    }
    Scroll__init();

    function Menu__init() {
        $(window).scroll(function () {
            $(this).scrollTop();
        })
        $('.gnb-item1').click(function () {
            $('body,html').animate({ scrollTop:1000})
        })
        $('.gnb-item2').click(function () {
            $('body,html').animate({ scrollTop:3200})
        })
        $('.gnb-item3').click(function () {
            $('body,html').animate({ scrollTop:4500})
        })
    }
    Menu__init();

    function Section01__init() {
        $(window).scroll(function () {
            $(this).scrollTop();
            if ($(this).scrollTop() > 120) {
                $('.left-line').css({
                    'top': '150px',
                    opacity: '1'
                })
            } else {
                $('.left-line').css({
                    'top': '400px',
                    opacity: '0'
                })
            }
            if ($(this).scrollTop() > 400) {
                $('.story-txt').css({
                    'top': '220px',
                    opacity: '1'
                })
                $('.right-line').css({
                    'bottom': '150px',
                    opacity: '1'
                })
                $('.story-img-box').css({
                    'bottom': '150px',
                    opacity: '1'
                })
            } else {
                $('.story-txt').css({
                    'top': '500px',
                    opacity: '0'
                })
                $('.right-line').css({
                    'bottom': '-100px',
                    opacity: '0'
                })
                $('.story-img-box').css({
                    'bottom': '-400px',
                    opacity: '0'
                })
            }
            if ($(this).scrollTop() > 2200) {
                $('.title-store').css({
                    'top': '170px',
                    opacity: '1'
                })
            } else {
                $('.title-store').css({
                    'top': '400px',
                    opacity: '0'
                })
            }
        })
    }
    Section01__init();

    function Section03__init() {
        $('.beer1').click(function () {
            $('.beer1>.beer-txt3, .beer1, .beer1>.beer-line, .beer1>.beer-plus>.plus2, .beer1>.beer-opacity').toggleClass('active')
        })
        $('.beer2').click(function () {
            $('.beer2>.beer-txt3, .beer2, .beer2>.beer-line, .beer2>.beer-plus>.plus2, .beer2>.beer-opacity').toggleClass('active')
        })
        $('.beer3').click(function () {
            $('.beer3>.beer-txt3, .beer3, .beer3>.beer-line, .beer3>.beer-plus>.plus2, .beer3>.beer-opacity').toggleClass('active')
        })
        $('.beer4').click(function () {
            $('.beer4>.beer-txt3, .beer4, .beer4>.beer-line, .beer4>.beer-plus>.plus2, .beer4>.beer-opacity').toggleClass('active')
        })
        $('.beer5').click(function () {
            $('.beer5>.beer-txt3, .beer5, .beer5>.beer-line, .beer5>.beer-plus>.plus2, .beer5>.beer-opacity').toggleClass('active')
        })

    }
    Section03__init();

    function Section04__inti() {
        $('.insta-slider').slick({
            infinite: true,
            slidesToShow: 3.65,
            slidesToScroll: 2,
            centerMode: true,
            arrows: false
        });
    }
    Section04__inti();
})