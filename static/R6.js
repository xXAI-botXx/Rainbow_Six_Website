
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





var start = new Date().getTime();

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0;i<6;i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}




function makeShapeAppear() {  /*form mit zufälliger zeit wird aufgerufen und zufällige größe*/

var t=200;
var i=400 ;
var wi=window.innerWidth;
var w=window.document.documentElement.clientWidth;
/*var g=window.screen.availWidth;*/
/*var g=window.document.documentElement.clientWidth*/  var g=window.document.body.clientWidth

/*if(g<500){
	g=1;
	t=2;
}*/

    var top = Math.random()  * 400;
	var left = Math.random() * g;
	var width = Math.random() * t;
	
	if(left>wi){
	g=0.5;
	t=0.5;
	/*break;*/
	}
	
	if(Math.random() > 0.5){   /*damit es auch ein kreis sein kann*/
		document.getElementById("formen").style.borderRadius = "50%";
	}else{
		
		document.getElementById("formen").style.borderRadius = "0";
	}
	document.getElementById("formen").style.backgroundColor = getRandomColor();    /*random color*/
	document.getElementById("formen").style.height = width + "px";/*höhe soll gleich groß wie wie breite, damit quadrat*/
	document.getElementById("formen").style.width = width + "px";
	document.getElementById("formen").style.left = left + "px";
    document.getElementById("formen").style.top = top + "px";
	document.getElementById("formen").style.display = "block";
	start = new Date().getTime(); /*start des timers,wenn neue form erscheint,stoppt beim darufklicken(end time)*/
}


function appearAfterDelay() {
	setTimeout(makeShapeAppear, Math.random() * 2000); /* form erscheint zufällig*/
}


function run(){
appearAfterDelay(); /*aufruf der funktion,damit die form zufällig erscheint*/
}


function reaktion() {
	
document.getElementById("formen").style.display ="none"; /*Form verschwindet beim darauf klicken*/

var end = new Date().getTime(); /*Zeit wird notiert wenn man auf form klickt*/
var dauer = (end - start) / 1000; /*start Zeit und Zeit bis es verschwindet werden subtrahiert und geteilt durch 1000 gerechnet um auf sekunden zu kommen*/

document.getElementById("dauer").innerHTML = dauer + "s"; /*zeigt zeit*/
appearAfterDelay();
}




