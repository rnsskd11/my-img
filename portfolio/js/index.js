$(document).ready(function(){
    function RightMenu__init(){
        $('.right-menu-icon').click(function(){
            $('.right-menu-icon>div, .right-menu-click').toggleClass('active')

        })
    }
    RightMenu__init();

    function Slick__init(){
        $('.slider-wrap').slick({
            infinite: true,
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
          });
              
    }
    Slick__init();

})