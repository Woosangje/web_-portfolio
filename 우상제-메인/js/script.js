$(function(){
    setInterval(function(){

        if($(window).scrollTop() <=300){
            $(".icon_triangle").animate({opacity:0,bottom:-30});
        }else{
            $(".icon_triangle").animate({opacity:1,bottom:30},800);
        }
    },1000);

    // 스크롤 탑
    $('.icon_triangle').click(function(){
        $('html, body').animate({scrollTop:0},'3000');
        return false;
    });
});


document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
        addHeight: true
    });
  });