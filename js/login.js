$(function(){
//	登陆切换
	//1.绑定点击事件，实现扫码登录和账户登录的切换
	$(".login_title #login_tab li").click(function(){
		//点击显示相应的样式
		$(this).addClass("current").siblings().removeClass("current");
		//将点击的目标通过索引值与对应的索引值内容连接起来
		var a=$(this).index();
		$(".login1").eq(a).stop(true,true).fadeIn().siblings().hide();
})
	
	//扫码登录效果
	$("#code_login li").hover(function () {
		//1. 二维码向左移动
		$(this).find("img:eq(0)").stop(true,true).animate({"left":0},200);
		//2. 显示出手机图片
		$(this).find("img:eq(1)").stop(true,true).delay(180).fadeIn(50);
		
	},function () {
		//1. 隐藏手机图片
		$(this).find("img:eq(1)").stop(true,true).fadeOut(100);
		
		//2. 二维码恢复原来的位置
		$(this).find("img:eq(0)").stop(true,true).delay(50).animate({"left":72},200);
		
	})
	
	
	
	
	
	
	
	
	
	
	//用户名和密码框特效
	//用户名获取焦点
$("#username").val("会员名/邮箱").css("color","#ccc");
	$("#username").focus(function(){
		var a=$(this).val();
		if(a==this.defaultValue){
			$(this).val("");
			$(this).css("color","#000");
		}
		
	})

	//用户名失去焦点
	$("#username").blur(function(){
		var b=$("#username").val();
		if($.trim(b)==""){
			$(this).val(this.defaultValue);
			$(this).css("color","#bfbfbf");	
		}
	})
	//绑定键盘事件
	//当键盘输入时按键抬起时，显示删除按钮
	$("#username").keyup(function(){
		$("#delIcon").show();
		
	})
	
	//用户名框删除按钮绑定点击事件
	$("#delIcon").click(function(){
		//总体：当用户名框有内容时，删除按钮显示，点击按钮删除里面的内容，删除按钮隐藏，默认值显示
		//1：点击删除按钮，删除所有内容
		$("#username").val("")
		//2.隐藏删除按钮
		$("#delIcon").hide();
	})
	//用户名输入规则验证
	$("#myform").submit(function () {
		var usernameRe=/^[a-zA-Z]\w{5,17}$/;
		if (!usernameRe.test($("#username").val())) {
			alert("用户名必须以字母开头，长度在6-18之间，只能包含字符、数字和下划线");
			$("#username").focus();
			return false;
		}
	})	
	//密码输入规则验证
	$("#myform").submit(function () {
		var usernameRe=/^[a-zA-Z]\w{5,17}$/;
		if (!usernameRe.test($("#pwd").val())) {
			alert("密码必须以字母开头，长度在6-18之间，只能包含字符、数字和下划线");
			$("#pwd").focus();
			return false;
		}
	})
	
	//二维码切换效果
	$(".login_erweima ul li").mouseover(function(){
		
		
	})
	
	
	
	

})


















