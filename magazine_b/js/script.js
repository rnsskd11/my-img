$(document).ready(function () {

    function Search__init() {
        $(".search").click(function () {
            if ($(".search-on").css("display") == ("none")) {
                $(".search-on").css({
                    "display": "block"
                })
            }
        })
    }
    Search__init();

    function Section2__init() {
        $(".main-page").click(function () {
            if ($(".search-on").css("display") == ("block")) {
                $(".search-on").css({
                    'display': 'none'
                })
            }
        })
        $(".bg-F").mouseover(function () {
            $(".bg-B").css({
                'left': '-85%'
            })
        })
        $(".bg-F").mouseleave(function () {
            $(".bg-B").css({
                'left': '0px'
            })
        })
        $(".bg-J").mouseover(function () {
            $(".bg-B").css({
                'left': '-85%'
            });
            $(".bg-F").css({
                'left': '-85%'
            })
        })
        $(".bg-J").mouseleave(function () {
            $(".bg-B").css({
                'left': '0px'
            })
            $(".bg-F").css({
                'left': '0px'
            })
        })
    }
    Section2__init();

    function Section3__init() {

        $(".shop-slider").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3
        });

    }
    Section3__init();
    function Section4__init(){
        $('.b-cast-slider').slick({
            infinite: false,
        });
    }
    Section4__init();


})