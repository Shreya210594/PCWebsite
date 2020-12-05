if(document.getElementById("thou")){
	var count = 0;
	var Timer = setInterval(function(){
		if(count >= 1000){
			clearInterval(Timer);
			document.getElementById("thou").innerHTML = "1000+";
		} else {
			document.getElementById("thou").innerHTML = count + "+";
		}
		count += 1;
	}, 1);
}


if(document.getElementById("thou2")){
	var count2 = 0;
	var Timer2 = setInterval(function(){
		if(count2 >= 1000){
			clearInterval(Timer2);
			document.getElementById("thou2").innerHTML = "1000+";
		} else {
			document.getElementById("thou2").innerHTML = count2 + "+";
		}
		count2 += 1;
	}, 1);
}


if(document.getElementById("fort")){
	var count3 = 0;
	var Timer3 = setInterval(function(){
		if(count3 > 40){
			clearInterval(Timer3);
			document.getElementById("fort").innerHTML = "40+";
		} else {
			document.getElementById("fort").innerHTML = count3 + "+";
		}
		count3 += 1;
	}, 100);
}