$(function(){
	//首页搜索框
	//找到搜索框
	$("#keySearch").val("创意文具").css("color","#ccc");
	//鼠标点击是获取焦点，且输入框内容清空
	$("#keySearch").focus(function(){
	      var a=$(this).val()
	      //当输入框的值和默认的值相同时，获取焦点时清空输入框默认值
	    if(a==this.defaultValue){
	    	$(this).val("");
	    	$(this).css("color","#000");
	    }
	});
	//当输入框内容为空时，显示默认信息
	$("#keySearch").blur(function(){
		 var curValue=$("#keySearch").val();
		//判断b的值是否为空，为空时失去焦点后显示默认的值
		if($.trim(curValue)==""){
			 $(this).val(this.defaultValue);
			$(this).css("color","#bfbfbf");
		}
	});	
})
















