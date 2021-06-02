$(function(){
	
	$(window).resize(function(){
					var w = $(window).width();
					var h = $(window).height();
					$("body").css({ width:w, height:h });
				}).resize();
	
	$(".category1 li:nth-child(2)").click(function(){
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu1").toggle();
	$(".submenu2").hide();
		return false;
	});
	
	$(".category1 li:nth-child(3)").click(function(){
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu2").toggle();
	$(".submenu1").hide();
	return false;
	});
	
	$(".category1 li:nth-child(4)").click(function(){
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu1").toggle();
	$(".submenu2").hide();
	return false;
	});
	
	$(".category1 li:nth-child(5)").click(function(){	
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu2").toggle();
	$(".submenu1").hide();
return false;
	});
	
	$(".category1 li:nth-child(6)").click(function(){
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu1").toggle();
	$(".submenu2").hide();
return false;
	});
	
	$(".category1 li:nth-child(7)").click(function(){
		$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu2").toggle();
	$(".submenu1").hide();
	return false;
	});
	
	$(".category1 li:nth-child(8)").click(function(){
		$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu1").toggle();
	$(".submenu2").hide();
	return false;
	});
	
	$(".category1 li:nth-child(9)").click(function(){
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu2").toggle();
	$(".submenu1").hide();
	return false;

	});

	$(".category1 li:nth-child(10)").click(function(){
	$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu2").toggle();
	$(".submenu1").hide();
	return false;

	});
	
	$(".category1 li:nth-child(11)").click(function(){
		$(this).siblings().removeClass("whitecolor");
	$(this).toggleClass("whitecolor");
	$(".submenu1").toggle();
	$(".submenu2").hide();
	return false;

	});

	
	/*xbtn*/
	$(".submenu1 .xbtn").click(function(){
	$(".category1 li").removeClass("whitecolor");
	$(".submenu1").hide();
	return false;

	});
	$(".submenu2 .xbtn").click(function(){
	$(".category1 li").removeClass("whitecolor");
	$(".submenu2").hide();
	return false;

	});
	
	///////////////////////스타일 윈도우
	var n=0;
			    $('.leftbtn1').click(function(){
				   n--;				   
				 
				   if(n==-1){ 
					  $('.stylewindow3 .imgwrap').css({left:-310*3});
					  n=2;
				   }
				 $('.stylewindow3 .imgwrap').stop().animate({left:-310*n}); 
	  
				return false;
			    });
				//<<<<<<<<<<<<<
				   $('.rightbtn1').click(function(){
				   n++;
				  
				   if(n==4){
					  $('.stylewindow3 .imgwrap').css({left:0});
					  n=1;
				   }
				   $('.stylewindow3 .imgwrap').stop().animate({left:-310*n});		
				return false;
			    });
				
				/////////////////////////////오른쪽버튼
				   $('.leftbtn2').click(function(){
				   n--;				   
				 
				   if(n==-1){ 
					  $('.slider_21 .imgwrap').css({left:-310*2});
					  n=1;
				   }
				 $('.slider_21 .imgwrap').stop().animate({left:-310*n}); 
	  
				return false;
			    });
				//<<<<<<<<<<<<<
				   $('.rightbtn2').click(function(){
				   n++;
				  
				   if(n==3){
					  $('.slider_21 .imgwrap').css({left:0});
					  n=1;
				   }
				   $('.slider_21 .imgwrap').stop().animate({left:-310*n});		
				return false;
			    });
	
	n3=1;
	//주요쇼핑몰
	//왼쪽버튼
	$(".shopping_mall .aside .leftbtn3").click(function(){
	n3--;
	if(n3==0){
	n3=3;
	for(var i=1; i<17; i++){
		
		$(".shopping_mall .logo_group li:nth-child( "+i+" ) img").attr("src","images/logo/logo"+n3+"_"+i+".jpg");
		}
		
	}else{
		for(var i=1; i<17; i++){
		
		$(".shopping_mall .logo_group li:nth-child( "+i+" ) img").attr("src","images/logo/logo"+n3+"_"+i+".jpg");
		}
	}
	$(".SHOPPING_MALL .aside span").text(n3);
	return false;
	});
	
	
	//오른쪽버튼
	$(".shopping_mall .aside .rightbtn3").click(function(){
	n3++;
	
	if(n3==4){
	n3=1;
	for(var i=1; i<17; i++){
		
		$(".shopping_mall .logo_group li:nth-child( "+i+" ) img").attr("src","images/logo/logo"+n3+"_"+i+".jpg");
		}
		
	}else{
		for(var i=1; i<17; i++){
		
		$(".shopping_mall .logo_group li:nth-child( "+i+" ) img").attr("src","images/logo/logo"+n3+"_"+i+".jpg");
		}
	}
	$(".shopping_mall .aside span").text(n3);
	return false;
	});
	
	
	//브렌드 스토어☆
	n4=1;
	//왼쪽버튼
	$(".brand_store .aside .leftbtn4").click(function(){
	n4--;
	if(n4==0){
	n4=3;
	for(var i=1; i<9; i++){
		
		$(".brand_store .logo_group li:nth-child( "+i+" ) img").attr("src","images/store/store"+n4+"_"+i+".jpg");
		}
		
	}else{
		for(var i=1; i<9; i++){
		
		$(".brand_store .logo_group li:nth-child( "+i+" ) img").attr("src","images/store/store"+n4+"_"+i+".jpg");
		}
	}
	$(".brand_store .aside span").text(n4);
	return false;
	});
	
	
	//오른쪽버튼
	$(".brand_store .aside .rightbtn4").click(function(){
	n4++;
	
	if(n4==4){
	n4=1;
	for(var i=1; i<9; i++){
		
		$(".brand_store .logo_group li:nth-child( "+i+" ) img").attr("src","images/store/store"+n4+"_"+i+".jpg");
		}
		
	}else{
		for(var i=1; i<9; i++){
		
		$(".brand_store .logo_group li:nth-child( "+i+" ) img").attr("src","images/store/store"+n4+"_"+i+".jpg");
		}
	}
	$(".brand_store .aside span").text(n4);
	return false;
	});
	
	
});


	