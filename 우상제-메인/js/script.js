$(function(){
    setInterval(function(){

        if($(window).scrollTop() <=300){
            $(".js-icon_triangle").animate({opacity:0,bottom:-30});
        }else{
            $(".js-icon_triangle").animate({opacity:1,bottom:30},800);
        }
    },1000);

    // 스크롤 탑
    $('.js-icon_triangle').click(function(){
        $('html, body').animate({scrollTop:0},'3000');
        return false;
    });
});


document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
        addHeight: true
    });
  });