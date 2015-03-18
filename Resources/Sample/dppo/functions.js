var CONST_COLOR_SE = "#ff0000"			// (red) syntax error
var CONST_COLOR_LE = "#f5deb3"			// (wheat) logic error
var CONST_COLOR_OK = "#ffffff"			// (white) ok
var CONST_COLOR_LEAC = "#ff0001"			// logic error, but another color 

// premenne s farbami prebehnute cez input
var COLOR_SE
var COLOR_LE
var COLOR_OK
var COLOR_LEAC

var iIM;

function getObj(name) {
	return document.forms["formular"].elements[iIM[name]];
}

function getObjBackground(name) {
	return document.forms["formular"].elements[iIM[name]].style.background
}

function indexyMena() {
	iIM = new Array();
	for (i = 0; i < document.forms['formular'].elements.length; i++) {
		iIM[document.forms['formular'].elements[i].name + document.forms['formular'].elements[i].id] = i;
	}
	
	// nastavenie konstant farieb
	original = document.forms['formular'].elements[0].style.background

	document.forms['formular'].elements[0].style.background = CONST_COLOR_SE;
	COLOR_SE = document.forms['formular'].elements[0].style.background;

	document.forms['formular'].elements[0].style.background = CONST_COLOR_LE;
	COLOR_LE = document.forms['formular'].elements[0].style.background;

	document.forms['formular'].elements[0].style.background = CONST_COLOR_OK;
	COLOR_OK = document.forms['formular'].elements[0].style.background;

	document.forms['formular'].elements[0].style.background = CONST_COLOR_LEAC;
	COLOR_LEAC = document.forms['formular'].elements[0].style.background;
	
	document.forms['formular'].elements[0].style.background = original
}

function make(prefix,postfix) {
	return prefix + postfix
}

function setOk(field) {
	Input(field,"OK")
}

function setBad(field) {
	Input(field,"LOG_ERROR")
}

function setTitle(ktory, title) {
	if (title != "error")
		getObj(ktory).title = title;
	else 
		getObj(ktory).title = "Nezistená hodnota"
}

function gV(kde) {
	var re = new RegExp("^((\\d+)_)+\\d+$");
	var arr = re.exec(kde);
	if (arr != null) {
		if (getObj(kde).value == "") {
			if (getObjBackground(kde) == COLOR_SE)
				Input(kde,"OK")
			return parseFloat(0);
		} else {
			getObj(kde).value = getObj(kde).value.replace(/(\\s+)/g,"");
			if (parseFloat(getObj(kde).value) != getObj(kde).value) {
				Input(kde,"TYP_ERROR")
				return "error"
			}	
			if (getObjBackground(kde) == COLOR_SE) {
				Input(kde,"OK")
			}
			return parseFloat(getObj(kde).value)
		}
	} else {
		if (parseFloat(kde) != kde) {
			return "error"
		}
		return parseFloat(kde)
	}
}

function getDat(kde) {
	var re = new RegExp("^((\\d+)_)+\\d+$");
	var arr = re.exec(kde);
	if (arr != null) {
		date = getObj(kde).value
		if (testDate(date)) {
			if (getObjBackground(kde) == COLOR_SE)
				Input(kde,"OK")
			return getObj(kde).value
		} else {
			Input(kde,"TYP_ERROR")
			return "error"
		}
	} else {
		if (testDate(kde)) {
			return kde
		} else {
			return sqlToGerman(kde)
		}
	}
}


function gT(kde) {
	var re = new RegExp("^((\\d+)_)+\\d+$");
	var arr = re.exec(kde);
	if (arr != null) {
		return getObj(kde).value;
	}
	return kde
}

function Input(ktory, udalost) {
	if ( udalost == "LOG_ERROR" ) {
		getObj(ktory).style.background = COLOR_LE;
	} else 
		if ( udalost == "TYP_ERROR") {
			getObj(ktory).style.background = COLOR_SE;
			getObj(ktory).disabled = false;
		} else {
			getObj(ktory).style.background = COLOR_OK;
		}
}

function sqlToGerman(vstup) {
	text=""
	den=""
	mesiac=""
	rok=""
	minusko=0
	
	for (index = 0; index < vstup.length; index++) {
		ch = vstup.charAt(index);
		if (ch != "0" && ch != "1" && ch != "2" && ch != "3" && ch != "4" && ch != "5" && ch != "6" && ch != "7" && ch != "8" && ch != "9" && ch != "-") {
			return "error"
		}
		if ((ch == "0" || ch == "1" || ch == "2" || ch == "3" || ch == "4" || ch == "5" || ch == "6" || ch == "7" || ch == "8" || ch == "9") && (text =="")) {
			if (minusko == 0) 
				rok = rok + ch
			if (minusko == 1) 
				mesiac = mesiac + ch
			if (minusko == 2) 
				den=den + ch
		}
		if (ch == "-" && text == "") {
			if (minusko == 1) 
				minusko = 2
			if (minusko == 0) 
				minusko = 1
		}	
	}
	if ((den != "") && (mesiac != "") && (rok != "") && (den.length <=2) && (mesiac.length <= 2) && (rok.length == 4)) {
		if ((0 - ( -den) <= 31) && (0 - (-mesiac) <=12)) {
			date = new Date()
			date.setYear(0 - (-rok))
			date.setMonth(0 - (-mesiac) -1)
			date.setDate(0 - (-den))
			if (date.getDate() == den && (date.getMonth() + 1) == mesiac && date.getYear() == rok) {
				return den + "." + mesiac + "." + rok;
			}
		}
	}
	return "error"
}

function testDate(vstup) {
	text=""
	den=""
	mesiac=""
	rok=""
	bodka=0
	
	for (index = 0; index < vstup.length; index++) {
		ch = vstup.charAt(index);
		if (ch != "0" && ch != "1" && ch != "2" && ch != "3" && ch != "4" && ch != "5" && ch != "6" && ch != "7" && ch != "8" && ch != "9" && ch != ".") {
			return false
		}
		if ((ch == "0" || ch == "1" || ch == "2" || ch == "3" || ch == "4" || ch == "5" || ch == "6" || ch == "7" || ch == "8" || ch == "9") && (text =="")) {
			if (bodka == 0) 
				den=den + ch
			if (bodka == 1) 
				mesiac=mesiac + ch
			if (bodka == 2) 
				rok=rok + ch
		}
		if (ch == "." && text == "") {
			if (bodka == 1) 
				bodka=2
			if (bodka == 0) 
				bodka=1
		}	
	}
	if ((den != "") && (mesiac != "") && (rok != "") && (den.length <=2) && (mesiac.length <= 2) && (rok.length == 4)) {
		if ((0 - ( -den) <= 31) && (0 - (-mesiac) <=12)) {
			date = new Date(parseInt(rok, 10), parseInt(mesiac, 10) - 1, parseInt(den, 10))
			if (date.getDate() == den && (date.getMonth() + 1) == mesiac && (date.getYear() == rok || date.getYear() + 1900 == rok)) {
				return true
			}
		}
	}
	return false
}

function plus(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left + right
}

function minus(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left - right
}

function mul(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left * right
}

function div(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left / right
}

function or(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left || right
}

function not(bool) {
	if (bool == "error")
		return "error"
	return !bool
}

function and(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left && right
}

function compDates(datum1,datum2,znamienko) {
	if (datum1 == "error" || znamienko=="error" || datum2=="error")
		return "error"

	den1 = datum1.substring(0,datum1.indexOf('.'))
	mesiac1 = datum1.substring(datum1.indexOf('.')+1,datum1.lastIndexOf('.'))
	rok1 = datum1.substring(datum1.lastIndexOf('.')+1,datum1.length)
		
	den2 = datum2.substring(0,datum2.indexOf('.'))
	mesiac2 = datum2.substring(datum2.indexOf('.')+1,datum2.lastIndexOf('.'))
	rok2 = datum2.substring(datum2.lastIndexOf('.')+1,datum2.length)

	d1 = new Date()
	d1.setUTCFullYear(rok1)
	d1.setMonth(mesiac1 - 1)
	d1.setDate(den1)

	d2 = new Date()
	d2.setUTCFullYear(rok2)
	d2.setMonth(mesiac2 - 1)
	d2.setDate(den2)

	novyDen1 = d1.getDate()
	if (novyDen1 < 10) 
		novyDenS1 = '0' + novyDen1
	else novyDenS1 = novyDen1

	novyDen2 = d2.getDate()
	if (novyDen2 < 10) 
		novyDenS2 = '0' + novyDen2
	else novyDenS2 = novyDen2

	novyMes1 = d1.getMonth()+1
	if (novyMes1 < 10) 
		novyMesS1 = '0' + novyMes1
	else novyMesS1 = novyMes1
	novyMes2 = d2.getMonth()+1
	if (novyMes2 < 10) 
		novyMesS2 = '0' + novyMes2
	else novyMesS2 = novyMes2

	lava = d1.getUTCFullYear()+'.'+novyMesS1+'.'+novyDenS1
	prava = d2.getUTCFullYear()+'.'+novyMesS2+'.'+novyDenS2

	if (znamienko == "==")
		return (lava == prava)
	if (znamienko == "<")
		return (lava < prava)
	if (znamienko == ">")
		return (lava > prava)
	if (znamienko == "<=")
		return (lava <= prava)
	if (znamienko == ">=")
		return (lava >= prava)
}

function getDay(datum){
	if (datum == "error")
		return "error"
	return datum.substring(0,datum.indexOf('.'))
}

function getMonth(datum){
	if (datum == "error")
		return "error"
	return datum.substring(datum.indexOf('.')+1,datum.lastIndexOf('.'))
}

function getYear(datum){
	if (datum == "error")
		return "error"
	return datum.substring(datum.lastIndexOf('.')+1,datum.length)
}

function getFirstWorkingDay(datum){
	if (datum == "error")
		return "error"
	rok = datum.substring(datum.lastIndexOf('.')+1,datum.length)
	mesiac = datum.substring(datum.indexOf('.')+1,datum.lastIndexOf('.'))
	for (i=0; i<15;i++) { 
		if (rok == workDaysFirst[i*13]) {
			return workDaysFirst[(i*13)-(-mesiac)]
		}
	}
	alert("Neviem zistit pracovne dni v danom roku, pole ostane vyznacene ako chybne !")
	return "error"
}

function getLastWorkingDay(datum){
	if (datum == "error")
		return "error"
	rok = datum.substring(datum.lastIndexOf('.')+1,datum.length)
	mesiac = datum.substring(datum.indexOf('.')+1,datum.lastIndexOf('.'))
	for (i=0; i<15;i++) { 
		if (rok == workDaysLast[i*13]) {
			return workDaysLast[(i*13)-(-mesiac)]
		}
	}
	alert("Neviem zistit pracovne dni v danom roku, pole ostane vyznacene ako chybne !")
	return "error"
}

function incDate(datum,rokInc,mesiacInc,denInc){
	if (datum == "error" || rokInc=="error" || mesiacInc == "error" || denInc == "error")
		return "error"
	den = datum.substring(0,datum.indexOf('.'))
	mesiac = datum.substring(datum.indexOf('.')+1,datum.lastIndexOf('.'))
	rok = datum.substring(datum.lastIndexOf('.')+1,datum.length)
	
	den = denInc - (- den)
	mesiac = mesiac - ( - mesiacInc)
	rok = rok - (- rokInc)
	
	d = new Date()
	d.setUTCFullYear(rok)
	d.setMonth(mesiac - 1)
	d.setDate(den)

	return d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getUTCFullYear()
}

function newDate(den,mesiac,rok) {
	if (rok == "error" || mesiac=="error" || den == "error")
		return "error"
	return (den+'.'+mesiac+'.'+rok)
}

function round(hodnota, miesta, typ) {
	if (hodnota == "error" || miesta=="error" || typ == "error")
		return "error"
	hodnota2 = hodnota;
	if ( miesta < 0) {
		for (i=miesta;i<0;i++) { 
			hodnota2 = hodnota2/10;
		}
		if (typ == "center") {
			hodnota2=Math.round(hodnota2)
		}
		if (typ == "up") {
			hodnota2=Math.ceil(hodnota2)
		}
		if (typ == "down") {
			hodnota2=Math.floor(hodnota2)
		}
		for (i=miesta;i<0;i++) { 
			hodnota2 = hodnota2*10;
		}
	}
	if (miesta > 0) {
		for (i=0;i<miesta;i++) { 
			hodnota2 = hodnota2*10;
		}
		if (typ == "center") {
			hodnota2=Math.round(hodnota2)
		}
		if (typ == "up") {
			hodnota2=Math.ceil(hodnota2)
		}
		if (typ == "down") {
			hodnota2=Math.floor(hodnota2)
		}
		hodnota2 = hodnota2 + ""
		hodnota2 = hodnota2.substring(0,hodnota2.length - miesta) + "." + hodnota2.substring(hodnota2.length - miesta, hodnota2.length)
	}
	if (miesta == 0) {
		if (typ == "center") {
			hodnota2=Math.round(hodnota2)
		}
		if (typ == "up") {
			hodnota2=Math.ceil(hodnota2)
		}
		if (typ == "down") {
			hodnota2=Math.floor(hodnota2)
		}
	}
	return hodnota2;
} 

function compStrings(left,right,comp) {
	if (left == "error" || right=="error")
		return "error"
	if (comp == "==") {
	   return left == right;
	}
	if (comp == ">") {
	   return left > right;
	}
	if (comp == "<") {
	   return left < right;
	}
	if (comp == "<=") {
	   return left <= right;
	}
	if (comp == ">=") {
	   return left >= right;
	}
	if (comp == "!=") {
	   return left != right;
	}
}

function compNumbers(left,right,comp) {
	if (left == "error" || right=="error")
		return "error"
	if (comp == "==") {
	   return left == right;
	}
	if (comp == ">") {
	   return left > right;
	}
	if (comp == "<") {
	   return left < right;
	}
	if (comp == "<=") {
	   return left <= right;
	}
	if (comp == ">=") {
	   return left >= right;
	}
	if (comp == "!=") {
	   return left != right;
	}
}

function eq(left,right) {
	if (left == "error" || right=="error")
		return "error"
	return left == right
}

function concat(left,right) {
	return left + right;
}

function interval(left,number,right) {
	if (left == "error" || right == "error" || number == "error")
		return "error"
	if (compNumbers(left,number, "<=") && compNumbers(number, right, "<="))
		return true
	return false
}

function min(num1, num2) {
	if (num1 == "error" || num2 == "error")
		return "error"
	if (num1 < num2)
		return num1
	return num2
}

function max(num1, num2) {
	if (num1 == "error" || num2 == "error")
		return "error"
	if (num1 > num2)
		return num1
	return num2
}

function null2zero(param) {
	if (param == "null")
		return 0
	else 
		return param
}

function findFromInterval(left,right,value,fromInterval) {
	fromVal = parseFloat(fromInterval);
	for (var i = 0; i < left.length; i++) {
		leftVal = left[i];
		rightVal = right[i];
		val = value[i];
		if (((leftVal == 0) && (fromVal <= rightVal)) || ((leftVal < fromVal) && (rightVal == 0)) || ((leftVal < fromVal) && (fromVal <= rightVal))) {
			return val;
		}
	}
	return "error"
}

function isInt(value) {
	if (value == "")
		return true
	if (parseInt(value, 10) != value)
		return false
	else 
		return true
}

function length(string) {
	return string.length;
}


function changeColorLeToColorLeac(input) {
	if (formular(input).style.background.split(" ",10)[0] == COLOR_LE) {
		formular(input).style.background.split(" ",10)[0] = COLOR_LEAC
	}
}

function substring(retazec,indexStart,indexEnd) {
	if (indexStart != "error" && indexEnd != "error")
		return retazec.substr(parseInt(indexStart, 10),parseInt(indexEnd, 10));
	else 
		return 'error';
}

function abs(value) {
	if (value == "error")
		return "error"

	return Math.abs(value)
}

function isTrue(value) {
	if (value == "error")
		return "error"
		
	return value
}

function getActualDate() {
	today = new Date()
	
	return today.getDate() + "." + today.getMonth() + "." + today.getYear()
}

function areEmpty(value) {
	if (value == "")
		return true

	if (parseFloat(value) != value) {
		return false
	} else {
		if (parseFloat(value) != 0.0)
			return false
		else
			return true
	}
}

function dateToGer(day, month, year) {
	return day + "." + month + "." + year
}

function dateToGerman(date) {
	var re = new RegExp("^(\\d\\d?)\\.(\\d\\d?)\\.(\\d\\d\\d\\d)$");

	var arr = re.exec(date);
	if (arr != null) {
		den = RegExp.$1
		mesiac = RegExp.$2
		rok = RegExp.$3
		return den + "." + mesiac + "." + rok;
	}
	
	re = new RegExp("^(\\d\\d\\d\\d)\\-(\\d\\d?)\\-(\\d\\d?)$");
	arr = re.exec(date);
	if (arr != null) {
		den = RegExp.$3
		mesiac = RegExp.$2
		rok = RegExp.$1
		return den + "." + mesiac + "." + rok;
	}
	
	return "error";
}