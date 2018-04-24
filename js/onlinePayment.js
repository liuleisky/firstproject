$(function(){
		//定义变量接收要添加的内容
		var divBox='<div class="addCard clear">'+
				'<div class="addCard1 fl">银行卡</div>'+
				'<div class="addCard2 fl"><p>中国银行     <span class="colorOrg">网银</span><span class="colorQianHui">最近使用</span></p></div>'+
				'<div class="addCard3 fl"><span id="del">删除银行卡  -<span/></div>'+
			'</div>'
		//给添加按钮注册点击事件
		$(".addCard3").click(function  () {
			//将添加的内容放到table中
			$("#lgzfCon").append(divBox);
		})
		//注册事件委派，实现删除添加的功能
		$("#lgzfCon").delegate("#del","click",function() {
			//删除点击的行
			$(this).closest(".addCard").remove();
		})	
		
})