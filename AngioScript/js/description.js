var conclusion=""; var description=""; var curentArtery = []; var arrName = []; var arrArt = []; var nameCheck=[]; 

function descriptArea(i) {
	if (curentArtery[i].leasions[0].leasionType=="узурация контуров") {
		description+=curentArtery[i].name+" с неровными контурами, проходима, значимо не сужена. ";
	} else if (curentArtery[i].leasions[0].leasionType=="г/незначимый стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " сужена менее 50%. ");
	} else if (curentArtery[i].leasions[0].leasionType=="локальный стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " локально сужена до ")+curentArtery[i].leasions[0].percent+". ";
		conclusion+=fromUp(curentArtery[i].leasions[0].leasionType)+" "+parent(curentArtery[i].name)+" "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="сегментарный стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " сегментарно сужена до ")+curentArtery[i].leasions[0].percent+". ";
		conclusion+=fromUp(curentArtery[i].leasions[0].leasionType)+" "+parent(curentArtery[i].name)+" "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="пролонгированный стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " равномерно сужена до ")+curentArtery[i].leasions[0].percent+". ";
		conclusion+=fromUp(curentArtery[i].leasions[0].leasionType)+" "+parent(curentArtery[i].name)+" "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="множественные стенозы") {
		description+=curentArtery[i].name+" со множественными сужениями до "+curentArtery[i].leasions[0].percent+". ";
		conclusion+=fromUp(curentArtery[i].leasions[0].leasionType)+" "+parent(curentArtery[i].name)+" "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="сегментарная окклюзия") {
		description+=curentArtery[i].name+" сегментарно не контрастируется на протяжении "+curentArtery[i].leasions[0].percent+". ";
		conclusion+=fromUp(curentArtery[i].leasions[0].leasionType)+" "+parent(curentArtery[i].name)+" "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="магистральная окклюзия от устья") {
		description+=wholeArtery(curentArtery[i].name)+" не контрастируется. ";
		conclusion+="Окклюзия "+parent(wholeArtery(curentArtery[i].name))+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="магистральная окклюзия") {
		description+=curentArtery[i].name+" не контрастируется. ";
		conclusion+="Окклюзия "+parent(curentArtery[i].name)+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="неокклюзионный тромбоз") {
		description+=curentArtery[i].name+" в просвете определяется дефект наполнения, суживающий просвет артерии до "+curentArtery[i].leasions[0].percent+". ";
		conclusion+=curentArtery[i].leasions[0].leasionType+" "+parent(curentArtery[i].name)+" "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="окклюзионный тромбоз") {
		description+=curentArtery[i].name+" в просвете определяется дефект наполнения, полностью перекрывающий просвет артерии. ";
		conclusion+="Тромбоз "+parent(curentArtery[i].name)+". ";
		// СТЕНТЫ
	} else if (curentArtery[i].leasions[0].leasionType=="функционирующий стент") {
		description+=curentArtery[i].name+": визуализируется стент, проходим, в просвете не сужен. ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", функционирующий стент. ";
	} else if (curentArtery[i].leasions[0].leasionType=="г/незначимый рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, проходим, в просвете с неровными контурами, значимо не сужен. ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", функционирующий стент. ";
	} else if (curentArtery[i].leasions[0].leasionType=="ин-стент рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, в просвете сужение до "+curentArtery[i].leasions[0].percent+". ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", ин-стент рестеноз "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="дистальный краевой рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, в области дистального края сужение до "+curentArtery[i].leasions[0].percent+". ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", дистальный краевой рестеноз "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="проксимальный краевой рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, в области проксимального края сужение до "+curentArtery[i].leasions[0].percent+". ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", проксимальный краевой рестеноз "+curentArtery[i].leasions[0].percent+". ";
	} else if (curentArtery[i].leasions[0].leasionType=="реокклюзия") {
		description+=curentArtery[i].name+": визуализируется стент, в просвете не контрастируется";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", реокклюзия. ";
	}
}

function makeDescription() {
	var description_str=[]; var isClear = true; var nonSignif=false; var firstRCA=true; 
	description=""; conclusion="";
	for (var i = 0; i < cor.length; i++) { //проверяем без патологии или г/незначимые стенозы
		if (cor[i].leasions.length>0) {
			isClear=false;
			if ((cor[i].leasions[0].leasionType=="узурация контуров")||
				(cor[i].leasions[0].leasionType=="г/незначимый стеноз")) {nonSignif=true}
		}
	}
		if (isClear==false) { //создаем эпилог заключения
			conclusion="Ангиографические признаки атеросклеротического поражения "+regioInParent;
			if (nonSignif==true) {
				conclusion+=" без гемодинамически значимых изменений."
			} else {conclusion+=". "}
		} else {conclusion="Ангиографических признаков поражения "+regioInParent+" не выявлено."}

	for (var j=0; j<arteries.length; j++){ //перебор артерий
		if ((arteries[j].indexOf("ПКА")>-1)&&(firstRCA==true)) { //абзац перед ПКА
			description+="\n";
			firstRCA=false;
		}
		curentArtery=[]; isClear=true;
		arrArt = arteries[j].split("");
		for (var i = 0; i < cor.length; i++) { //перебор поражений
			arrName = cor[i].name.split("");
			for (var k=0; k<arrName.length; k++) {// поиск совпадений по имени
				nameCheck = arrName.slice(k, k+arrArt.length);
				if (nameCheck.join("")==arteries[j]) {curentArtery.push(cor[i])} //собираем фрагменты текущей артерии
			}
		}// конец перебора поражений
		for (var i = 0; i < curentArtery.length; i++) {// проверяем наличие поражений в артерии
			if (curentArtery[i].leasions.length>0) {
				isClear=false;
			}
		}
		if (isClear==false) {
			for (var l=0; l<curentArtery.length; l++) {
				if (curentArtery[l].leasions.length>0) {descriptArea(l)} //описываем поражения при их наличии
				if (curentArtery[l].remainVessel=="узурация контуров") {
					description_str=description.split("");
					description_str.splice(-2, 2);
					description=description_str.join("");
					description+=", на остальном протяжении, с неровными контурами, проходима, значимо не сужена. ";
				} 
				if (curentArtery[l].remainVessel=="окклюзия") {
					description_str=description.split("");
					description_str.splice(-2, 2);
					description=description_str.join("");
					description+=", на остальном протяжении, не контрастируется. ";
				}
			}
		} else {
			description+=arteries[j]+checkMale(arteries[j], " проходима, не сужена. ");//выдаем при отсутствии поражений
		}
	}// конец перебора артерий
	descriptionOut.value=description; //выдаем описание
	conclusionOut.value=conclusion; //выдаем заключение
}

finish.onclick=makeDescription; // обработка кнопки выдачи заключения

function parent (str) {
	var arrStr=str.split("");
	for (i=0; i<str.length; i++) {
		if (str.slice(i, i+8)=="почечная") {
			arrStr.splice(str.indexOf("почечная")+6, 2, "ой");
			str=arrStr.join(""); arrStr=str.split("");
		}
	}
	for (i=0; i<str.length; i++) {
		if (str.slice(i, i+7)=="артерия") {
			arrStr.splice(str.indexOf("артерия")+6, 1, "и");
			str=arrStr.join(""); arrStr=str.split("");
		}
	}
	for (i=0; i<str.length; i++) {
		str=arrStr.join("");
		if (str.slice(i, i+5)=="ствол") {
			arrStr[0]=arrStr[0].toLowerCase();
			arrStr.splice(str.indexOf("ствол")+5, 0, "а");
			str=arrStr.join(""); arrStr=str.split("");
		}
	}
	var fragment=str.slice(str.indexOf(" ")-2, str.indexOf(" "));
	if (fragment=="ая"){
		arrStr.splice(str.indexOf("ая")-i, 2, "ой");
		arrStr[0]=arrStr[0].toLowerCase();
	}
	if (fragment=="ый"){
		arrStr.splice(str.indexOf("ый"), 2, "ого");
		arrStr[0]=arrStr[0].toLowerCase();
	}
	return arrStr.join("");
}

function fromUp (str) {
	var arrStr=str.split("");
	arrStr[0]=arrStr[0].toUpperCase();
	return arrStr.join("");
}

function checkMale (forArt, str) {
	if ((forArt=="Чревный ствол")||(forArt=="ТПС")||(forArt=="Левый ТПС")||(forArt=="Правый ТПС")||(forArt=="Ствол ЛКА")) {
		var arrStr=str.split("");
		if (str.indexOf("сужена")>-1){arrStr.splice(str.indexOf("сужена")+5, 1)} 
		str=arrStr.join("");
	}
	return str;
}

function wholeArtery (str) {
	for (var j=0; j<arteries.length; j++) {
		for (var i=0; i<str.length; i++) {
			if (arteries[j]==str.slice(i, i+arteries[j].length)) {return arteries[j]}
		}
	}
}