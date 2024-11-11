$(document).ready(function(){ // 실행틀 시작

  new fullpage('#fullpage', {
    // options here
    responsiveWidth: 1024,
  });
  
  /*======= 사이트맵 ======= */

  /* PC */
  $(".all-wrap").hide();

  $(".btn-all").click(function(){
    $("header").fadeOut();
    $(".all-wrap").fadeIn();
    $(".quick-menu").fadeOut();
  });

  $(".all-head span").click(function(){
    $(".all-wrap").fadeOut();
    $("header").fadeIn();
    $(".quick-menu").fadeIn();
  });

  /* mobile */
  $(".m-all-wrap").hide();

  $(".btn-m-all").click(function(){
    $("header").hide();
    $(".m-all-wrap").fadeIn();
  })


  $(".m-all-depth2").hide();

  $(".m-all-gnb > li").click(function(){
    $(this).children(".m-all-depth2").stop().slideDown();
    $(this).siblings().children(".m-all-depth2").slideUp();
    $(this).children(".m-all-gnb > li > a").addClass("active");
    $(this).siblings().children(".m-all-gnb > li > a").removeClass("active");
  });


  $(".m-all-head span").click(function(){
    $("header").fadeIn();
    $(".m-all-wrap").fadeOut();
    $(".m-all-depth2").slideUp();
    $(".m-all-gnb > li > a").removeClass("active");
  });





  /*======= header ======= */

  /* PC */
  $(".c-logo").hide();
  $(".depth2").hide();
  $(".depth2-bg").hide();

  $(".gnb > li").mouseenter(function(){
    $(".w-logo").hide();
    $(".c-logo").stop().fadeIn();

    $(".depth2-bg").stop().slideDown();
    $(".depth2").stop().slideDown();
    $(".btn-all , .gnb > li > a").addClass("active").fadeIn();
    $(this).children(".gnb > li > a").addClass("change");
    $(this).siblings().children(".gnb > li > a").removeClass("change");
  });

  $(".gnb-wrap").mouseleave(function(){
    $(".c-logo").hide();
    $(".w-logo").stop().fadeIn();

    $(".depth2-bg").stop().slideUp();
    $(".depth2").stop().slideUp();
    $(".btn-all , .gnb > li > a").removeClass("active").fadeIn();
    $(".gnb > li > a").removeClass("change");
  });


}); // 실행틀 끝