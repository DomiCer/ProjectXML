// Funkcia naplni formular hodnotami obsiahnutymi v predanom stringu (XML dokument).
// Zabezpeci validaciu poli formulara.
// Zabezpeci uvolnenie (odomknutie) poli formulara obsahujucich identifikacne udaje.
// Navratova hodnota (boolean):
//			true - naplnanie prebehlo korektne
//			false - chyba pri naplnani (chybny XML dok., nespravny XML dok. ...)
function fillTheForm(filling) {
	if(filling == null) {
		return false;
	}

	var xmlDoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument");
	xmlDoc.async = false;
	xmlDoc.validateOnParse = false;
//	xmlDoc.loadXML(filling.substr(filling.indexOf("<dokument")));
	xmlDoc.loadXML(filling);
	var myNode;

	// nastavim inputy formulara podla hodnot v XML documente
	for(i = 0; i < inputy.length; i++) {
		if(xPOI[inputy[i]] != null) {
			myNode = xmlDoc.selectSingleNode(xPOI[inputy[i]]);
			
			if(myNode != null) {
				getObj(inputy[i]).value = myNode.text;
			} else {
				return false;
			}
		}
	}
	
	// ... odpalim eventy onChange pre r. 100, 310, 320, 400, 900, 920 a 970 pre korektne vytvorenie znamienok v fdf
	setUpSigns();

	// niektore inputy nie su priamo ovladatelne pouzivatelom,
	// musim nastavit aj vrstvu s ktorou uzivatel komunikuje:
	// ...nastavim radio inputy pre typ DP...
	setUpDPTypeRadio();
	
	// ...opakujuce sa stlpce tabulky F (roky).
	updateInputs();

	// ...nastavim inputy pre tel. cislo DS (vo formulari su to dve polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/hlavicka/sidlo/tel');
			
	if(myNode != null) {
		setUpTelFaxNrs(myNode, getObj('0_0_7_5'), getObj('0_0_7_6'));
	} else {
		return false;
	}

	// ...nastavim inputy pre fax. cislo DS (vo formulari su to dve polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/hlavicka/sidlo/fax');
			
	if(myNode != null) {
		setUpTelFaxNrs(myNode, getObj('0_0_7_7'), getObj('0_0_7_8'));
	} else {
		return false;
	}

	// ...nastavim inputy pre tel. cislo OO (vo formulari su to dve polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/hlavicka/opravnena_osoba/sidlo_oo/tel');
			
	if(myNode != null) {
		setUpTelFaxNrs(myNode, getObj('0_0_8_4_4'), getObj('0_0_8_4_5'));
	} else {
		return false;
	}

	// ...nastavim inputy pre fax. cislo OO (vo formulari su to dve polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/hlavicka/opravnena_osoba/sidlo_oo/fax');
			
	if(myNode != null) {
		setUpTelFaxNrs(myNode, getObj('0_0_8_4_6'), getObj('0_0_8_4_7'));
	} else {
		return false;
	}

	// ...nastavim inputy pre datum vyplnenia (vo formulari su to tri polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/hlavicka/datum_vyplnenia');
			
	if(myNode != null) {
		setUpDates(myNode, getObj('0_0_11_0'), getObj('0_0_11_1'), getObj('0_0_11_2'));
	} else {
		return false;
	}

	// ...nastavim inputy pre datum 'ddp' (vo formulari su to tri polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/body/ddp_datum');
			
	if(myNode != null) {
		setUpDates(myNode, getObj('0_1_52_0'), getObj('0_1_52_1'), getObj('0_1_52_2'));
	} else {
		return false;
	}

	// ...nastavim inputy pre datum na r. 810 (vo formulari su to tri polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/body/r810/datum');
			
	if(myNode != null) {
		setUpDates(myNode, getObj('0_1_43_0'), getObj('0_1_43_1'), getObj('0_1_43_2'));
	} else {
		return false;
	}

	// ...nastavim inputy pre datum na r. 820 (vo formulari su to tri polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/body/r820/datum');
			
	if(myNode != null) {
		setUpDates(myNode, getObj('0_1_44_0'), getObj('0_1_44_1'), getObj('0_1_44_2'));
	} else {
		return false;
	}

	// ...nastavim inputy pre datum r. 900 (vo formulari su to tri polia, v XML len jeden element - musim jeho obsah delit) ...
	myNode = xmlDoc.selectSingleNode('/dokument/body/r900/datum');
			
	if(myNode != null) {
		setUpDates(myNode, getObj('0_1_48_0'), getObj('0_1_48_1'), getObj('0_1_48_2'));
	} else {
		return false;
	}

	// ...nastavim combo boxy pre roky (zdan. obd., vyplnenie, ddp, 810, 820, 900)...
	nastavCombaRok();

	// ...nastavim combo box-y (tab F, dni a mesiace zdan. obdobia, vyplnenia, ddp, 810, 820, 900)...
	nastavCombaZInputov();
	
	// ...upravim hodnotu na riadku 500 (na formulari su predtlacene 'tisice', preto upravujeme hodnotu nacitanu z XML) ...
	setUpR500();

	// ...upravim hodnotu na riadku 800 (na formulari su predtlacene 'stovky', preto upravujeme hodnotu nacitanu z XML)
	setUpR800();

	// A spustim validaciu.
	onLoad();
	
	// Odomknem polia obsahujuce identifikacne udaje.
	unlockIDs();
	
	return true;
}

// Funkcia ulozi hodnoty formulara v zodpovedajucom XML dokumente.
// Navratova hodnota (string):
//			XML dokument obsahujuci hodnoty z formulara
function storeTheForm() {
	var xml = 
		"<dokument xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"universal.xsd\"><hlavicka err=\"0\"><typDP><rdp err=\"0\"></rdp><odp err=\"0\"></odp><ddp err=\"0\"></ddp></typDP><danovy_urad err=\"0\"></danovy_urad><kod_do err=\"0\"></kod_do><dic err=\"0\"></dic><ico err=\"0\"></ico><pravna_forma err=\"0\"></pravna_forma><obch_meno err=\"0\"></obch_meno><sidlo><ulica err=\"0\"></ulica><cislo err=\"0\"></cislo><psc err=\"0\"></psc><obec err=\"0\"></obec><stat err=\"0\"></stat><tel err=\"0\"></tel><fax err=\"0\"></fax><banka><nazov_banky err=\"0\"></nazov_banky><ucet err=\"0\"></ucet><kod_banky err=\"0\"></kod_banky></banka><banka><nazov_banky err=\"0\"></nazov_banky><ucet err=\"0\"></ucet><kod_banky err=\"0\"></kod_banky></banka></sidlo><opravnena_osoba><priezvisko err=\"0\"></priezvisko><meno err=\"0\"></meno><titul err=\"0\"></titul><postavenie err=\"0\"></postavenie><sidlo_oo><ulicacislo err=\"0\"></ulicacislo><psc err=\"0\"></psc><obec err=\"0\"></obec><stat err=\"0\"></stat><tel err=\"0\"></tel><fax err=\"0\"></fax></sidlo_oo></opravnena_osoba><pocet_priloh err=\"0\"></pocet_priloh><zdanovacie_obd><datum_od><den err=\"0\"></den><mesiac err=\"0\"></mesiac></datum_od><datum_do><den err=\"0\"></den><mesiac err=\"0\"></mesiac></datum_do><rok err=\"0\"></rok></zdanovacie_obd><datum_vyplnenia err=\"0\"></datum_vyplnenia></hlavicka>"
		+ "<body><r100 err=\"0\"></r100><r110 err=\"0\"></r110><r120 err=\"0\"></r120><r130 err=\"0\"></r130><r140 err=\"0\"></r140><r150 err=\"0\"></r150><r160 err=\"0\"></r160><r170 err=\"0\"></r170><r180 err=\"0\"></r180><r190 err=\"0\"></r190><r200 err=\"0\"></r200><r210 err=\"0\"></r210><r220 err=\"0\"></r220><r230 err=\"0\"></r230><r240 err=\"0\"></r240><r250 err=\"0\"></r250><r260 err=\"0\"></r260><r270 err=\"0\"></r270><r280 err=\"0\"></r280><r290 err=\"0\"></r290><r300 err=\"0\"></r300><r310 err=\"0\"></r310><r320 err=\"0\"></r320><r330 err=\"0\"></r330><r400 err=\"0\"></r400><r410 err=\"0\"></r410><r420 err=\"0\"></r420><r430 err=\"0\"></r430><r440 err=\"0\"></r440><r450 err=\"0\"></r450><r460 err=\"0\"></r460><r470 err=\"0\"></r470><r500 err=\"0\"></r500><r510 err=\"0\"></r510><r600 err=\"0\"></r600><r610><text err=\"0\"></text><suma err=\"0\"></suma></r610><r620><text err=\"0\"></text><suma err=\"0\"></suma></r620><r630 err=\"0\"></r630><r640 err=\"0\"></r640><r650 err=\"0\"></r650><r700 err=\"0\"></r700><r710 err=\"0\"></r710><r800 err=\"0\"></r800><r810><datum err=\"0\"></datum><suma err=\"0\"></suma></r810><r820><datum err=\"0\"></datum><suma err=\"0\"></suma></r820><r830 err=\"0\"></r830><r840 err=\"0\"></r840><r850 err=\"0\"></r850><r900><datum err=\"0\"></datum><suma err=\"0\"></suma></r900><r901 err=\"0\"></r901><r902 err=\"0\"></r902><r910 err=\"0\"></r910><ddp_datum err=\"0\"></ddp_datum><r920 err=\"0\"></r920><r930 err=\"0\"></r930><r940 err=\"0\"></r940><r950 err=\"0\"></r950><r960 err=\"0\"></r960><r970 err=\"0\"></r970>"
		+ "<tab_a><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04><r05 err=\"0\"></r05><r06 err=\"0\"></r06><r07 err=\"0\"></r07><r08 err=\"0\"></r08><r09 err=\"0\"></r09><r10 err=\"0\"></r10><r11 err=\"0\"></r11><r12 err=\"0\"></r12><r13 err=\"0\"></r13><r14 err=\"0\"></r14><r15 err=\"0\"></r15><r16 err=\"0\"></r16><r17 err=\"0\"></r17><r18 err=\"0\"></r18><r19 err=\"0\"></r19></tab_a><tab_b><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03></tab_b><tab_c><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03></tab_c><tab_d><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04><r05 err=\"0\"></r05></tab_d><tab_e><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04><r05 err=\"0\"></r05><r06 err=\"0\"></r06></tab_e>"
		+ "<tab_f><cast1><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok></cast1>"
		+ "<cast2><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok></cast2>"
		+ "<cast3><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok></cast3></tab_f>"
		+ "<tab_g><r01 err=\"0\"></r01><r02 err=\"0\"></r02></tab_g><tab_h><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04></tab_h></body></dokument>";

	var xmlDoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument");
	xmlDoc.async = false;
	xmlDoc.validateOnParse = false;
	xmlDoc.loadXML(xml);
	var myNode;

	for(i = 0; i < inputy.length; i++) {
		if(xPOI[inputy[i]] != null) {
			myNode = xmlDoc.selectSingleNode(xPOI[inputy[i]]);
			
			if(myNode != null) {
				myNode.text = getObj(inputy[i]).value;
			} else {
				alert('storeTheForm(): Pre ' + xPOI[inputy[i]] + ' node nenajdeny');
			}
		}
	}
	
	// upravim hodnotu elementu pre rok zdan. obd. (formular pracuje len s poslednou cislicou roku)
	var tempXPath = '/dokument/hlavicka/zdanovacie_obd/rok';
	myNode = xmlDoc.selectSingleNode(tempXPath);
	if(myNode != null) {
		if(myNode.text != '') {
			myNode.text = '200' + myNode.text;
		}
	} else {
		alert('storeTheForm(): Pre ' + tempXPath + ' node nenajdeny');
	}

	// nastavim hodnotu elementu pre tel. cislo DS (formular ma cislo rozdelene na dve casti oddelene lomitkom)
	setUpNode(xmlDoc.selectSingleNode('/dokument/hlavicka/sidlo/tel'), '0' + getObj('0_0_7_5').value + '/' + getObj('0_0_7_6').value, '/dokument/hlavicka/sidlo/tel');

	// nastavim hodnotu elementu pre fax. cislo DS (formular ma cislo rozdelene na dve casti oddelene lomitkom)
	setUpNode(xmlDoc.selectSingleNode('/dokument/hlavicka/sidlo/fax'), '0' + getObj('0_0_7_7').value + '/' + getObj('0_0_7_8').value, '/dokument/hlavicka/sidlo/fax');

	// nastavim hodnotu elementu pre tel. cislo OO (formular ma cislo rozdelene na dve casti oddelene lomitkom)
	setUpNode(xmlDoc.selectSingleNode('/dokument/hlavicka/opravnena_osoba/sidlo_oo/tel'), '0' + getObj('0_0_8_4_4').value + '/' + getObj('0_0_8_4_5').value, '/dokument/hlavicka/opravnena_osoba/sidlo_oo/tel');

	// nastavim hodnotu elementu pre fax. cislo OO (formular ma cislo rozdelene na dve casti oddelene lomitkom)
	setUpNode(xmlDoc.selectSingleNode('/dokument/hlavicka/opravnena_osoba/sidlo_oo/fax'), '0' + getObj('0_0_8_4_6').value + '/' + getObj('0_0_8_4_7').value, '/dokument/hlavicka/opravnena_osoba/sidlo_oo/fax');

	// upravim hodnotu elementu pre r500 (formular pouziva predtlacene 'tisice' - 000)
	tempXPath = '/dokument/body/r500';
	myNode = xmlDoc.selectSingleNode(tempXPath);
	if(myNode != null) {
		if(myNode.text != '') {
			myNode.text = myNode.text + '000';
		}
	} else {
		alert('storeTheForm(): Pre ' + tempXPath + ' node nenajdeny');
	}

	// upravim hodnotu elementu pre r800 (formular pouziva predtlacene 'stovky' - 00)
	tempXPath = '/dokument/body/r800';
	myNode = xmlDoc.selectSingleNode(tempXPath);
	if(myNode != null) {
		if(myNode.text != '') {
			myNode.text = myNode.text + '00';
		}
	} else {
		alert('storeTheForm(): Pre ' + tempXPath + ' node nenajdeny');
	}

	// nastavim hodnoty elementov pre datumy (formular ma datumy rozdelene na tri casti oddelene bodkami)
	setUpDateNode(xmlDoc.selectSingleNode('/dokument/body/r810/datum'), getObj('0_1_43_0'), getObj('0_1_43_1'), getObj('0_1_43_2'), '/dokument/body/r810');
	setUpDateNode(xmlDoc.selectSingleNode('/dokument/body/r820/datum'), getObj('0_1_44_0'), getObj('0_1_44_1'), getObj('0_1_44_2'), '/dokument/body/r820');
	setUpDateNode(xmlDoc.selectSingleNode('/dokument/body/r900/datum'), getObj('0_1_48_0'), getObj('0_1_48_1'), getObj('0_1_48_2'), '/dokument/body/r900');
	setUpDateNode(xmlDoc.selectSingleNode('/dokument/body/ddp_datum'), getObj('0_1_52_0'), getObj('0_1_52_1'), getObj('0_1_52_2'), '/dokument/body/ddp_datum');
	setUpDateNode(xmlDoc.selectSingleNode('/dokument/hlavicka/datum_vyplnenia'), getObj('0_0_11_0'), getObj('0_0_11_1'), getObj('0_0_11_2'), '/dokument/hlavicka/datum_vyplnenia');

//	return "<?xml version=\"1.0\" encoding=\"ISO-8859-2\"?>" + xmlDoc.xml;
	return xmlDoc.xml;
}

// nastavi hodnotu elementu predanou hodnotou
// theNode - element, ktoreho hodnotu chceme nastavit
// theValue - hodnota, na ktoru ma byt nastavena hodnota elementu
// xPath - xPath spracovavaneho elementu (pouzity len pri vypise chyboveho hlasenia)
function setUpNode(theNode, theValue, xPath) {
	if(theNode != null) {
		theNode.text = theValue;
	} else {
		alert('setUpNode(): Pre ' + xPath + ' node nenajdeny');
	}
}

// nastavi hodnotu elementu reprezentujuceho datum (vo formulari su to tri polia oddelene bodkami, v XML len jeden element)
// theNode - element, ktoreho hodnotu chceme nastavit
// dayObj, monthObj, yearObj - inputy formulara obsahujuce den, mesiac a rok (datum)
// xPath - xPath spracovavaneho elementu (pouzity len pri vypise chyboveho hlasenia)
function setUpDateNode(theNode, dayObj, monthObj, yearObj, xPath) {
	tempString = '';

	if(yearObj.value != '') {
		tempString = '200';
	}

	if(theNode != null) {
		if(dayObj.value != '' || monthObj.value != '' || yearObj.value != '') {
			setUpNode(theNode, dayObj.value + '.' + monthObj.value + '.' + tempString + yearObj.value, xPath);
		}
	} else {
		alert('setUpDateNode(): Pre ' + xPath + ' node nenajdeny');
	}
}

// nastavi inputy pre tel. alebo fax. cislo (vo formulari su to dve polia, v XML len jeden element - musim jeho obsah delit)
function setUpTelFaxNrs(theNode, predvolba, cislo) {
	var temp = theNode.text;

	if(temp != '0/') {
		predvolba.value = temp.substr(1, temp.indexOf('/') - 1);
		cislo.value = temp.substr(temp.lastIndexOf('/') + 1)
	}
}

// nastavi inputy pre datum (vo formulari su to tri polia, v XML len jeden element - musim jeho obsah delit)
function setUpDates(theNode, theDay, theMonth, theYear) {
	var temp = theNode.text;

	theDay.value = temp.substring(0, temp.indexOf('.'));
	theMonth.value = temp.substring(temp.indexOf('.') + 1, temp.lastIndexOf('.'));
	theYear.value = temp.substr(temp.lastIndexOf('.') + 1)
}

// odpali onChange eventy (tie zabezpecia spravne nastavenie znamienka pre hodnoty,
// ktore sa do fdf vkladaju ako dvojice znamienko-hodnota)
function setUpSigns() {
	getObj('0_1_0_1').fireEvent("onChange");
	getObj('0_1_21').fireEvent("onChange");
	getObj('0_1_22').fireEvent("onChange");
	getObj('0_1_24').fireEvent("onChange");
	getObj('0_1_48_3').fireEvent("onChange");
	getObj('0_1_50').fireEvent("onChange");
	getObj('0_1_58').fireEvent("onChange");
}

// nastavi combo-box hodnotou jemu zodpovedajuceho inputu
function nastavComboZInputu(idi, idc) {
	var tempC = getObj(idc);
	var inputValue = getObj(idi).value;

	for(i = 0; i < tempC.options.length; ++i) {
		if(tempC.options[i].text == inputValue) {
			tempC.selectedIndex = i;
		}
	}
}

// zabezpeci nastavenie combo-boxov hodnotami im zodpovedajucich inputov
function nastavCombaZInputov() {
	nastavComboZInputu('0_0_10_0_0', 'comboDenDatum_0_0_10_0_0');
	nastavComboZInputu('0_0_10_0_1', 'comboMesiacDatum_0_0_10_0_1');
	nastavComboZInputu('0_0_10_1_0', 'comboDenDatum_0_0_10_1_0');
	nastavComboZInputu('0_0_10_1_1', 'comboMesiacDatum_0_0_10_1_1');
	nastavComboZInputu('0_0_11_0', 'comboDenDatum_0_0_11_0');
	nastavComboZInputu('0_0_11_1', 'comboMesiacDatum_0_0_11_1');
	nastavComboZInputu('0_1_43_0', 'comboDenDatum_0_1_43_0');
	nastavComboZInputu('0_1_43_1', 'comboMesiacDatum_0_1_43_1');
	nastavComboZInputu('0_1_44_0', 'comboDenDatum_0_1_44_0');
	nastavComboZInputu('0_1_44_1', 'comboMesiacDatum_0_1_44_1');
	nastavComboZInputu('0_1_48_0', 'comboDenDatum_0_1_48_0');
	nastavComboZInputu('0_1_48_1', 'comboMesiacDatum_0_1_48_1');
	nastavComboZInputu('0_1_52_0', 'comboDenDatum_0_1_52_0');
	nastavComboZInputu('0_1_52_1', 'comboMesiacDatum_0_1_52_1');
	nastavComboZInputu('0_1_64_0_0_0', 'comboTabF_0_1_64_0_0_0');
	nastavComboZInputu('0_1_64_0_1_0', 'comboTabF_0_1_64_0_1_0');
	nastavComboZInputu('0_1_64_0_2_0', 'comboTabF_0_1_64_0_2_0');
	nastavComboZInputu('0_1_64_0_3_0', 'comboTabF_0_1_64_0_3_0');
	nastavComboZInputu('0_1_64_0_4_0', 'comboTabF_0_1_64_0_4_0');
	nastavComboZInputu('0_1_64_0_5_0', 'comboTabF_0_1_64_0_5_0');
	nastavComboZInputu('0_1_64_0_6_0', 'comboTabF_0_1_64_0_6_0');
	nastavComboZInputu('0_1_64_0_7_0', 'comboTabF_0_1_64_0_7_0');
}

// (po automatickom vyplneni formulara hodnotami z XML) zabezpeci upravu hodnot
// inputov pre roky a nastavenie combo boxov pre roky podla tyhto inputov
function nastavCombaRok() {
	upravInputANastavComboRok('0_0_10_2', 'comboRokDatum_0_0_10_2');
	upravInputANastavComboRok('0_0_11_2', 'comboRokDatum_0_0_11_2');
	upravInputANastavComboRok('0_1_43_2', 'comboRokDatum_0_1_43_2');
	upravInputANastavComboRok('0_1_44_2', 'comboRokDatum_0_1_44_2');
	upravInputANastavComboRok('0_1_48_2', 'comboRokDatum_0_1_48_2');
	upravInputANastavComboRok('0_1_52_2', 'comboRokDatum_0_1_52_2');
}

// nastavi radio input pre typ DP podla zodpovedajucich inputov
function setUpDPTypeRadio() {
	if(getObj('0_0_0_0').value == 1) {
		document.forms['formular'].elements['radioTypDp'][0].checked = true;
	}
	if(getObj('0_0_0_1').value == 1) {
		document.forms['formular'].elements['radioTypDp'][1].checked = true;
	}
	if(getObj('0_0_0_2').value == 1) {
		document.forms['formular'].elements['radioTypDp'][2].checked = true;
	}
}

// zabezpeci nastavenie combo boxov podla zodpovedajucich inputov (pokial su inputy naplnene z XML v nespravnom tvare, upravi najprv ich hodnoty - napr. z '2003' na '3')
function upravInputANastavComboRok(inputId, comboId) {
	if(getObj(inputId).value != '') {
		if(parseInt(getObj(inputId).value, 10) != NaN) {
			getObj(inputId).value = parseInt(getObj(inputId).value, 10) - 2000;
		} else {
			// neciselna hodnota v elemente rok - tato situacia by nemala nastat
		}
	}

	nastavComboZInputu(inputId, comboId);
}

// (pri naplnani formulara) upravi hodnotu na riadku 500 (na formulari su predtlacene 'tisice', preto upravujeme hodnotu nacitanu z XML)
function setUpR500() {
	var r500 = getObj('0_1_32');
	if(parseInt(r500.value, 10) != NaN && parseInt(r500.value, 10) != 0 && parseInt(r500.value, 10) == r500.value) {
		r500.value = parseInt(r500.value, 10) / 1000;
	}
}

// (pri naplnani formulara) upravi hodnotu na riadku 800 (na formulari su predtlacene 'stovky', preto upravujeme hodnotu nacitanu z XML)
function setUpR800() {
	var r800 = getObj('0_1_42');
	if(parseInt(r800.value, 10) != NaN && parseInt(r800.value, 10) != 0 && parseInt(r800.value, 10) == r800.value) {
		r800.value = parseInt(r800.value, 10) / 100;
	}
}

// Funkcia zabezpeci naplnenia identifikacnych poli osoby vo formulari hodnotami
// obsiahnutymi v predanom stringu (cast XML dokumentu) a uzamknutie (disabled = true)
// poli obsahujucich identifikacne udaje.
// Navratova hodnota (boolean):
//			true - naplnanie prebehlo korektne
//			false - chyba pri naplnani (chybny XML dok., nespravny XML dok. ...)
function fillTheIdentity(identityFilling) {
	var xml = "<dokument xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"universal.xsd\">" +
	"<hlavicka err=\"0\"><typDP><rdp err=\"0\">1</rdp><odp err=\"0\">0</odp><ddp err=\"0\">0</ddp></typDP><danovy_urad err=\"0\"></danovy_urad><kod_do err=\"0\"></kod_do>" +
	identityFilling.substring(identityFilling.indexOf("<dic "), identityFilling.indexOf("</dppoIdentityFill>")) +
	"<opravnena_osoba><priezvisko err=\"0\"></priezvisko><meno err=\"0\"></meno><titul err=\"0\"></titul><postavenie err=\"0\"></postavenie><sidlo_oo><ulicacislo err=\"0\"></ulicacislo><psc err=\"0\"></psc><obec err=\"0\"></obec><stat err=\"0\"></stat><tel err=\"0\">0/</tel><fax err=\"0\">0/</fax></sidlo_oo></opravnena_osoba><pocet_priloh err=\"0\"></pocet_priloh><zdanovacie_obd><datum_od><den err=\"0\"></den><mesiac err=\"0\"></mesiac></datum_od><datum_do><den err=\"0\"></den><mesiac err=\"0\"></mesiac></datum_do><rok err=\"0\"></rok></zdanovacie_obd><datum_vyplnenia err=\"0\"></datum_vyplnenia>" +
	"</hlavicka>" +
	"<body><r100 err=\"0\"></r100><r110 err=\"0\"></r110><r120 err=\"0\"></r120><r130 err=\"0\"></r130><r140 err=\"0\"></r140><r150 err=\"0\"></r150><r160 err=\"0\"></r160><r170 err=\"0\"></r170><r180 err=\"0\"></r180><r190 err=\"0\"></r190><r200 err=\"0\"></r200><r210 err=\"0\"></r210><r220 err=\"0\"></r220><r230 err=\"0\"></r230><r240 err=\"0\"></r240><r250 err=\"0\"></r250><r260 err=\"0\"></r260><r270 err=\"0\"></r270><r280 err=\"0\"></r280><r290 err=\"0\"></r290><r300 err=\"0\"></r300><r310 err=\"0\"></r310><r320 err=\"0\"></r320><r330 err=\"0\"></r330><r400 err=\"0\"></r400><r410 err=\"0\"></r410><r420 err=\"0\"></r420><r430 err=\"0\"></r430><r440 err=\"0\"></r440><r450 err=\"0\"></r450><r460 err=\"0\"></r460><r470 err=\"0\"></r470><r500 err=\"0\"></r500><r510 err=\"0\"></r510>" +
	"<r600 err=\"0\"></r600><r610><text err=\"0\"></text><suma err=\"0\"></suma></r610><r620><text err=\"0\"></text><suma err=\"0\"></suma></r620><r630 err=\"0\"></r630><r640 err=\"0\"></r640><r650 err=\"0\"></r650><r700 err=\"0\"></r700><r710 err=\"0\"></r710><r800 err=\"0\"></r800><r810><datum err=\"0\"></datum><suma err=\"0\"></suma></r810><r820><datum err=\"0\"></datum><suma err=\"0\"></suma></r820><r830 err=\"0\"></r830><r840 err=\"0\"></r840><r850 err=\"0\"></r850><r900><datum err=\"0\"></datum><suma err=\"0\"></suma></r900><r901 err=\"0\"></r901><r902 err=\"0\"></r902><r910 err=\"0\"></r910><ddp_datum err=\"0\"></ddp_datum><r920 err=\"0\"></r920><r930 err=\"0\"></r930><r940 err=\"0\"></r940><r950 err=\"0\"></r950><r960 err=\"0\"></r960><r970 err=\"0\"></r970>" +
	"<tab_a><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04><r05 err=\"0\"></r05><r06 err=\"0\"></r06><r07 err=\"0\"></r07><r08 err=\"0\"></r08><r09 err=\"0\"></r09><r10 err=\"0\"></r10><r11 err=\"0\"></r11><r12 err=\"0\"></r12><r13 err=\"0\"></r13><r14 err=\"0\"></r14><r15 err=\"0\"></r15><r16 err=\"0\"></r16><r17 err=\"0\"></r17><r18 err=\"0\"></r18><r19 err=\"0\"></r19></tab_a><tab_b><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03></tab_b><tab_c><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03></tab_c><tab_d><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04><r05 err=\"0\"></r05></tab_d><tab_e><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04><r05 err=\"0\"></r05><r06 err=\"0\"></r06></tab_e>" +
	"<tab_f><cast1><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok></cast1>" +
	"<cast2><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok></cast2>" +
	"<cast3><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok><riadok><s01 err=\"0\"></s01><s02 err=\"0\"></s02><s03 err=\"0\"></s03><s04 err=\"0\"></s04></riadok></cast3></tab_f>" +
	"<tab_g><r01 err=\"0\"></r01><r02 err=\"0\"></r02></tab_g><tab_h><r01 err=\"0\"></r01><r02 err=\"0\"></r02><r03 err=\"0\"></r03><r04 err=\"0\"></r04></tab_h>" +
	"</body>" +
	"</dokument>";
	
	if(fillTheForm(xml)) {
		lockIDs();

		return true;
	} else {
		return false;
	}
}

// Funkcia uzamkne (disabled = true) polia formulara obsahujuce identifikacne udaje
function lockIDs() {
	document.forms['formular'].elements['0_0_3'].disabled = true;
	document.forms['formular'].elements['0_0_4'].disabled = true;
}

// Funkcia uvolni (disabled = false) polia formulara obsahujuce identifikacne udaje
function unlockIDs() {
	document.forms['formular'].elements['0_0_3'].disabled = false;
	document.forms['formular'].elements['0_0_4'].disabled = false;
}
