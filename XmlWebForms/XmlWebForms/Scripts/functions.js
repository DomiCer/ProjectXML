// Funkcia naplni formular hodnotami obsiahnutymi v predanom stringu (XML dokument).
// Zabezpeci validaciu poli formulara.
// Zabezpeci uvolnenie (odomknutie) poli formulara obsahujucich identifikacne udaje.
// Navratova hodnota (boolean):
//			true - naplnanie prebehlo korektne
//			false - chyba pri naplnani (chybny XML dok., nespravny XML dok. ...)


// Funkcia ulozi hodnoty formulara v zodpovedajucom XML dokumente.
// Navratova hodnota (string):
//			XML dokument obsahujuci hodnoty z formulara
function storeTheForm() {
    var xml = document.getElementById('iXML').value;
		
    var xmlDoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument");
    xmlDoc.async = false;
    xmlDoc.validateOnParse = false;
    xmlDoc.loadXML(xml);
    
    //	return "<?xml version=\"1.0\" encoding=\"ISO-8859-2\"?>" + xmlDoc.xml;
    return xmlDoc.xml;
}

