function shut() {
	document.onmouseup=function(event) {
	xs=event.pageX-30;
	ys=event.pageY-133;
	locat();
	}
}
function locat() {
	var locX=[], locY=[], boolX=false, boolY=false;
	for (var j=0; j<=cor.length; j++) {
		locX=[]; locY=[]; boolX=false; boolY=false;
		for (i=0; i<=cor[j].figX.length; i++) {
			if (cor[j].figX[i]==xs) {locY.push(cor[j].figY[i])}
			if (cor[j].figY[i]==ys) {locX.push(cor[j].figX[i])}
		}
		if (!((locY.every(olderY))||(locY.every(juniorY)))) {boolY=true}
		if (!((locX.every(olderX))||(locX.every(juniorX)))) {boolX=true}
		if ((boolX==true)&&(boolY==true)) {
			document.getElementById('areaNameOut').value=cor[j].name;
		}
	}
}
function olderX(num) {return xs>num}
function olderY(num) {return ys>num}
function juniorX(num) {return xs<num}
function juniorY(num) {return ys<num}
zone.onmousedown=shut;