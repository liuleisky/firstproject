$(function(){
	//种类选择效果
	$("#choose li").click(function () {
		$(this).addClass("choose_current").siblings().removeClass("choose_current");
	})
	
	//人气单品背景效果
	$(".productCon .productConbox").mouseover(function(){
		//移入时添加背景
		$(this).addClass("morencurrent").siblings().removeClass("morencurrent");
	});
	
	//商品介绍与评论滑动菜单
	$("#commentRightTitle li").mouseover(function() {
		$(this).addClass("shopcurrent").siblings().removeClass("shopcurrent");
		
		var a=$(this).index();
		$("#commentRight .all_comment_box .comment_con_tab").eq(a).show().siblings().hide();
	
	})
	
	//评论信息点击效果
	$("#comPinlun .pinlunTitle li").click(function(){
		//增加点击的当前样式，移除其他兄弟样式
		$(this).addClass("commentCurrent").siblings().removeClass("commentCurrent");
		//获取索引值与相应内容连接
		var a=$(this).index();
		$(".comment_box .comment_tab").eq(a).show().siblings().hide();
	})
	
})