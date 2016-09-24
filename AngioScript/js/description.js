var conclusion=""; var description=""; var curentArtery = []; var arrName = []; var arrArt = []; var nameCheck=[]; var groupForConclusion;

function descriptArea(i) {
	var curentLeasion = curentArtery[i].leasions[0].leasionType;
	var curentPercent = curentArtery[i].leasions[0].percent;
	if (curentLeasion=="узурация контуров") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" с неровными контурами, проходима, значимо не сужена. ";
	} else if (curentLeasion=="не описывать") {
	} else if (curentLeasion=="г/незначимый стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " сужена менее 50%. ");
	} else if (curentLeasion=="локальный стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " локально сужена до ")+curentPercent+". ";
		conclusion+=fromUp(curentLeasion)+" "+parent(curentArtery[i].name)+" "+curentPercent+". ";
	} else if (curentLeasion=="сегментарный стеноз") {
		description+=curentArtery[i].name+checkMale(curentArtery[i].name, " сегментарно сужена до ")+curentPercent+". ";
		conclusion+=fromUp(curentLeasion)+" "+parent(curentArtery[i].name)+" "+curentPercent+". ";
	} else if (curentLeasion=="пролонгированный стеноз") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+checkMale(curentArtery[i].name, " равномерно сужена до ")+curentPercent+". ";
		conclusion+=fromUp(curentLeasion)+" "+parent(groupForConclusion)+" "+curentPercent+". ";
	} else if (curentLeasion=="множественные стенозы") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" со множественными сужениями до "+curentPercent+". ";
		conclusion+=fromUp(curentLeasion)+" "+parent(curentArtery[i].name)+" "+curentPercent+". ";
	} else if (curentLeasion=="сегментарная окклюзия") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" сегментарно не контрастируется на протяжении "+curentPercent+". ";
		conclusion+=fromUp(curentLeasion)+" "+parent(curentArtery[i].name)+" "+curentPercent+". ";
	} else if (curentLeasion=="магистральная окклюзия от устья") {
		description+=wholeArtery(curentArtery[i].name)+" не контрастируется. ";
		conclusion+="Окклюзия "+parent(wholeArtery(curentArtery[i].name))+". ";
	} else if (curentLeasion=="магистральная окклюзия") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" и дистальнее не контрастируется. ";
		conclusion+="Окклюзия "+parent(curentArtery[i].name)+" и дистальнее. ";
	} else if (curentLeasion=="неокклюзионный тромбоз") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" в просвете определяется дефект наполнения, суживающий просвет артерии до "+curentPercent+". ";
		conclusion+=curentLeasion+" "+parent(curentArtery[i].name)+" "+curentPercent+". ";
	} else if (curentLeasion=="миокардиальный мостик") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" в систолу имеет сегментарное сужение до "+curentPercent+". ";
		conclusion+="Миокардиальный мостик "+parent(curentArtery[i].name)+" "+curentPercent+". ";
	} else if (curentLeasion=="окклюзионный тромбоз") {
		description+=group(curentArtery[i].name, curentLeasion, i, curentPercent)+" в просвете определяется дефект наполнения, полностью перекрывающий просвет артерии. ";
		conclusion+="Тромбоз "+parent(curentArtery[i].name)+". ";
		// СТЕНТЫ
	} else if (curentLeasion=="функционирующий стент") {
		description+=curentArtery[i].name+": визуализируется стент, проходим, в просвете не сужен. ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", функционирующий стент. ";
	} else if (curentLeasion=="г/незначимый рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, проходим, в просвете с неровными контурами, значимо не сужен. ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", функционирующий стент. ";
	} else if (curentLeasion=="ин-стент рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, в просвете сужение до "+curentPercent+". ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", ин-стент рестеноз "+curentPercent+". ";
	} else if (curentLeasion=="дистальный краевой рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, в области дистального края сужение до "+curentPercent+". ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", дистальный краевой рестеноз "+curentPercent+". ";
	} else if (curentLeasion=="проксимальный краевой рестеноз") {
		description+=curentArtery[i].name+": визуализируется стент, в области проксимального края сужение до "+curentPercent+". ";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", проксимальный краевой рестеноз "+curentPercent+". ";
	} else if (curentLeasion=="реокклюзия") {
		description+=curentArtery[i].name+": визуализируется стент, в просвете не контрастируется";
		conclusion+="Состояние после стентирования "+parent(curentArtery[i].name)+", реокклюзия. ";
	}
}

function makeDescription() {
	var description_str=[]; var isClear = true; var nonSignif=false; var firstRCA=true; var signif=false; var arrConclusion="";
	description=""; conclusion="";
	for (var i = 0; i < cor.length; i++) { //создаем условия префикса
		if ((cor[i].leasions.length>0)&&
			(((cor[i].leasions[0].leasionType!="не описывать")&&
 			(cor[i].leasions[0].leasionType!="миокардиальный мостик"))||
 			(cor[i].remainVessel=="узурация контуров"))) { //проверка на чистоту сосудов
			isClear=false;
			if ((cor[i].leasions[0].leasionType=="узурация контуров")||
				(cor[i].leasions[0].leasionType=="г/незначимый стеноз")) {nonSignif=true}//проверка на г/незначимые поражения
		}
		if ((cor[i].leasions.length>0)&&
			(cor[i].leasions[0].leasionType!="не описывать")&&
			(cor[i].leasions[0].leasionType!="узурация контуров")&&
			(cor[i].leasions[0].leasionType!="г/незначимый стеноз")) {signif=true}//проверка на г/значимые поражения
	}
		if (isClear==false) { //создаем префикс заключения
			conclusion="Ангиографические признаки атеросклеротического поражения "+regioInParent;
			if ((nonSignif==true)&&(signif==false)) {
				conclusion+=" без гемодинамически значимых изменений. "
			} else {conclusion+=". "}
		} else {conclusion="Ангиографических признаков поражения "+regioInParent+" не выявлено. "}

	for (var j=0; j<arteries.length; j++){ //перебор артерий
		if ((arteries[j].indexOf("ПКА")>-1)&&(firstRCA==true)) { //абзац перед ПКА
			description+="\n";
			firstRCA=false;
		}
		curentArtery=[]; isClear=true;
		arrArt = arteries[j].split("");
		for (var i = 0; i < cor.length; i++) { //перебор поражений
			arrName = cor[i].name.split("");
			for (var k=0; k<arrName.length; k++) { // поиск совпадений по имени
				nameCheck = arrName.slice(k, k+arrArt.length);
				if (nameCheck.join("")==arteries[j]) {curentArtery.push(cor[i])} //собираем сегменты текущей артерии
			}
		}// конец перебора поражений
		for (var i = 0; i < curentArtery.length; i++) {// проверяем наличие поражений в артерии
			if (curentArtery[i].leasions.length>0) {isClear=false}
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
				if (curentArtery[l].remainVessel=="без особенностей") {
					description_str=description.split("");
					description_str.splice(-2, 2);
					description=description_str.join("");
					description+=", на остальном протяжении, проходима, не сужена. ";
				} 
				if (curentArtery[l].remainVessel=="окклюзия") {
					description_str=description.split("");
					description_str.splice(-2, 2);
					description=description_str.join("");
					description+=", на остальном протяжении, не контрастируется. ";
					arrConclusion=conclusion.split("");
					arrConclusion.splice(-2, 2);
					conclusion=arrConclusion.join("");
					conclusion+=", дистальнее окклюзия. ";
				}
			}
		} else {
			description+=arteries[j]+checkMale(arteries[j], " проходима, не сужена. ");//выдаем при отсутствии поражений
		}
	}// конец перебора артерий
	
	var radios = document.getElementsByName('corType');// 
	var corType_value="";
	for (var i=0; i<radios.length; i++) {
		if (radios[i].selected) {
			corType_value = radios[i].value; // получаем значение выбранного corType
			break;
		}
	}
	if (corType_value!="Не указывать") {
		conclusion+="\n"+corType_value+" тип коронарного кровообращения.";
	}
	
	descriptionOut.value=description; //выдаем описание
	conclusionOut.value=conclusion; //выдаем заключение
}

finish.onclick=makeDescription; // обработка кнопки выдачи заключения

function parent (str) { //перевод str к родительному падежу
	var arrStr=str.split("");
	if (str.indexOf("почечная")>-1) {	
		arrStr.splice(str.indexOf("почечная")+6, 2, "о", "й");
		str=arrStr.join(""); arrStr=str.split("");
	}
	if ((str.indexOf("артерия")>-1)||(str.indexOf("Артерия")>-1)) {	
		arrStr[0]=arrStr[0].toLowerCase();
		if (wholeArtery(curentArtery[i].name)=="Артерия острого края") {arrStr.splice(str.indexOf("артерия")+7, 1, "и")} 
			else {arrStr.splice(str.indexOf("артерия")+6, 1, "и")}
		str=arrStr.join(""); arrStr=str.split("");
		}
	if ((str.indexOf("ствол")>-1)||(str.indexOf("Ствол")>-1)) {
		arrStr[0]=arrStr[0].toLowerCase();
		arrStr.splice(str.indexOf("ствол")+6, 0, "а");
		str=arrStr.join(""); arrStr=str.split("");
	}
	if (str.indexOf("ветвь")>-1) {
			arrStr[0]=arrStr[0].toLowerCase();
			arrStr.splice(str.indexOf("ветвь")+4, 1, "и");
			str=arrStr.join(""); arrStr=str.split("");
		}
	var fragment=str.slice(str.indexOf(" ")-2, str.indexOf(" "));
	if (fragment=="ая"){
		arrStr.splice(str.indexOf("ая"), 2, "ой");
		arrStr[0]=arrStr[0].toLowerCase();
		str=arrStr.join(""); arrStr=str.split("");

	}
	if (fragment=="ый"){
		arrStr.splice(str.indexOf("ый"), 2, "ого");
		arrStr[0]=arrStr[0].toLowerCase();
		str=arrStr.join(""); arrStr=str.split("");

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
		if (str.indexOf("сужена")>-1){
			arrStr.splice(str.indexOf("сужена")+5, 1);
		} 
		if (str.indexOf("проходима")>-1){
			arrStr.splice(str.indexOf("проходима")+8, 1);
			str=arrStr.join(""); arrStr=str.split("");
		} 
		str=arrStr.join("");
	}
	return str;
}

function wholeArtery (str) { //возвращает название артерии по её фрагменту
	for (var j=0; j<arteries.length; j++) {
		for (var i=0; i<str.length; i++) {
			if (arteries[j]==str.slice(i, i+arteries[j].length)) {return arteries[j]}
		}
	}
}

function group (art, leasion, i, percent) { //группировка аналогичных поражений
	for (var q=0; q<curentArtery.length; q++) {
		if ((curentArtery[q].name!=art)&&
			(curentArtery[q].leasions.length>0)) {
			if ((curentArtery[q].leasions[0].leasionType==leasion)&&(curentArtery[q].leasions[0].percent==percent)) {
				art+=", "+curentArtery[q].name;
				curentArtery[q].leasions[0].leasionType=""; curentArtery[i].leasions=[];
			}
		}
	}
	groupForConclusion = art;
	return art;
}