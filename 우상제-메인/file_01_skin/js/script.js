		$(function(){
			//메뉴 반응형이동
		
			
			//슬라이드
			$(".content_02>.js_slider li").each(function(index){
				$(this).css("left",index*980);
			});
			setInterval(function(){
				$(".content_02>.js_slider li").each(function(){
				var left=parseInt($(this).css("left"));
				var movePos=left-980;
				$(this).animate({left:movePos},1000, function(){
				var left=parseInt($(this).css("left"));
				if(left<=-980){
				$(this).css("display","none");
				$(this).css("left",980);
				$(this).css("display","inline");
				}
				});
			});
			},5000);		
			
			
		//왼쪽 nav 코드
			$(".js-nav-gnb__item").mouseenter(function(){
					$(this).children(".js-sub-list").stop().fadeIn();
		
			});
				
			$(".js-nav-gnb__item").mouseleave(function(){
					$(this).children(".js-sub-list").stop().fadeOut();
				
			});
			//fixed값 고정
			$(window).resize(function(){
				var aa=$(window).width();
				var bb =$(".wrapper").width();
				var cc = (aa-bb)/2; 
				
				//$("nav").css("left", cc-100);
				$(".right").css("left",cc+bb+0);
			}).resize();
	

			$(".header .js_header__logo").click(function(){	
			$('.popup').stop().css("display","inline");
		
			return false;
			});
			
			$(".popup .js_popup__link").click(function(){	
		
			$('.popup').stop().css("display","none");
			return false;
			});
	
	/*슬라이드*/
		setInterval(function(){
			$(".js_slide_02 li:eq(2)").children("img").fadeOut(1000, function(){
			$(".js_slide_02 li:eq(2)").insertBefore(".js_slide_02 li:eq(0)");
			$(".js_slide_02 li:eq(0)").children("img").fadeIn();
		});	
		},3000);


				// <버튼
				var n=0;
			    $('.js_btn_pref_01').click(function(){
				   n--;				   
				 
				   if(n==-1){ 
					  $('.js_view_01 .img_wrap').css({left:-385*3});
					  n=2;
				   }
				 $('.js_view_01 .img_wrap').stop().animate({left:-385*n}); 
	  
				return false;
			    });
				//<<<<<<<<<<<<<
				   $('.js_btn_next_01').click(function(){
				   n++;
				  
				   if(n==4){
					  $('.js_view_01 .img_wrap').css({left:0});
					  n=1;
				   }
				   $('.js_view_01 .img_wrap').stop().animate({left:-385*n});		
				return false;
			    });
		
		
				//<<Before&after 시작
			// <버튼
				var n2=0;
			    $('.js_btn_pref_02').click(function(){
				   n2--;				   
				 
				   if(n2==-1){ 
					  $('.js_view_02 .img_wrap').css({left:-385*3});
					  n2=2;
				   }
				 $('.js_view_02 .img_wrap').stop().animate({left:-385*n2}); 
	  
				return false;
			    });
				//<<<<<<<<<<<<<
				   $('.js_btn_next_02').click(function(){
				   n2++;
				  
				   if(n2==4){
					  $('.js_view_02 .img_wrap').css({left:0});
					  n2=1;
				   }
				   $('.js_view_02 .img_wrap').stop().animate({left:-385*n2});		
				return false;
			    });
		
		});


		
