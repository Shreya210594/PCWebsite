if(document.getElementById("thou")){
	var count = 0;
	var Timer = setInterval(function(){
		if(count >= 1000){
			count = 500;
			document.getElementById("fort").innerHTML = count + "+";
		} else {
			document.getElementById("thou").innerHTML = count + "+";
		}
		count += 1;
	}, 10);
}


if(document.getElementById("thou2")){
	var count2 = 0;
	var Timer2 = setInterval(function(){
		if(count2 >= 1000){
			count2 = 500;
			document.getElementById("fort").innerHTML = count2 + "+";
		} else {
			document.getElementById("thou2").innerHTML = count2 + "+";
		}
		count2 += 1;
	}, 10);
}


if(document.getElementById("fort")){
	var count3 = 0;
	var Timer3 = setInterval(function(){
		if(count3 == 41){
			count3 = 20;
			document.getElementById("fort").innerHTML = count3 + "+";

		} else {
			document.getElementById("fort").innerHTML = count3 + "+";
		}

		count3 += 1;
	}, 100);
}
