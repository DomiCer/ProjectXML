// Vykona logicku kontrolu poli formulara
// Navratova hodnota: boolean - true, ak su hodnoty na formulari po logickej stranky korektne, false inac
function noLogicalError() {
	for(i = 0; i < inputy.length; i++) {
		if(getObjBackground(inputy[i]) == COLOR_LE) {
			return false;
		}
	}

	return true;
}

// Funkcia (dodana Ditec-om) vrati pre predany kod znaku
// v kodovani unicode windows-1250 kod zodpovedajuceho znaku v unicode iso-8859-2
function getIso88592Code(code) {
	switch(code) {
		case 128:
			return 8364;
			break;
		case 130:
			return 8218;
			break;
		case 132:
			return 8222;
			break;
		case 133:
			return 8230;
			break;
		case 134:
			return 8224;
			break;
		case 135:
			return 8225;
			break;
		case 137:
			return 8240;
			break;
		case 138:
			return 352;
			break;
		case 139:
			return 8249;
			break;
		case 140:
			return 346;
			break;
		case 141:
			return 356;
			break;
		case 142:
			return 381;
			break;
		case 143:
			return 377;
			break;
		case 145:
			return 8216;
			break;
		case 146:
			return 8217;
			break;
		case 147:
			return 8220;
			break;
		case 148:
			return 8221;
			break;
		case 149:
			return 8226;
			break;
		case 150:
			return 8211;
			break;
		case 151:
			return 8212;
			break;
		case 153:
			return 8482;
			break;
		case 154:
			return 353;
			break;
		case 155:
			return 8250;
			break;
		case 156:
			return 347;
			break;
		case 157:
			return 357;
			break;
		case 158:
			return 382;
			break;
		case 159:
			return 378;
			break;
		case 260:
			return 711;
			break;
		case 317:
			return 260;
			break;
		case 346:
			return 166;
			break;
		case 352:
			return 169;
			break;
		case 356:
			return 171;
			break;
		case 377:
			return 172;
			break;
		case 381:
			return 174;
			break;
		case 261:
			return 177;
			break;
		case 318:
			return 181;
			break;
		case 347:
			return 182;
			break;
		case 711:
			return 183;
			break;
		case 353:
			return 261;
			break;
		case 357:
			return 187;
			break;
		case 378:
			return 317;
			break;
		case 382:
			return 318;
			break;
		default:
			return code;
	}
}
