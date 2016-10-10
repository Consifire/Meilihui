function buttom_class(){
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
					$(this).find('div').removeClass("add_"+(img_idx+1));
				});
}