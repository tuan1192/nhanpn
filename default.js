function JsOnMouseClick(id){
	var x = document.getElementById(id);
	x.disabled = true;
	x.innerHTML = "I love you, too";
}

function JsOnMouseOver(id) {
	var x = document.getElementById(id);
	x.style.left = Math.floor((Math.random() * 50) + 16)*10 + 'px';
	x.style.top = Math.floor((Math.random() * 50) + 16) + 'px';
}