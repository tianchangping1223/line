;(function($){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/2.75+'px';
	
	var cvs=document.getElementById("cvs");
	//var num = 0,i=0;
	var arr = [
			{
				moveX:0,
				moveY:29,
				toX:83,
				toY:0
			},
			{
				moveX:83,
				moveY:29,
				toX:0,
				toY:84
			},
			{
				moveX:83,
				moveY:113,
				toX:22,
				toY:0
			},
			{
				moveX:105,
				moveY:113,
				toX:0,
				toY:-10
			}
		];
	var arr2 = [
		{

			moveX:0,
			moveY:113,
			toX:105,
			toY:0
		},
		{
			moveX:105,
			moveY:113,
			toX:0,
			toY:-10
		}
	];
	var down = [
		{
			moveX:283,
			moveY:0,
			toX:0,
			toY:113
		},
		{
			moveX:283,
			moveY:113,
			toX:-178,
			toY:0
		},
		{
			moveX:105,
			moveY:113,
			toX:0,
			toY:-10
		}
	];
	var arr3 = [
		{
			moveX:172,
			moveY:137,
			toX:0,
			toY:-24
		},
		{
			moveX:172,
			moveY:113,
			toX:-67,
			toY:0
		},
		{
			moveX:105,
			moveY:113,
			toX:0,
			toY:-10
		}
	];
	var arr5 = [
		{
			moveX:283,
			moveY:137,
			toX:0,
			toY:-24
		},
		{
			moveX:283,
			moveY:113,
			toX:-178,
			toY:0
		},
		{
			moveX:105,
			moveY:113,
			toX:0,
			toY:-10
		}
	];
	//线条
	cxt = cvs.getContext("2d");
	cxt.strokeStyle = "red";
	cxt.lineWidth="2";

//动画
function sports(arr,num){//数组，条数
	var i = 0;
	cxt.beginPath();
	cxt.moveTo(arr[num].moveX,arr[num].moveY);
	//延时
	var timer2 = setTimeout(function(){
		num++;
		if(num>=arr.length){
			clearTimeout(timer2);
			return false;
		}
		sports(arr,num)
				
	},1006)
	//定时
	var timer = setInterval(function(){
		i++;
		if(i>=10){
			clearInterval(timer)
		}
		if(arr[num].toX){
			cxt.lineTo(arr[num].moveX+arr[num].toX/10*i,arr[num].moveY);
		}else{
			/*cxt.moveTo(arr[num].moveX,arr[num].moveY);*/
			cxt.lineTo(arr[num].moveX,arr[num].moveY+arr[num].toY/10*i);
		}
		cxt.stroke();
		cxt.closePath();
	},100)
}
//左上
	$(".leftT").on("tap",function(){
		sports(arr,0)
	})
//左下
	$(".leftB").on("tap",function(){
		sports(arr2,0)
	})
	$(".down").on("tap",function(){
		sports(down,0)
	})
	//左，向上
	$(".upL").on("tap",function(){
		sports(arr3,0)
	})
	//右，向上
	$(".upR").on("tap",function(){
		sports(arr5,0)
	})
	//返回
	$(".back").on("tap",function(){
		cxt.clearRect(0,0,300,267);
	})
})(Zepto);