$(document).ready(function(){ // 실행틀 시작

  
  /*======= research =======*/
  // tab
  $(".resrh-tab-con li").hide();
  $(".resrh-tab-btn li").eq(0).addClass("active");
  $(".resrh-tab-con li").eq(0).show();

  
  $(".resrh-tab-btn li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var indexNum = $(this).index();
    $(".resrh-tab-con li").eq(indexNum).fadeIn().siblings().hide();
  });

  // marquee
  // $(".loop-container").addClass("marquee");
  $(".btn-play").hide();

  $(".btn-pause").click(function(){
    $(".loop-container").addClass("pause");
    $(".btn-pause").hide();
    $(".btn-play").show();
  });

  $(".btn-play").click(function(){
    $(".loop-container").removeClass("pause");
    $(".btn-pause").show();
    $(".btn-play").hide();
  });

  $(".loop-container").mouseenter(function(){
    $(".loop-container").addClass("pause");
  });

  $(".loop-container").mouseleave(function(){
    $(".loop-container").removeClass("pause");
  });





  /*======= product =======*/
  /* PC */
  $(".prd-tab-con > li").hide();
  $(".prd-tab-btn li").eq(0).addClass("active");
  $(".prd-tab-con > li").eq(0).show();
  
  $(".prd-tab-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".prd-tab-con > li").eq(indexNum).fadeIn().siblings().hide();
  });

  /* mobile */


  if($(window).width() < 1200) {
    var prd = new Swiper(".prd", {
      slidesPerView: 3,
      spaceBetween: 10,
    });
  }

  if($(window).width() < 768) {
    var prd = new Swiper(".prd", {
      slidesPerView: 1.5,
      spaceBetween: 10,
    });
  }

  $(window).on('resize', function () {
    location.reload();
  });

  



  /*======= youtube =======*/
  var ytBox = new Swiper(".ytBox", {
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    slidesPerView: 1.5,
    spaceBetween: 10,

    breakpoints: {
      
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    }
    
  });
  



  
}); // 실행틀 끝