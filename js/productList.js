$(function () {
    //配置轮播的参数
    //主banner图
	$("#product_mainBanner").tyslide({
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

	//人气单品背景效果
	$(".productCon .productConbox").mouseover(function(){
		//移入时添加背景
		$(this).addClass("morencurrent").siblings().removeClass("morencurrent");
	});
	
	//新书畅销榜
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
	
	
	
	
	
});
