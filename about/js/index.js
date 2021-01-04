$(document).ready(function () {

    function RightMenu__init() {
        $('.right-menu-icon').click(function () {
            $('.right-menu-icon>div, .right-menu-click').toggleClass('active')

        })
    }
    RightMenu__init();

    function Line01__init() {
        $(window).scroll(function () {
            $(this).scrollTop();
            if ($(this).scrollTop() > $('.main-img').height() / 4) {
                $('.main-img>.line01').css('width', '48.7%')
            } else {
                $('.main-img>.line01').css('width', '0')
            }
            if ($(this).scrollTop() > $('.main-img').height() / 1.6) {
                $('.main-img>.line02').css('width', '35%')
                $('.main-img>.line03').css('width', '32.3%')
                $('.main-img>.line04').css('width', '26%')
                $('.main-img>.line05').css('width', '16.5%')

            }
            else {
                $('.main-img>.line02, .main-img>.line03, .main-img>.line04, .main-img>.line05').css('width','0')
            }

        })
    }
    Line01__init();





})