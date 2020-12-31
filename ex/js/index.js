$(document).ready(function () {
    function RightMenu__init() {
        $('.right-menu-icon').click(function () {
            $('.right-menu-icon>div, .right-menu-click').toggleClass('active')

        })
    }
    RightMenu__init();

    function RspList__init(){
        $(window).scroll(function(){
            $(this).scrollTop();
            if($(this).scrollTop() > 1900){
                $('.list01').css('opacity','1')
                $('.list01').css('top','0')
            }
            if($(this).scrollTop() > 2200){
                $('.list02').css('opacity','1')
                $('.list02').css('top','250px')
            }
            if($(this).scrollTop() > 2500){
                $('.list03').css('opacity','1')
                $('.list03').css('top','550px')
            }
        })


    }
    RspList__init();

})