$(function () {
	//给导航菜单绑定事件
	$(".mian_menu_li").hover(function(){
				//滑入的时候显示对应的子菜单
				$(this).find(".sub_menu").show();
				//滑入的时候添加高亮显示
				$(this).find("span").addClass("bannerCurrent");
			},function(){
				//滑出的时候隐藏对应的子菜单
				$(this).find(".sub_menu").hide();
				//滑出的时候恢复默认样式
				$(this).find("span").removeClass("bannerCurrent");
				
			})
	
	//图书轮滑菜单
			$(".booksTitleRight ul li").mouseover(function(){
				//鼠标移入时增加类样式，移除其他兄弟样式并显示
				$(this).addClass("current").siblings().removeClass("current").show();
				//定义变量接收索引值
				var a=$(this).index();
				//将索引与内容一一对应并隐藏其他内容
				$(".booksConCen").eq(a).stop(true,true).fadeIn().siblings().hide();
			})

	//服装轮滑菜单
			$("#clothingHua li").mouseover(function(){
				//鼠标移入时增加类样式，移除其他兄弟样式并显示
				$(this).addClass("current").siblings().removeClass("current").show();
				//定义变量接收索引值
				var a=$(this).index();
				//将索引与内容一一对应并隐藏其他内容
				$(".clothingBoxCon").eq(a).stop(true,true).show().siblings().hide();
			})
	
	//运动轮滑菜单
			$("#outdoor_sport_hua li").mouseover(function(){
				//鼠标移入时增加类样式，移除其他兄弟样式并显示
				$(this).addClass("current").siblings().removeClass("current").show();
				//定义变量接收索引值
				var a=$(this).index();
				//将索引与内容一一对应并隐藏其他内容
				$(".outdoor_sport_con").eq(a).stop(true,true).show().siblings().hide();
			})
	
	//童装轮滑菜单
			$("#childenHua li").mouseover(function(){
				//鼠标移入时增加类样式，移除其他兄弟样式并显示
				$(this).addClass("current").siblings().removeClass("current").show();
				//定义变量接收索引值
				var a=$(this).index();
				//将索引与内容一一对应并隐藏其他内容
				$(".childenHuaCon").eq(a).stop(true,true).show().siblings().hide();
			})
	
	
	//推广商品
			$("#extend_Con .extend_ConOut").mouseover(function(){
						//鼠标移入时增加类样式，移除其他兄弟样式并显示
						$(this).addClass("bcColorHui").siblings().removeClass("bcColorHui").show();
			})
	
    //配置轮播的参数
    //主banner图
	$("#mainBanner").tyslide({
			boxh:430,//盒子的高度
			w:1000,//盒子的宽度
			h:400,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:24,//控制按钮宽度
			controlsH:24,//控制按钮高度
			radius:12,//控制按钮圆角度数
			controlsColor:"#d8d8d8",//普通控制按钮的颜色
			controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
			isNumber:true//是否需要数字
	});
	 
	 //图书Banner1
	$("#booksBannerImg1").tyslide({
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	 //图书Banner2
	$("#booksBannerImg2").tyslide({
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	 //图书Banner3
	$("#booksBannerImg3").tyslide({
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	//图书右边新书畅销榜
	//1.绑定样式
	$("#hot_sale li").mouseover(function(){
		//默认状态是标题全部显示，图书内容全部隐藏
		//显示所有 的标题样式
		$("#hot_sale li").find(".default_title").show();
		//隐藏所有的内容样式
		$("#hot_sale li").find(".hot_content").hide();
		
		//当前移入的标题隐藏
		$(this).find(".default_title").hide();
		
		//当前移入的标题隐藏
		$(this).find(".hot_content").show();
	})
	
	//服装Banner1
	$("#clothingBanner1").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	//服装Banner2
	$("#clothingBanner2").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	//服装Banner3
	$("#clothingBanner3").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	
	//运动Banner1
	$("#exerciseBanner1").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	//运动Banner2
	$("#exerciseBanner2").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	//运动Banner3
	$("#exerciseBanner3").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	
	//童装Banner1
	$("#childenBanner1").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	
	//童装Banner2
	$("#childenBanner2").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	//童装Banner3
	$("#childenBanner3").tyslide({
			boxh:338,//盒子的高度
			w:426,//盒子的宽度
			h:338,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:14,//控制按钮宽度
			controlsH:2,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"#fff",//普通控制按钮的颜色
			controlsCurrentColor:"#7f7f7f",//当前控制按钮的颜色
			isNumber:false//是否需要数字
	});
	//领券中心
	$(".two_code").hover(function () {
		$(this).find(".two_33").stop(true,true).animate({"left":"-100px","opacity":"1"},300);
	},function () {
		$(this).find(".two_33").stop(true,true).animate({"left":"39px","opacity":"0"},300)
	})
	//领劵中心的隐藏与就显示
	$(window).scroll(function(){
		var sc=$("html,body").scrollTop();
		//当浏览器的滚动条高度大于一定高度是显示，低于时隐藏
		if(sc>=200){
			$(".voucher_center").fadeIn(500);
		}else{
			$(".voucher_center").fadeIn(500);
		}
	})
	
	
//返回顶部图标的显示与隐藏
	$(window).scroll(function(){
		var sc=$("html,body").scrollTop();
		//当浏览器的滚动条高度大于一定高度是显示，低于时隐藏
		if(sc>=200){
			//滚动楼梯的显示
			$(".louti").fadeIn(500);
			//顶部搜索的显示
			$("#form_top").slideDown();
			//添加搜索框
			$("#form_top").append($("#search_form"));
		}else{
			$(".louti").fadeOut(500);
			//顶部搜索的隐藏
			$("#form_top").slideUp();
			//还原搜索框
			$(".shopcar_order").after($("#search_form"));
		}
	})
	
	
	//定义数组用于存放颜色
	var data_color;
	data_color=["#93D46F","#F65727","#BB9DEE","#FF7394","#C2EC51","#FFDA0D","#ccc"];
	//滚动楼梯效果
	//绑定移入移出事件
	$(".louti ul li").hover(function () {
		//鼠标移入时，字体颜色变为白色,背景图标向左移动
		$(this).css({
			"color":"#fff",
			"background-position-x"	:"-40px"
		})
		//li变宽
		$(this).animate({"width":"40px"},30);
		//获取梯楼菜单的索引值
		var index=$(this).index();
		//设置背景颜色
		$(this).css("background-color",data_color[index]);

	},function(){
		//鼠标移出时，字体变为黑色，图片定位向右移动
		$(this).css({
			"color":"#000",
			"background-position-x"	:"0px"
		})
		//li变回原来宽度
		$(this).animate({"width":"0px"},30);
		//背景颜色变为白色
		$(this).css("background-color","#fff");
	
	});
	
	//绑定点击事件，实现各个楼层的跳动
	$("#louti ul li:not(:last)").click(function(){
		var scroll_top=$(".louceng").eq($(this).index()).offset().top;
		$("html,body").animate({"scrollTop":scroll_top});
	})
	
	//返回顶部
	$("#louti ul li:last").click(function(){
		$("html,body").animate({"scrollTop":0},100);
	})
	
	
	
	
	
	
	
	
	
	
	
});
