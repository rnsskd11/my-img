$(document).ready(function(){
    
    $(".search").click(function(){
        if($(".search-on").css("display")==("none")){
            $(".search-on").css({"display":"block"})
        } 
        
    })
    $(".main-page").click(function(){
        if($(".search-on").css("display")==("block")){
            $(".search-on").css({'display':'none'})
        }
    })
    $(".bg-F").mouseover(function(){
        $(".bg-B").css({'left':'-85%'})
    })
    $(".bg-F").mouseleave(function(){
        $(".bg-B").css({'left':'0px'})
    })
    $(".bg-J").mouseover(function(){
        $(".bg-B").css({'left':'-85%'});
        $(".bg-F").css({'left':'-85%'})
    })
    $(".bg-J").mouseleave(function(){
        $(".bg-B").css({'left':'0px'})
        $(".bg-F").css({'left':'0px'})
    })

    // --------슬릭 슬라이더---------
    $('.shop-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });




})