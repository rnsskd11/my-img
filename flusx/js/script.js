$(document).ready(function(){
    $(".flow2-ani>ul>li>a").mouseover(function(){
        var bg_data = $(this).attr("data-flow2-bg");
        $(".flow2-ani").addClass("paused")
        $(".flow2-bg").addClass(bg_data)
    })

    $(".flow2-ani>ul>li>a").mouseleave(function(){
        var bg_data = $(this).attr("data-flow2-bg");
        $(".flow2-ani").removeClass("paused")
        $(".flow2-bg").removeClass(bg_data)
    })




})

