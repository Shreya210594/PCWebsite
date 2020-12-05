function myNavFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";  //Responsive nav code
			x.style.animation=" fadeIn 0.8s";
		}
	}

	jQuery(document).ready(function() {
		var alterClass = function() {
				var w = window.innerWidth;
				if (w > 900) {
						$('#myTopnav').removeClass('responsive');
				}
		}
		$(window).resize(function(){
				alterClass();
		});
		alterClass();
});
