;(function($){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/2.75+'px';
	
	var cvs=document.getElementById("cvs");

	cxt = cvs.getContext("2d");
	cxt.beginPath();
	cxt.fillStyle="rgba(255,0,0,0)";
	cxt.fillRect(0,0,300,267);
	cxt.strokeStyle = "red";
	cxt.lineWidth="2";
	cxt.closePath();
	//左上
	function left(){
		cxt.beginPath();
		cxt.moveTo(0,29);
		cxt.lineTo(83,29);
		cxt.lineTo(83,113);
		cxt.lineTo(105,113);
		cxt.lineTo(105,103);
		cxt.stroke();
	}

	$(".leftT").on("tap",function(){
		left();
	})
	//左下
	function leftB(){
		cxt.beginPath();
		cxt.moveTo(0,113);
		cxt.lineTo(105,113);
		cxt.lineTo(105,103);
		cxt.stroke();
	}
	$(".leftB").on("tap",function(){
		leftB();
	})
	//向下
	function down(){
		cxt.beginPath();
		cxt.moveTo(283,0);
		cxt.lineTo(283,113);
		cxt.lineTo(105,113);
		cxt.lineTo(105,103);
		cxt.stroke();
	}
	$(".down").on("tap",function(){
		down();
	})
	//左，向上
	function upL(){
		cxt.beginPath();
		cxt.moveTo(172,137);
		cxt.lineTo(172,113);
		cxt.lineTo(105,113);
		cxt.lineTo(105,103);
		cxt.stroke();
	}
	$(".upL").on("tap",function(){
		upL();
	})
	//右，向上
	function upR(){
		cxt.beginPath();
		cxt.moveTo(283,137);
		cxt.lineTo(283,113);
		cxt.lineTo(105,113);
		cxt.lineTo(105,103);
		cxt.stroke();
	}
	$(".upR").on("tap",function(){
		upR();
	})
	//返回
	$(".back").on("tap",function(){
		cxt.clearRect(0,0,300,267);
	})
})(Zepto);