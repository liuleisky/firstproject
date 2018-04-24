$(function(){
	car_common();
	$(".check_all").click(function() {
		//定义变量接收当前选中状态的checked的值
		var checkVal=$(this).prop("checked");
		$(".check_one").prop("checked",checkVal);
		$(".check_all").prop("checked",checkVal);
		car_common();
	})
	
	$(".plus").click(function() {
		//获取数量的val值
		var old_val=parseInt($(this).prev().val());
		var new_val;
		old_val++;
		
		//将值赋值给数量
		$(this).prev().val(old_val);
		
		//计算小结
		//获取单价的价格
		var price=parseFloat($(this).parent().prev().text());
		new_val =parseInt($(this).prev().val());
		//得到小计总价
		var total_price=price*new_val;
		//将得到的小计赋值给他
		$(this).parent().next().text(total_price.toFixed(2));
		car_common();
	})
	
	$(".reduce").click(function(){
		var old_val=parseInt($(this).next().val());
		//判断当值少于1时，停止自减
		if(old_val>1){
			old_val--;
		}
		//改变输入框里的值
		$(this).next().val(old_val);
		
		//获取单价
		var price=parseFloat($(this).parent().prev().text());
		//定义新的数量值来接收最新的值
		var new_val=parseInt($(this).next().val());
		//计算小计总价
		var total_price=price*new_val;
		//将得到的值赋值给小计
		$(this).parent().next().text(total_price.toFixed(2));
		car_common();
	})
	
	
	//获取输入数字的值
	$(".num").blur(function(){
		var new_val=parseInt($(this).val());
		
		var price=parseFloat($(this).parent().prev().text());
		
		var total=new_val*price;
		$(this).parent().next().text(total.toFixed(2));
		car_common();
	})
	
	$(".check_one").click(function(){
		car_common();
	})
	
	
	//封装函数
	function car_common(){
		var num=0;//全部商品的数量
		var total=0;//总的价格
		var product_num=0//选中的商品数量
		//全选反选页面
		 var chsub = $(".check_one").length;  
		
	    //获取选中的subcheck的个数   
	    var checkedsub = $(".check_one:checked").length;
	    
	    if (checkedsub == chsub) {  
	    	
	        $(".check_all").prop("checked", true);  
	    }else{
	   		$(".check_all").prop("checked", false);
	    }
	
		
		$(".list_each").each(function(){
			
			//找到单个的商品数量
			var num1=parseInt($(this).find(".num").val());
			//找到单个的商品的单价
			var price1=parseFloat($(this).find(".num").parent().prev().text());
			//算出小计的值
			$(this).find(".one_price").text((num1*price1).toFixed(2));
			//全部商品的数量
			num++;
			//找到当前的商品的状态（是否选中）
			var ischecked=$(this).find(".check_one").prop("checked");
			if(ischecked){
			var old_val=parseInt($(this).find(".num").val());
			//总的数量
			product_num+=old_val;
			
			var total_price=parseInt($(this).find(".one_price").text());
				//总的价格
				total+=total_price;
			}
		})
		$("#num").text(num);
		$("#product_num").text(product_num);
		$("#total").text(total.toFixed(2));
	}
	
	//猜你喜欢背景效果
	$(".productCon .productConbox").mouseover(function(){
		//移入时添加背景
		$(this).addClass("shoplikecurrent").siblings().removeClass("shoplikecurrent");
	});
	
})