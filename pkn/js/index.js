$(document).ready(function () {

    function PjList__init() {

        $('.pj_hover>a').click(function () {
            $('.pj_list').toggleClass('active')
        })
    }
    PjList__init();

    function Flower__init() {
        $('.flower').click(function(){
            $('.main_left').toggleClass('active')
            $('.main_center').toggleClass('active')

        })
    }
    Flower__init();



})