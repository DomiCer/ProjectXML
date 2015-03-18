

Certificate 
	- obsahuje certifikat (podpisovatel.cer) a privatny kluc (podpisovatel.pfx)
	- dalej su tam info certifikate certifikacnej autority + linka na CRL

DSigClient
	- www.slovensko.sk DSigner (vyzaduje .NET 2.0 alebo 3.5)
	- zaroven je k dispoziicii specifikacia pre podpisovac + xml plugin ako aj pouzivatelska prirucka
	- testXmlAtl.htm je priklad pouzitia komponentu na podpisovanie v HTML stranke

FormatPodpisu
	- obsahuje dokumenty definujuce format podpisu ako ho vytvara D.Signer XAdES
	- zaroven su tu linky a dokumenty na XML Signature + XAdES specifikaciu
	- odporucam si to precitat v nasledovnom poradi (aby ste orientacne mali predstavu o pojmoch a strukture)
		1. xmlsignature
		2. xades (zamerat sa na EPES a XadesT format)
		3. profil xades zep + format datovych objektov (zamerat sa na EPES + xadesT)


Sample
	- ukazka pouzitia podpisovana na formulary danoveho priznania
