function Tlac() {
	var vysledok = '';
	var ideme = 1
	var logicka_chyba = 0
	var inputChyby

	for(i = 0; i < inputy.length; i++) {
		hodnota = getObj(inputy[i]).value;
		if(inputyUpperCase[inputy[i]] != null) {
			hodnota = hodnota.toUpperCase();
		}

		if(inputyTypy[inputy[i]] == 'cislo') {
			vysledok = vysledok + '<< /V (' + hodnota + ')/T (' + inputyMena[inputy[i]] + ')>>'
		}

		if(inputyTypy[inputy[i]] == 'checkbox') {
			if(getObj(inputy[i]).value == '1') 
				hodnota = 'x'
			else 
				hodnota = ''
			vysledok = vysledok + '<< /V (' + hodnota + ')/T (' + inputyMena[inputy[i]] + ')>>'
		}

		if(inputyTypy[inputy[i]] == 'znamienko') {
			if(!jePrazdny(getObj(inputy[i]).value)) {
				hodnota = parseInt(getObj(inputy[i]).value, 10)
				if(hodnota < 0) 
					hodnota = 0 - hodnota
				vysledok = vysledok + '<< /V (' + hodnota + ')/T (' + inputyMena[inputy[i]] + ')>>'
			}
		}
	}

	kontrolaKP = checkForm();

	if(kontrolaKP == '') {
		var result = '';

		// Pre potreby Ditec-u je vysledny retazec reprezentujuci FDF prekodovany
		for(i = 0, j = vysledok.length; i < j; i++) {
			result += String.fromCharCode(getIso88592Code(vysledok.charCodeAt(i)));
		}
		
		var typDPAndResult = new Array();
		typDPAndResult[0] = 'DPPO2003';
		typDPAndResult[1] = result;
		
		showModelessDialog('pdfDeclOfTaxes.html', typDPAndResult);
	} else {
		alert(kontrolaKP);
	}
}

function checkForm() {
	var errMsg = '';
	
	for(i = 0; i < inputy.length; i++) {
		if(getObjBackground(inputy[i]) == COLOR_SE) {
			errMsg = "V dokumente sú syntaktické chyby.";
		}
	}
	
	if(errMsg == '') {
		errMsg = kontrolaKritickychPoli();
	}

	return errMsg;
}

function kontrolaKritickychPoli() {
	dic = getObj(inputyId['dic']).value;
	obchMeno = getObj(inputyId['obch_meno']).value;
	obec = getObj(inputyId['obec']).value;
	pravForm = getObj(inputyId['pravna_forma']).value;

	if(dic.length < 9) {
		fokus('dic');
		return 'Na DP nie je spávne vyplnené Daòové identifikaèné èíslo.';
	}

	if(pravForm.length < 3) {
		fokus('pravna_forma');
		return 'Na DP nie je spávne vyplnená právna forma.';
	}

	if(!otestujDatum('datum_od_den','datum_od_mesiac','rok',true)) {
		fokusCombo('datum_od_den');
		return  'Máte chybný dátum zdaòovacieho obdobia (Od).';
	}

	if(!otestujDatum('datum_do_den','datum_do_mesiac','rok',true)) {
		fokusCombo('datum_do_den');
		return  'Máte chybný dátum zdanovacieho obdobia (Do).';
	}

	if(!jeDatumMensiAkoDatum('datum_od_den','datum_od_mesiac','rok','datum_do_den','datum_do_mesiac','rok')) {
		fokusCombo('datum_od_den');
		return  'Dátum zdaòovacieho obdobia (Do) je men¹í ako dátum zdaòovacieho obdobia (Od).';
	}

	if(!jeMensiAkosucasnyDatum('datum_do_den','datum_do_mesiac','rok')) {
		fokusCombo('datum_do_den');
		return 'Na DP je vyplnené neukonèené zdaòovacie obdobie.';
	}

	if(jePrazdny(obchMeno)) {
		fokus('obch_meno');
		return 'Na DP nie je vyplnené obchodného meno.';
	}

	if(jePrazdny(obec)) {
		fokus('obec');
		return 'Na DP nie je vyplnená Obec.';
	}

	if(!otestujDlzkuBezZnamienka('r100',11)) {
		fokus('r100');
		return  'Na riadku 100 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r310',11)) {
		fokus('r310');
		return  'Na riadku 310 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r320',11)) {
		fokus('r320');
		return  'Na riadku 320 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r400',11)) {
		fokus('r400');
		return  'Na riadku 400 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r900',11)) {
		fokus('r900');
		return  'Na riadku 900 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r902',11)) {
		fokus('r902');
		return  'Na riadku 902 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r940',11)) {
		fokus('r940');
		return  'Na riadku 940 je príli¹ veµké èíslo.';
	}

	if(!otestujDlzkuBezZnamienka('r970',11)) {
		fokus('r970');
		return  'Na riadku 970 je príli¹ veµké èíslo.';
	}

	if(!otestujDatum('r810_den','r810_mesiac','r810_rok',false)) {
		fokusCombo('r810_den');
		return  'Máte chybný dátum na riadku 810.';
	}

	if(!otestujDatum('r820_den','r820_mesiac','r820_rok',false)) {
		fokusCombo('r820_den');
		return  'Máte chybný dátum na riadku 820.';
	}

	if(!otestujDatum('r900_den','r900_mesiac','r900_rok',false)) {
		fokusCombo('r900_den');
		return  'Máte chybný dátum na riadku 900.';
	}

	if(!otestujDatum('ddp_den','ddp_mesiac','ddp_rok',false)) {
		fokusCombo('ddp_den');
		return  'Máte chybný dátum zistenia vy¹¹ej daòovej povinnosti.';
	}

	if(!otestujDatum('datum_den','datum_mesiac','datum_rok',true)) {
		fokusCombo('datum_den');
		return  'Máte chybný dátum vyplnenia.';
	}

	if(!jeMensiAkosucasnyDatum('datum_den','datum_mesiac','datum_rok')) {
		fokusCombo('datum_den');
		return 'Dátum vyplnenia formulára je väè¹í ako dne¹ný.';
	}

	return '';
}

function nastavInputTypDp(ktory,rdp,odp,ddp) {
	if(ktory == "rdp") {
		getObj(rdp).value = 1
		getObj(odp).value = 0
		getObj(ddp).value = 0
	}
	if(ktory == "odp") {
		getObj(rdp).value = 0
		getObj(odp).value = 1
		getObj(ddp).value = 0
	}
	if(ktory == "ddp") {
		getObj(rdp).value = 0
		getObj(odp).value = 0
		getObj(ddp).value = 1
	}
} 

function nastavInputZComba(idc,idi) {
	getObj(idi).value = getObj(idc).options[getObj(idc).selectedIndex].text
}

function nastavInputValZComba(idc,idi) {
	getObj(idi).value = getObj(idc).options[getObj(idc).selectedIndex].value
}

function otestujDatum(comboDenDatum,comboMesiacDatum,comboRokDatum,absolutly) {
	denV = getObj('comboDenDatum_' + inputyId[comboDenDatum]).options[getObj('comboDenDatum_' + inputyId[comboDenDatum]).selectedIndex].text
	mesiacV = getObj('comboMesiacDatum_' + inputyId[comboMesiacDatum]).options[getObj('comboMesiacDatum_' + inputyId[comboMesiacDatum]).selectedIndex].text
	rokV = getObj('comboRokDatum_' + inputyId[comboRokDatum]).options[getObj('comboRokDatum_' + inputyId[comboRokDatum]).selectedIndex].text

	if(absolutly) {
		if(denV == '' || mesiacV == '' || rokV == '') {
			return false;
		}
	} else {
		if(denV == '' && mesiacV == '' && rokV == '') {
			return true;
		}
	}

	rokV = "200" + rokV

	denV = (0 - (- denV));
	mesiacV = (0 - (-mesiacV));
	rokV = (0 - ( -rokV));

	if(testDate(denV + "." + mesiacV + "." + rokV))
		return true;
	return false;
}

function otestujDlzkuBezZnamienka(id,dlzka) {
	hodnota = getObj(inputyId[id]).value;
	if(parseInt(hodnota, 10) > 0) {
		if(hodnota.length > dlzka) {
			return false;
		}
		else {
			return true;
		}
	} else {
		if(hodnota.length > dlzka + 1) {
			return false;
		} else {
			return true;
		}
	}
}

function fokus(name) {
	getObj(inputyId[name]).focus();
}

function fokusCombo(name) {
	getObj('comboDenDatum_' + inputyId[name]).focus()
}

function zmenZnamienko(input,inputZn) {
	val = parseInt(getObj(input).value, 10)
	if(val < 0)
		getObj(inputZn).value = '-'
	else 
		getObj(inputZn).value = '+'
}

function jePrazdny(retazec) {
		if(retazec == '')
			return true;
		for(j = 0; j < retazec.length; j++) {
			if(retazec.charAt(j) != ' ' && retazec.charAt(j) != '\t')
				return false;
		}
		return true;
}

function changeComboInput(combo,input)  {
	if(getObj(input).style.display ==  'none') {
		getObj(input).style.display = 'inline'
		getObj(combo).style.display = 'none'
		getObj(combo).disabled = true
	} else {
		getObj(input).style.display = 'none'
		getObj(combo).style.display = 'inline'
		getObj(combo).disabled = false
	}
}

function changeComboInputC(combo,input)  {
	if(getObj(combo).style.display !=  'none') {
		getObj(combo).style.display = 'none'
		getObj(combo).disabled = true
	} else {
		getObj(combo).style.display = 'inline'
		getObj(combo).disabled = false
	}
}

function changeComboInputs(combo,input1,input2)  {
	if(getObj(input1).style.display ==  'none') {
		getObj(input1).style.display = 'inline'
		getObj(input2).style.display = 'inline'
		getObj(combo).style.display = 'none'
		getObj(combo).disabled = true
	} else {
		getObj(input1).style.display = 'none'
		getObj(input2).style.display = 'none'
		getObj(combo).style.display = 'inline'
		getObj(combo).disabled = false
	}
}

function jeMensiRovnyAkosucasnyDatum(denC,mesiacC,rokC) {
	sucasnyDatum = new Date();
	den = getObj(denC).options[getObj(denC).selectedIndex].text;
	mesiac = getObj(mesiacC).options[getObj(mesiacC).selectedIndex].text;
	rok = 2000 + parseInt(getObj(rokC).options[getObj(rokC).selectedIndex].text, 10);

	den = (0 - (- den));
	mesiac = (0 - (-mesiac));
	rok = (0 - ( -rok));

	mesiac = parseInt(mesiac, 10) - 1;
	datum = new Date();
	datum.setYear(parseInt(rok, 10));
	datum.setMonth(mesiac);
	datum.setDate(den);
	if(datum.getTime() <= sucasnyDatum.getTime())
		return true;
	else
		return false;
}

function jeMensiAkosucasnyDatum(denC,mesiacC,rokC) {
	sucasnyDatum = new Date();
	den = getObj('comboDenDatum_' + inputyId[denC]).options[getObj('comboDenDatum_' + inputyId[denC]).selectedIndex].text
	mesiac = getObj('comboMesiacDatum_' + inputyId[mesiacC]).options[getObj('comboMesiacDatum_' + inputyId[mesiacC]).selectedIndex].text
	rok = getObj('comboRokDatum_' + inputyId[rokC]).options[getObj('comboRokDatum_' + inputyId[rokC]).selectedIndex].text
	rok = 2000 + parseInt(rok, 10);

	den = (0 - (- den));
	mesiac = (0 - (-mesiac));
	rok = (0 - ( -rok));

	mesiac = parseInt(mesiac, 10) - 1;
	datum = new Date();
	datum.setYear(parseInt(rok, 10));
	datum.setMonth(mesiac);
	datum.setDate(den);
	if(datum.getTime() <= sucasnyDatum.getTime())
		return true;
	else
		return false;
}

function jeDatumMensiAkoDatum(denC,mesiacC,rokC,denD,mesiacD,rokD) {
	den1 = getObj('comboDenDatum_' + inputyId[denC]).options[getObj('comboDenDatum_' + inputyId[denC]).selectedIndex].text
	mesiac1 = getObj('comboMesiacDatum_' + inputyId[mesiacC]).options[getObj('comboMesiacDatum_' + inputyId[mesiacC]).selectedIndex].text
	rok1 = getObj('comboRokDatum_' + inputyId[rokC]).options[getObj('comboRokDatum_' + inputyId[rokC]).selectedIndex].text

	den2 = getObj('comboDenDatum_' + inputyId[denD]).options[getObj('comboDenDatum_' + inputyId[denD]).selectedIndex].text
	mesiac2 = getObj('comboMesiacDatum_' + inputyId[mesiacD]).options[getObj('comboMesiacDatum_' + inputyId[mesiacD]).selectedIndex].text
	rok2 = getObj('comboRokDatum_' + inputyId[rokD]).options[getObj('comboRokDatum_' + inputyId[rokD]).selectedIndex].text

	den1 = (0 - (- den1));
	mesiac1 = (0 - (-mesiac1));
	rok1 = (0 - ( -rok1));

	den2 = (0 - (- den2));
	mesiac2 = (0 - (-mesiac2));
	rok2 = (0 - ( -rok2));

	rok1 = 2000 + parseInt(rok1, 10);
	rok2 = 2000 + parseInt(rok2, 10);

	mesiac1 = parseInt(mesiac1, 10) - 1;
	mesiac2 = parseInt(mesiac2, 10) - 1;

	datum1 = new Date();
	datum1.setYear(parseInt(rok1, 10));
	datum1.setMonth(mesiac1);
	datum1.setDate(den1);

	datum2 = new Date();
	datum2.setYear(parseInt(rok2, 10));
	datum2.setMonth(mesiac2);
	datum2.setDate(den2);

	if(datum1.getTime() < datum2.getTime())
		return true;
	else
		return false;
}
