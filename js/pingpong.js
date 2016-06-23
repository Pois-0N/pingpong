// JavaScript Document
var pingpong = {};
pingpong.presskey = [];
pingpong.ball = {
	speed:5,
	x:150,
	y:100,
	directionX:1,
	directionY:1,
	}
var KEY={
	UP:38,
	DOWN:40,
	W:87,
	S:83,
	}
$(function(){
	setInterval(gameloop,30);
	$(document).keydown(function(e){
		pingpong.presskey[e.which] = 1;
	})
	$(document).keyup(function(e){
		pingpong.presskey[e.which] = 0;
	})	
});
function gameloop(){
	movePaddles()
	moveBall()
}
function movePaddles(){
	if(pingpong.presskey[KEY.UP]){
        var top = parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top",top-5);
	}
	if(pingpong.presskey[KEY.DOWN]){
        var top = parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top",top+5);
	}
	if(pingpong.presskey[KEY.W]){
        var top = parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top",top-5);
	}
	if(pingpong.presskey[KEY.S]){
        var top = parseInt($("#paddleA").css("top"));
        $("#paddleA").css("top",top+5);
	}
}
function moveBall(){
	var playgroundHeight = parseInt($("#playground").css("height"));
	var playgroundWidth = parseInt($("#playground").css("width"));
	var ball = pingpong.ball
	
	if(ball.y + ball.speed*ball.directionY > playgroundHeight-20){
	    ball.directionY = -1;
	}	
	if(ball.y + ball.speed*ball.directionY < 0){
	    ball.directionY = 1;
	}	
	if(ball.x + ball.speed*ball.directionX > playgroundWidth-20){
	    ball.directionX = -1;
	}	
	if(ball.x + ball.speed*ball.directionX < 0){
	    ball.directionX = 1;
	}
	
	ball.x += ball.speed*ball.directionX
	ball.y += ball.speed*ball.directionY
	
	$("#ball").css({"left":ball.x,"top":ball.y})
}
/*$(function(){
	$(document).keydown(function(e){
	    switch(e.which){
		    case KEY.UP:
			var top = parseInt($("#paddleB").css("top"));
			$("#paddleB").css("top",top-5);
			break;
			case KEY.DOWN:
			var top = parseInt($("#paddleB").css("top"));
			$("#paddleB").css("top",top+5);
			break;
			case KEY.W:
			var top = parseInt($("#paddleA").css("top"));
			$("#paddleA").css("top",top-5);
			break;
			case KEY.S:
			var top = parseInt($("#paddleA").css("top"));
			$("#paddleA").css("top",top+5);
			break;
		}
		console.log(e.which);
	});
});*/