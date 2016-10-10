			jQuery(function($){
			
				//划入“手机版”li 弹出app二维码
				$(".mobile").hover(function(){
					$(".mobileApp").show();
				},function(){
					$(".mobileApp").hide();
				});
				//弹出下拉菜单
				$(".menu_left").find("a").on("mouseenter",function(){
					$(this).next().show();
					$(this).parent().siblings().children(".menu_sub_1").hide();
				})
				$(".menu_left").on("mouseleave",function(){
					$(this).find("a").next().hide();
				});
				//弹出购物袋购物信息
				var timer_slide;
				$(".menu_right").on("mouseenter",function(){
					//设置延迟效果
				     timer_slide=setTimeout(function(){
						$(".shopping_bag_list").slideDown();
					},1000)
				});
				$(".menu_right").on("mouseleave",function(){
					clearTimeout(timer_slide);
					if (timer_slide) {
						$(".shopping_bag_list").slideUp();
					}
				});
				//点击按键收回购物袋信息
				$(".close_bag").click(function(){
					$(".shopping_bag_list").hide();
				});
				
				$(document).scroll(function(){
					var scrTop=$(document).scrollTop();
					if (scrTop>=120) {
						$("#head_3").addClass("head_3_active");
					}else{
						$("#head_3").removeClass("head_3_active");
					}
				});
				//[主体商品图]
					
				$(".women_goodslist").find("li").hover(function(){
					
					$(this).find(".img_over").show();//遮罩层
					$(this).find("img").animate({width:340,height:212,margin:-10});//图片放大
				},function(){
					$(this).find(".img_over").hide();
					$(this).find("img").animate({width:320,height:192,margin:0});
				});
			
				
				//[浮动框点击事件]
					//默认日期下的黑色底边
				$(".bottom_border").find("li").eq(0).siblings().css("background","white");
					//默认日期对应内容显示，其他隐藏
					$(".day_inner").find("table").eq(0).siblings().hide();
				var dex;
				$(".day_tab").find("li").click(function(){
					dex=$(this).index();//获取点击下标
					console.log(dex);
					//显示点击项的下边框
					$(".bottom_border").find("li").eq(dex).css("background","black").siblings().css("background","white");
					//浮动框更换内容
					$(".day_inner").find("table").eq(dex).show().siblings().hide();
				});
				//浮动框td遮罩层
				$(".td_inner").hover(function(){
					$(this).find(".td_cover").show();
					$(this).find(".td_cover_read").show();
				},function(){
					$(this).find(".td_cover").hide();
					$(this).find(".td_cover_read").hide();
				})
				$(".td_cover_read").find("a").hover(function(){
					$(this).css("text-decoration","underline");
				},function(){
					$(this).css("text-decoration","none");
				})
				//底部li划过效果
				var img_idx;//当前划过li的下标
				$(".buttom-1").find("li").hover(function(){
					$(this).find('a').css("color","#db2726");
					img_idx=$(this).index();
					switch (img_idx){
						case 0:
							$(this).find('div').addClass("add_1");
							break;
						case 1:
							$(this).find('div').addClass("add_2");
							break;
						case 2:
							$(this).find('div').addClass("add_3");
							break;
						case 3:
							$(this).find('div').addClass("add_4");
							break;
						case 4:
							$(this).find('div').addClass("add_5");
							break;
						case 5:
							$(this).find('div').addClass("add_6");
							break;
						default:
							break;
					}
				},function(){
					$(this).find('a').css("color","black");
					img_idx=$(this).index();
					$(this).find('div').removeClass("add_"+(img_idx+1))
				});
				
			});	
			