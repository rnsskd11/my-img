$(document).ready(function () {

  function Menu__init() {
    $('.menu-i').click(function () {
      $('.menu-i,#menu-on').toggleClass('active')
    })
  }
  Menu__init();

  function Header__init() {
    $('.search-box').click(function () {
      $('.search-box>.btn-search').css('display', 'block')
      $('.search-box>span').css('display', 'none')
    })
    $('.wrap').click(function () {
      $('.search-box>.btn-search').css('display', 'none')
      $('.search-box>span').css('display', 'block')
    })
  }
  Header__init();

  function MainSlick__init() {

    $('.main-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });

  }
  MainSlick__init();

  function Winter__init() {
    $('.winter-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  Winter__init();

  function Aboutbrand__init() {
    $('.about-lookm').click(function(){
      $('.about-4brand').css('display','block')
      $('.about-lookm-img').addClass('active')
    })
    $('.about-curetty, .list-item-h-curetty').click(function(){
      $('.about-4brand').css('display','block')
      $('.about-4brand-curetty').addClass('active')
    })
    $('.about-ugly, .list-item-h-ugly').click(function(){
      $('.about-4brand').css('display','block')
      $('.about-4brand-ugly').addClass('active')
    })
    $('.about-crank, .list-item-h-crank').click(function(){
      $('.about-4brand').css('display','block')
      $('.about-4brand-crank').addClass('active')
    })
    $('.about-odd, .list-item-h-odd').click(function(){
      $('.about-4brand').css('display','block')
      $('.about-4brand-odd').addClass('active')
    })
    $('.about-4brand>.close-btn').click(function(){
      $('.about-4brand').css('display','none')
      $('.about-4brand-curetty, .about-4brand-ugly, .about-4brand-crank, .about-4brand-odd, .about-lookm-img').removeClass('active')
    })

  }
  Aboutbrand__init();

})