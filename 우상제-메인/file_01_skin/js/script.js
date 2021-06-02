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
			
			
		//왼쪽 Leftgnb 코드
			$(".main").mouseenter(function(){
					$(this).children(".sub").stop().fadeIn();
					//$(this).children(".sub").css({opacity:1, display:"block"},200);
			});
				
			$(".main").mouseleave(function(){
					$(this).children(".sub").stop().fadeOut();
					//$(this).children(".sub").css({opacity:0, display:"none"},200);
			});
			//fixed값 고정
			$(window).resize(function(){
				var aa=$(window).width();
				var bb =$(".wrapper").width();
				var cc = (aa-bb)/2; 
				
				//$("#Leftgnb").css("left", cc-100);
				$(".right").css("left",cc+bb+0);
			}).resize();
	

			$(".header h1 a").click(function(){	
			$('.popup').stop().css("display","inline");
		
			return false;
			});
			
			$(".popup ul li").click(function(){	
		
			$('.popup').stop().css("display","none");
			return false;
			});
	
	/*슬라이드*/
		setInterval(function(){
			$(".js_slide2 li:eq(2)").children("img").fadeOut(1000, function(){
			$(".js_slide2 li:eq(2)").insertBefore(".js_slide2 li:eq(0)");
			$(".js_slide2 li:eq(0)").children("img").fadeIn();
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


		
