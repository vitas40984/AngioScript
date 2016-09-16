function register() {
	var radios = document.getElementsByName('leasionType');
	var remain = document.getElementsByName('remainArtery');
	var leasionType_value="";
	var remain_value="";
	var str ="";
	for (var i=0; i<radios.length; i++) {
		if (radios[i].checked) {
			leasionType_value = radios[i].value; // получаем значение выбранного селектора leasionType
			break;
		}
	}
	for (var i=0; i<remain.length; i++) {
		if (remain[i].checked) {
			remain_value = remain[i].value; // получаем значение выбранного селектора remainArtery
			break;
		}
	}
	if (leasionType_value=="сегментарная окклюзия") {
		var leasion = new Leasion(leasionType_value, occlusionLength.value);//создаем объект для сегментарной окклюзии
	} else {
		var leasion = new Leasion(leasionType_value, leasionPercent.value); //создаем объект для любого другого поражения
	}
	for (i=0; i<cor.length; i++) {
		if (areaNameOut.value==cor[i].name) {
			cor[i].leasions.splice(0, 1, leasion); //записываем (заменяем) объект поражения в массив cor
			cor[i].remainVessel=remain_value;
			remain_value="";
			break;
		}
	}
}

function Leasion (leasionType, percent) {
	this.leasionType = leasionType;
	this.percent = percent;
}

conf.onclick=register;