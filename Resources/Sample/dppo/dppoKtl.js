function rule0(){
}
function step1_0(){
	r=and(gT(eq(gV("0_0_3"),gV("0_0_3"))),gT(compNumbers(gV(length(gT("0_0_3"))),gV("9"),">=")))
	if(r!="error"&&(r)){
		setOk("0_0_3")
		return true
	}else{
		if(getObjBackground("0_0_3")!=COLOR_SE){
			setBad("0_0_3")
		}
		return true
	}
}
function help1_1(){
	r="Diè musí obsahova» min. 9 èíslic"
	setTitle("0_0_3",r)
}
function step1_2(){
	r=or(gT(and(gT(eq(gV("0_0_4"),gV("0_0_4"))),gT(eq(gV(length(gT("0_0_4"))),gV("8"))))),gT(eq(gV(length(gT("0_0_4"))),gV("0"))))
	if(r!="error"&&(r)){
		setOk("0_0_4")
		return true
	}else{
		if(getObjBackground("0_0_4")!=COLOR_SE){
			setBad("0_0_4")
		}
		return true
	}
}
function help1_3(){
	r="Ièo musí obsahova» 8 èíslic"
	setTitle("0_0_4",r)
}
function step1_4(){
	r=compNumbers(gV(length(gT("0_0_6"))),gV("1"),">=")
	if(r!="error"&&(r)){
		setOk("0_0_6")
		return true
	}else{
		if(getObjBackground("0_0_6")!=COLOR_SE){
			setBad("0_0_6")
		}
		return true
	}
}
function help1_5(){
	r="Obchodné meno musí obsahova» min. 1 znak"
	setTitle("0_0_6",r)
}
function step1_6(){
	r=and(gT(eq(gV("0_0_5"),gV("0_0_5"))),gT(eq(gV(length(gT("0_0_5"))),gV("3"))))
	if(r!="error"&&(r)){
		setOk("0_0_5")
		return true
	}else{
		if(getObjBackground("0_0_5")!=COLOR_SE){
			setBad("0_0_5")
		}
		return true
	}
}
function help1_7(){
	r="Právna forma musí obsahova» 3 èíslice"
	setTitle("0_0_5",r)
}
function step1_8(){
	r=eq(gV("0_0_7_2"),gV("0_0_7_2"))
	if(r!="error"&&(r)){
		setOk("0_0_7_2")
		return true
	}else{
		if(getObjBackground("0_0_7_2")!=COLOR_SE){
			setBad("0_0_7_2")
		}
		return true
	}
}
function step1_9(){
	r=compNumbers(gV(length(gT("0_0_7_3"))),gV("1"),">=")
	if(r!="error"&&(r)){
		setOk("0_0_7_3")
		return true
	}else{
		if(getObjBackground("0_0_7_3")!=COLOR_SE){
			setBad("0_0_7_3")
		}
		return true
	}
}
function help1_10(){
	r="Obec musí obsahova» min. 1 znak"
	setTitle("0_0_7_3",r)
}
function step1_11(){
	r=eq(gV("0_0_7_5"),gV("0_0_7_5"))
	if(r!="error"&&(r)){
		setOk("0_0_7_5")
		return true
	}else{
		if(getObjBackground("0_0_7_5")!=COLOR_SE){
			setBad("0_0_7_5")
		}
		return true
	}
}
function step1_12(){
	r=eq(gV("0_0_7_6"),gV("0_0_7_6"))
	if(r!="error"&&(r)){
		setOk("0_0_7_6")
		return true
	}else{
		if(getObjBackground("0_0_7_6")!=COLOR_SE){
			setBad("0_0_7_6")
		}
		return true
	}
}
function step1_13(){
	r=eq(gV("0_0_7_7"),gV("0_0_7_7"))
	if(r!="error"&&(r)){
		setOk("0_0_7_7")
		return true
	}else{
		if(getObjBackground("0_0_7_7")!=COLOR_SE){
			setBad("0_0_7_7")
		}
		return true
	}
}
function step1_14(){
	r=eq(gV("0_0_7_8"),gV("0_0_7_8"))
	if(r!="error"&&(r)){
		setOk("0_0_7_8")
		return true
	}else{
		if(getObjBackground("0_0_7_8")!=COLOR_SE){
			setBad("0_0_7_8")
		}
		return true
	}
}
function step1_15(){
	r=eq(gV("0_0_7_9_2"),gV("0_0_7_9_2"))
	if(r!="error"&&(r)){
		setOk("0_0_7_9_2")
		return true
	}else{
		if(getObjBackground("0_0_7_9_2")!=COLOR_SE){
			setBad("0_0_7_9_2")
		}
		return true
	}
}
function step1_16(){
	r=eq(gV("0_0_7_10_2"),gV("0_0_7_10_2"))
	if(r!="error"&&(r)){
		setOk("0_0_7_10_2")
		return true
	}else{
		if(getObjBackground("0_0_7_10_2")!=COLOR_SE){
			setBad("0_0_7_10_2")
		}
		return true
	}
}
function step1_17(){
	r=eq(gV("0_0_8_4_1"),gV("0_0_8_4_1"))
	if(r!="error"&&(r)){
		setOk("0_0_8_4_1")
		return true
	}else{
		if(getObjBackground("0_0_8_4_1")!=COLOR_SE){
			setBad("0_0_8_4_1")
		}
		return true
	}
}
function step1_18(){
	r=eq(gV("0_0_8_4_4"),gV("0_0_8_4_4"))
	if(r!="error"&&(r)){
		setOk("0_0_8_4_4")
		return true
	}else{
		if(getObjBackground("0_0_8_4_4")!=COLOR_SE){
			setBad("0_0_8_4_4")
		}
		return true
	}
}
function step1_19(){
	r=eq(gV("0_0_8_4_5"),gV("0_0_8_4_5"))
	if(r!="error"&&(r)){
		setOk("0_0_8_4_5")
		return true
	}else{
		if(getObjBackground("0_0_8_4_5")!=COLOR_SE){
			setBad("0_0_8_4_5")
		}
		return true
	}
}
function step1_20(){
	r=eq(gV("0_0_8_4_6"),gV("0_0_8_4_6"))
	if(r!="error"&&(r)){
		setOk("0_0_8_4_6")
		return true
	}else{
		if(getObjBackground("0_0_8_4_6")!=COLOR_SE){
			setBad("0_0_8_4_6")
		}
		return true
	}
}
function step1_21(){
	r=eq(gV("0_0_8_4_7"),gV("0_0_8_4_7"))
	if(r!="error"&&(r)){
		setOk("0_0_8_4_7")
		return true
	}else{
		if(getObjBackground("0_0_8_4_7")!=COLOR_SE){
			setBad("0_0_8_4_7")
		}
		return true
	}
}
function rule1(){
	if(!(step1_0())){
		return
	}
	help1_1()
	if(!(step1_2())){
		return
	}
	help1_3()
	if(!(step1_4())){
		return
	}
	help1_5()
	if(!(step1_6())){
		return
	}
	help1_7()
	if(!(step1_8())){
		return
	}
	if(!(step1_9())){
		return
	}
	help1_10()
	if(!(step1_11())){
		return
	}
	if(!(step1_12())){
		return
	}
	if(!(step1_13())){
		return
	}
	if(!(step1_14())){
		return
	}
	if(!(step1_15())){
		return
	}
	if(!(step1_16())){
		return
	}
	if(!(step1_17())){
		return
	}
	if(!(step1_18())){
		return
	}
	if(!(step1_19())){
		return
	}
	if(!(step1_20())){
		return
	}
	if(!(step1_21())){
		return
	}
}
var riadok100
function step2_1(){
	r=and(gT(eq(gV("0_1_0_1"),gV(riadok100))),gT(isInt(gV("0_1_0_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_0_1")
		return true
	}else{
		if(getObjBackground("0_1_0_1")!=COLOR_SE){
			setBad("0_1_0_1")
		}
		return true
	}
}
function help2_2(){
	r=concat(gT(riadok100 ),gT(" \(Tab. H r1 - Tab. H r2\)"))
	setTitle("0_1_0_1",r)
}
function rule2(){
	riadok100 = minus(gV("0_1_66_0"),gV("0_1_66_1"))
	if(!(step2_1())){
		return
	}
	help2_2()
}
function step3_0(){
	r=and(gT(compNumbers(gV("0_1_1"),gV("0"),">=")),gT(isInt(gV("0_1_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_1")
		return true
	}else{
		if(getObjBackground("0_1_1")!=COLOR_SE){
			setBad("0_1_1")
		}
		return true
	}
}
function help3_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_1",r)
}
function rule3(){
	if(!(step3_0())){
		return
	}
	help3_1()
}
function step4_0(){
	r=and(gT(compNumbers(gV("0_1_2"),gV("0"),">=")),gT(isInt(gV("0_1_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_2")
		return true
	}else{
		if(getObjBackground("0_1_2")!=COLOR_SE){
			setBad("0_1_2")
		}
		return true
	}
}
function help4_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_2",r)
}
function rule4(){
	if(!(step4_0())){
		return
	}
	help4_1()
}
var riadok130
function step5_1(){
	r=and(gT(and(gT(compNumbers(gV("0_1_3"),gV("0_1_59_18"),"<=")),gT(compNumbers(gV("0_1_3"),gV("0"),">=")))),gT(isInt(gV("0_1_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_3")
		return true
	}else{
		if(getObjBackground("0_1_3")!=COLOR_SE){
			setBad("0_1_3")
		}
		return true
	}
}
function help5_2(){
	r="<= Tab. A r19\)"
	setTitle("0_1_3",r)
}
function rule5(){
	riadok130 = max(gV("0"),gV("0_1_59_18"))
	if(!(step5_1())){
		return
	}
	help5_2()
}
function step6_0(){
	r=and(gT(compNumbers(gV("0_1_4"),gV("0"),">=")),gT(isInt(gV("0_1_4"))))
	if(r!="error"&&(r)){
		setOk("0_1_4")
		return true
	}else{
		if(getObjBackground("0_1_4")!=COLOR_SE){
			setBad("0_1_4")
		}
		return true
	}
}
function help6_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_4",r)
}
function rule6(){
	if(!(step6_0())){
		return
	}
	help6_1()
}
function step7_0(){
	r=and(gT(compNumbers(gV("0_1_5"),gV("0"),">=")),gT(isInt(gV("0_1_5"))))
	if(r!="error"&&(r)){
		setOk("0_1_5")
		return true
	}else{
		if(getObjBackground("0_1_5")!=COLOR_SE){
			setBad("0_1_5")
		}
		return true
	}
}
function help7_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_5",r)
}
function rule7(){
	if(!(step7_0())){
		return
	}
	help7_1()
}
function step8_0(){
	r=and(gT(compNumbers(gV("0_1_6"),gV("0"),">=")),gT(isInt(gV("0_1_6"))))
	if(r!="error"&&(r)){
		setOk("0_1_6")
		return true
	}else{
		if(getObjBackground("0_1_6")!=COLOR_SE){
			setBad("0_1_6")
		}
		return true
	}
}
function help8_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_6",r)
}
function rule8(){
	if(!(step8_0())){
		return
	}
	help8_1()
}
function step9_0(){
	r=and(gT(compNumbers(gV("0_1_7"),gV("0"),">=")),gT(isInt(gV("0_1_7"))))
	if(r!="error"&&(r)){
		setOk("0_1_7")
		return true
	}else{
		if(getObjBackground("0_1_7")!=COLOR_SE){
			setBad("0_1_7")
		}
		return true
	}
}
function help9_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_7",r)
}
function rule9(){
	if(!(step9_0())){
		return
	}
	help9_1()
}
function step10_0(){
	r=and(gT(compNumbers(gV("0_1_8"),gV("0"),">=")),gT(isInt(gV("0_1_8"))))
	if(r!="error"&&(r)){
		setOk("0_1_8")
		return true
	}else{
		if(getObjBackground("0_1_8")!=COLOR_SE){
			setBad("0_1_8")
		}
		return true
	}
}
function help10_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_8",r)
}
function rule10(){
	if(!(step10_0())){
		return
	}
	help10_1()
}
function step11_0(){
	r=and(gT(compNumbers(gV("0_1_9"),gV("0"),">=")),gT(isInt(gV("0_1_9"))))
	if(r!="error"&&(r)){
		setOk("0_1_9")
		return true
	}else{
		if(getObjBackground("0_1_9")!=COLOR_SE){
			setBad("0_1_9")
		}
		return true
	}
}
function help11_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_9",r)
}
function rule11(){
	if(!(step11_0())){
		return
	}
	help11_1()
}
var riadok200
function step12_1(){
	r=and(gT(eq(gV("0_1_10"),gV(riadok200))),gT(isInt(gV("0_1_10"))))
	if(r!="error"&&(r)){
		setOk("0_1_10")
		return true
	}else{
		if(getObjBackground("0_1_10")!=COLOR_SE){
			setBad("0_1_10")
		}
		return true
	}
}
function help12_2(){
	r=concat(gT(riadok200 ),gT(" \(max\(0, r110 + r120 + r130 + r140 + r150 + r160 + r170 + r180 + r190\)\)"))
	setTitle("0_1_10",r)
}
function rule12(){
	riadok200 = max(gV("0"),gV(plus(gV("0_1_1"),gV(plus(gV("0_1_2"),gV(plus(gV("0_1_3"),gV(plus(gV("0_1_4"),gV(plus(gV("0_1_5"),gV(plus(gV("0_1_6"),gV(plus(gV("0_1_7"),gV(plus(gV("0_1_8"),gV("0_1_9"))))))))))))))))))
	if(!(step12_1())){
		return
	}
	help12_2()
}
function step13_0(){
	r=and(gT(compNumbers(gV("0_1_11"),gV("0"),">=")),gT(isInt(gV("0_1_11"))))
	if(r!="error"&&(r)){
		setOk("0_1_11")
		return true
	}else{
		if(getObjBackground("0_1_11")!=COLOR_SE){
			setBad("0_1_11")
		}
		return true
	}
}
function help13_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_11",r)
}
function rule13(){
	if(!(step13_0())){
		return
	}
	help13_1()
}
function step14_0(){
	r=and(gT(compNumbers(gV("0_1_12"),gV("0"),">=")),gT(isInt(gV("0_1_12"))))
	if(r!="error"&&(r)){
		setOk("0_1_12")
		return true
	}else{
		if(getObjBackground("0_1_12")!=COLOR_SE){
			setBad("0_1_12")
		}
		return true
	}
}
function help14_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_12",r)
}
function rule14(){
	if(!(step14_0())){
		return
	}
	help14_1()
}
function step15_0(){
	r=and(gT(compNumbers(gV("0_1_13"),gV("0"),">=")),gT(isInt(gV("0_1_13"))))
	if(r!="error"&&(r)){
		setOk("0_1_13")
		return true
	}else{
		if(getObjBackground("0_1_13")!=COLOR_SE){
			setBad("0_1_13")
		}
		return true
	}
}
function help15_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_13",r)
}
function rule15(){
	if(!(step15_0())){
		return
	}
	help15_1()
}
function step16_0(){
	r=and(gT(compNumbers(gV("0_1_14"),gV("0"),">=")),gT(isInt(gV("0_1_14"))))
	if(r!="error"&&(r)){
		setOk("0_1_14")
		return true
	}else{
		if(getObjBackground("0_1_14")!=COLOR_SE){
			setBad("0_1_14")
		}
		return true
	}
}
function help16_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_14",r)
}
function rule16(){
	if(!(step16_0())){
		return
	}
	help16_1()
}
function step17_0(){
	r=and(gT(compNumbers(gV("0_1_15"),gV("0"),">=")),gT(isInt(gV("0_1_15"))))
	if(r!="error"&&(r)){
		setOk("0_1_15")
		return true
	}else{
		if(getObjBackground("0_1_15")!=COLOR_SE){
			setBad("0_1_15")
		}
		return true
	}
}
function help17_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_15",r)
}
function rule17(){
	if(!(step17_0())){
		return
	}
	help17_1()
}
function step18_0(){
	r=and(gT(compNumbers(gV("0_1_16"),gV("0"),">=")),gT(isInt(gV("0_1_15"))))
	if(r!="error"&&(r)){
		setOk("0_1_16")
		return true
	}else{
		if(getObjBackground("0_1_16")!=COLOR_SE){
			setBad("0_1_16")
		}
		return true
	}
}
function help18_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_16",r)
}
function rule18(){
	if(!(step18_0())){
		return
	}
	help18_1()
}
function step19_0(){
	r=and(gT(compNumbers(gV("0_1_17"),gV("0"),">=")),gT(isInt(gV("0_1_17"))))
	if(r!="error"&&(r)){
		setOk("0_1_17")
		return true
	}else{
		if(getObjBackground("0_1_17")!=COLOR_SE){
			setBad("0_1_17")
		}
		return true
	}
}
function help19_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_17",r)
}
function rule19(){
	if(!(step19_0())){
		return
	}
	help19_1()
}
function step20_0(){
	r=and(gT(compNumbers(gV("0_1_18"),gV("0"),">=")),gT(isInt(gV("0_1_18"))))
	if(r!="error"&&(r)){
		setOk("0_1_18")
		return true
	}else{
		if(getObjBackground("0_1_18")!=COLOR_SE){
			setBad("0_1_18")
		}
		return true
	}
}
function help20_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_18",r)
}
function rule20(){
	if(!(step20_0())){
		return
	}
	help20_1()
}
function step21_0(){
	r=and(gT(compNumbers(gV("0_1_19"),gV("0"),">=")),gT(isInt(gV("0_1_19"))))
	if(r!="error"&&(r)){
		setOk("0_1_19")
		return true
	}else{
		if(getObjBackground("0_1_19")!=COLOR_SE){
			setBad("0_1_19")
		}
		return true
	}
}
function help21_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_19",r)
}
function rule21(){
	if(!(step21_0())){
		return
	}
	help21_1()
}
var riadok300
function step22_1(){
	r=and(gT(eq(gV("0_1_20"),gV(riadok300))),gT(isInt(gV("0_1_20"))))
	if(r!="error"&&(r)){
		setOk("0_1_20")
		return true
	}else{
		if(getObjBackground("0_1_20")!=COLOR_SE){
			setBad("0_1_20")
		}
		return true
	}
}
function help22_2(){
	r=concat(gT(riadok300 ),gT(" \(max\(0, r210 + r220 + r230 + r240 + r250 + r260 + r270 + r280 + r290\)\)"))
	setTitle("0_1_20",r)
}
function rule22(){
	riadok300 = max(gV("0"),gV(plus(gV("0_1_11"),gV(plus(gV("0_1_12"),gV(plus(gV("0_1_13"),gV(plus(gV("0_1_14"),gV(plus(gV("0_1_15"),gV(plus(gV("0_1_16"),gV(plus(gV("0_1_17"),gV(plus(gV("0_1_18"),gV("0_1_19"))))))))))))))))))
	if(!(step22_1())){
		return
	}
	help22_2()
}
var riadok310
function step23_1(){
	r=and(gT(eq(gV("0_1_21"),gV(riadok310))),gT(isInt(gV("0_1_21"))))
	if(r!="error"&&(r)){
		setOk("0_1_21")
		return true
	}else{
		if(getObjBackground("0_1_21")!=COLOR_SE){
			setBad("0_1_21")
		}
		return true
	}
}
function help23_2(){
	r=concat(gT(riadok310 ),gT(" \(r100 + r200 - r300\)"))
	setTitle("0_1_21",r)
}
function rule23(){
	riadok310 = minus(gV(plus(gV("0_1_0_1"),gV("0_1_10"))),gV("0_1_20"))
	if(!(step23_1())){
		return
	}
	help23_2()
}
function step24_0(){
	r=isInt(gV("0_1_22"))
	if(r!="error"&&(r)){
		setOk("0_1_22")
		return true
	}else{
		if(getObjBackground("0_1_22")!=COLOR_SE){
			setBad("0_1_22")
		}
		return true
	}
}
function help24_1(){
	r="Celé èíslo"
	setTitle("0_1_22",r)
}
function rule24(){
	if(!(step24_0())){
		return
	}
	help24_1()
}
function step25_0(){
	r=and(gT(compNumbers(gV("0_1_23"),gV("0"),">=")),gT(isInt(gV("0_1_23"))))
	if(r!="error"&&(r)){
		setOk("0_1_23")
		return true
	}else{
		if(getObjBackground("0_1_23")!=COLOR_SE){
			setBad("0_1_23")
		}
		return true
	}
}
function help25_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_23",r)
}
function rule25(){
	if(!(step25_0())){
		return
	}
	help25_1()
}
var riadok400
function step26_1(){
	r=and(gT(eq(gV("0_1_24"),gV(riadok400))),gT(isInt(gV("0_1_24"))))
	if(r!="error"&&(r)){
		setOk("0_1_24")
		return true
	}else{
		if(getObjBackground("0_1_24")!=COLOR_SE){
			setBad("0_1_24")
		}
		return true
	}
}
function help26_2(){
	r=concat(gT(riadok400 ),gT(" \(max\(0, r310 - r320 - r330\)\)"))
	setTitle("0_1_24",r)
}
function rule26(){
	riadok400 = minus(gV(minus(gV("0_1_21"),gV("0_1_22"))),gV("0_1_23"))
	if(!(step26_1())){
		return
	}
	help26_2()
}
var umorena_strata
var rok_zd
function rule27_0(){
	umorena_strata = plus(gV("0"),gV("0"))
	rok_zd = plus(gV("2000"),gV("0_0_10_2"))
}
function stepm0_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_0_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem0_27_1_0(){
	if(!(stepm0_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_0_3"))
}
function foreachm0_27_1() {
	rulem0_27_1_0()
}
function stepm1_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_1_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem1_27_1_0(){
	if(!(stepm1_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_1_3"))
}
function foreachm1_27_1() {
	rulem1_27_1_0()
}
function stepm2_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_2_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem2_27_1_0(){
	if(!(stepm2_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_2_3"))
}
function foreachm2_27_1() {
	rulem2_27_1_0()
}
function stepm3_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_3_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem3_27_1_0(){
	if(!(stepm3_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_3_3"))
}
function foreachm3_27_1() {
	rulem3_27_1_0()
}
function stepm4_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_4_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem4_27_1_0(){
	if(!(stepm4_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_4_3"))
}
function foreachm4_27_1() {
	rulem4_27_1_0()
}
function stepm5_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_5_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem5_27_1_0(){
	if(!(stepm5_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_5_3"))
}
function foreachm5_27_1() {
	rulem5_27_1_0()
}
function stepm6_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_6_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem6_27_1_0(){
	if(!(stepm6_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_6_3"))
}
function foreachm6_27_1() {
	rulem6_27_1_0()
}
function stepm7_27_1_0_0(){
	r= eq(gV(rok_zd),gV("0_1_64_2_7_0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rulem7_27_1_0(){
	if(!(stepm7_27_1_0_0())){
		return
	}
	umorena_strata = plus(gV("0"),gV("0_1_64_2_7_3"))
}
function foreachm7_27_1() {
	rulem7_27_1_0()
}
var riadok410
function step27_3(){
	r=and(gT(eq(gV("0_1_25"),gV(riadok410))),gT(isInt(gV("0_1_25"))))
	if(r!="error"&&(r)){
		setOk("0_1_25")
		return true
	}else{
		if(getObjBackground("0_1_25")!=COLOR_SE){
			setBad("0_1_25")
		}
		return true
	}
}
function help27_4(){
	r=concat(gT(riadok410 ),gT(" \(max\(0, Tab. F r. podµa zdaò. odb., s. 10\)\)"))
	setTitle("0_1_25",r)
}
function rule27(){
	rule27_0()
	foreachm0_27_1()
	foreachm1_27_1()
	foreachm2_27_1()
	foreachm3_27_1()
	foreachm4_27_1()
	foreachm5_27_1()
	foreachm6_27_1()
	foreachm7_27_1()
	riadok410 = max(gV("0"),gV(umorena_strata))
	if(!(step27_3())){
		return
	}
	help27_4()
}
var riadok420
function step28_1(){
	r=and(gT(and(gT(compNumbers(gV("0_1_26"),gV(riadok420),"<=")),gT(compNumbers(gV("0_1_26"),gV("0"),">=")))),gT(isInt(gV("0_1_26"))))
	if(r!="error"&&(r)){
		setOk("0_1_26")
		return true
	}else{
		if(getObjBackground("0_1_26")!=COLOR_SE){
			setBad("0_1_26")
		}
		return true
	}
}
function help28_2(){
	r="<= r400 * 0.02"
	setTitle("0_1_26",r)
}
function rule28(){
	riadok420 = max(gV("0"),gV(round(gV(mul(gV("0_1_24"),gV("0.02"))),gV("0"),gT("up"))))
	if(!(step28_1())){
		return
	}
	help28_2()
}
function step29_0(){
	r=and(gT(compNumbers(gV("0_1_27"),gV("0"),">=")),gT(isInt(gV("0_1_27"))))
	if(r!="error"&&(r)){
		setOk("0_1_27")
		return true
	}else{
		if(getObjBackground("0_1_27")!=COLOR_SE){
			setBad("0_1_27")
		}
		return true
	}
}
function help29_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_27",r)
}
function rule29(){
	if(!(step29_0())){
		return
	}
	help29_1()
}
function step30_0(){
	r= compNumbers(gV("0_1_24"),gV("0"),">=")
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var riadok440
function step30_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_28"),gV(riadok440),"<=")),gT(compNumbers(gV("0_1_28"),gV("0"),">=")))),gT(isInt(gV("0_1_28"))))
	if(r!="error"&&(r)){
		setOk("0_1_28")
		return true
	}else{
		if(getObjBackground("0_1_28")!=COLOR_SE){
			setBad("0_1_28")
		}
		return true
	}
}
function help30_3(){
	r="<= r400 * 0.01"
	setTitle("0_1_28",r)
}
function rule30(){
	if(!(step30_0())){
		return
	}
	riadok440 = max(gV("0"),gV(round(gV(mul(gV("0_1_24"),gV("0.01"))),gV("0"),gT("up"))))
	if(!(step30_2())){
		return
	}
	help30_3()
}
function step31_0(){
	r= compNumbers(gV("0_1_24"),gV("0"),"<")
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step31_1(){
	r=and(gT(compNumbers(gV("0_1_28"),gV("0"),">=")),gT(isInt(gV("0_1_28"))))
	if(r!="error"&&(r)){
		setOk("0_1_28")
		return true
	}else{
		if(getObjBackground("0_1_28")!=COLOR_SE){
			setBad("0_1_28")
		}
		return true
	}
}
function help31_2(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_28",r)
}
function rule31(){
	if(!(step31_0())){
		return
	}
	if(!(step31_1())){
		return
	}
	help31_2()
}
function step32_0(){
	r= compNumbers(gV("0_1_24"),gV("0"),">=")
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var riadok450
function step32_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_29"),gV(riadok450),"<=")),gT(compNumbers(gV("0_1_29"),gV("0"),">=")))),gT(isInt(gV("0_1_29"))))
	if(r!="error"&&(r)){
		setOk("0_1_29")
		return true
	}else{
		if(getObjBackground("0_1_29")!=COLOR_SE){
			setBad("0_1_29")
		}
		return true
	}
}
function help32_3(){
	r="<= r400 * 0.002"
	setTitle("0_1_29",r)
}
function rule32(){
	if(!(step32_0())){
		return
	}
	riadok450 = max(gV("0"),gV(round(gV(mul(gV("0_1_24"),gV("0.002"))),gV("0"),gT("up"))))
	if(!(step32_2())){
		return
	}
	help32_3()
}
function step33_0(){
	r= compNumbers(gV("0_1_24"),gV("0"),"<")
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step33_1(){
	r=and(gT(compNumbers(gV("0_1_29"),gV("0"),">=")),gT(isInt(gV("0_1_29"))))
	if(r!="error"&&(r)){
		setOk("0_1_29")
		return true
	}else{
		if(getObjBackground("0_1_29")!=COLOR_SE){
			setBad("0_1_29")
		}
		return true
	}
}
function help33_2(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_29",r)
}
function rule33(){
	if(!(step33_0())){
		return
	}
	if(!(step33_1())){
		return
	}
	help33_2()
}
function step34_0(){
	r=and(gT(compNumbers(gV("0_1_30"),gV("0"),">=")),gT(isInt(gV("0_1_30"))))
	if(r!="error"&&(r)){
		setOk("0_1_30")
		return true
	}else{
		if(getObjBackground("0_1_30")!=COLOR_SE){
			setBad("0_1_30")
		}
		return true
	}
}
function help34_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_30",r)
}
function rule34(){
	if(!(step34_0())){
		return
	}
	help34_1()
}
var riadok470
function step35_1(){
	r=and(gT(eq(gV("0_1_31"),gV(riadok470))),gT(isInt(gV("0_1_31"))))
	if(r!="error"&&(r)){
		setOk("0_1_31")
		return true
	}else{
		if(getObjBackground("0_1_31")!=COLOR_SE){
			setBad("0_1_31")
		}
		return true
	}
}
function help35_2(){
	r=concat(gT(riadok470 ),gT(" \(max\(0, min\(r400, r410 + r420 + r430 + r440 + r450 + r460\)\)\)"))
	setTitle("0_1_31",r)
}
function rule35(){
	riadok470 = max(gV("0"),gV(min(gV("0_1_24"),gV(plus(gV("0_1_25"),gV(plus(gV("0_1_26"),gV(plus(gV("0_1_27"),gV(plus(gV("0_1_28"),gV(plus(gV("0_1_29"),gV("0_1_30"))))))))))))))
	if(!(step35_1())){
		return
	}
	help35_2()
}
var riadok500
function step36_1(){
	r=and(gT(eq(gV("0_1_32"),gV(riadok500))),gT(isInt(gV("0_1_32"))))
	if(r!="error"&&(r)){
		setOk("0_1_32")
		return true
	}else{
		if(getObjBackground("0_1_32")!=COLOR_SE){
			setBad("0_1_32")
		}
		return true
	}
}
function help36_2(){
	r=concat(gT(riadok500 ),gT(" \(max\(0, ZaokrúhliNaCeléTisíckyNadol\(r400 - r470\)\)\)"))
	setTitle("0_1_32",r)
}
function rule36(){
	riadok500 = max(gV("0"),gV(round(gV(div(gV(minus(gV("0_1_24"),gV("0_1_31"))),gV("1000"))),gV("0"),gT("down"))))
	if(!(step36_1())){
		return
	}
	help36_2()
}
function step37_0(){
	r=and(gT(compNumbers(gV("0_1_33"),gV("0"),">=")),gT(isInt(gV("0_1_33"))))
	if(r!="error"&&(r)){
		setOk("0_1_33")
		return true
	}else{
		if(getObjBackground("0_1_33")!=COLOR_SE){
			setBad("0_1_33")
		}
		return true
	}
}
function help37_1(){
	r="15, 18 alebo 25"
	setTitle("0_1_33",r)
}
function rule37(){
	if(!(step37_0())){
		return
	}
	help37_1()
}
var riadok600
function step38_1(){
	r=and(gT(eq(gV("0_1_34"),gV(riadok600))),gT(isInt(gV("0_1_34"))))
	if(r!="error"&&(r)){
		setOk("0_1_34")
		return true
	}else{
		if(getObjBackground("0_1_34")!=COLOR_SE){
			setBad("0_1_34")
		}
		return true
	}
}
function help38_2(){
	r=concat(gT(riadok600 ),gT(" \(max\(0, ZaokrúhliNaCeléKorunyNahor\(r500 * r510 / 100\)\)\)"))
	setTitle("0_1_34",r)
}
function rule38(){
	riadok600 = max(gV("0"),gV(round(gV(div(gV(mul(gV(mul(gV("0_1_32"),gV("1000"))),gV("0_1_33"))),gV("100"))),gV("0"),gT("up"))))
	if(!(step38_1())){
		return
	}
	help38_2()
}
function step39_0(){
	r=and(gT(compNumbers(gV("0_1_35_1"),gV("0"),">=")),gT(isInt(gV("0_1_35_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_35_1")
		return true
	}else{
		if(getObjBackground("0_1_35_1")!=COLOR_SE){
			setBad("0_1_35_1")
		}
		return true
	}
}
function help39_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_35_1",r)
}
function rule39(){
	if(!(step39_0())){
		return
	}
	help39_1()
}
function step40_0(){
	r=and(gT(compNumbers(gV("0_1_36_1"),gV("0"),">=")),gT(isInt(gV("0_1_36_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_36_1")
		return true
	}else{
		if(getObjBackground("0_1_36_1")!=COLOR_SE){
			setBad("0_1_36_1")
		}
		return true
	}
}
function help40_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_36_1",r)
}
function rule40(){
	if(!(step40_0())){
		return
	}
	help40_1()
}
function step41_0(){
	r=and(gT(compNumbers(gV("0_1_37"),gV("0"),">=")),gT(isInt(gV("0_1_37"))))
	if(r!="error"&&(r)){
		setOk("0_1_37")
		return true
	}else{
		if(getObjBackground("0_1_37")!=COLOR_SE){
			setBad("0_1_37")
		}
		return true
	}
}
function help41_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_37",r)
}
function rule41(){
	if(!(step41_0())){
		return
	}
	help41_1()
}
function step42_0(){
	r=and(gT(compNumbers(gV("0_1_38"),gV("0"),">=")),gT(isInt(gV("0_1_38"))))
	if(r!="error"&&(r)){
		setOk("0_1_38")
		return true
	}else{
		if(getObjBackground("0_1_38")!=COLOR_SE){
			setBad("0_1_38")
		}
		return true
	}
}
function help42_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_38",r)
}
function rule42(){
	if(!(step42_0())){
		return
	}
	help42_1()
}
var riadok650
function step43_1(){
	r=and(gT(eq(gV("0_1_39"),gV(riadok650))),gT(isInt(gV("0_1_39"))))
	if(r!="error"&&(r)){
		setOk("0_1_39")
		return true
	}else{
		if(getObjBackground("0_1_39")!=COLOR_SE){
			setBad("0_1_39")
		}
		return true
	}
}
function help43_2(){
	r=concat(gT(riadok650 ),gT(" \(max\(0, min\(r600, r610 + r620 + r630 + r640\)\)\)"))
	setTitle("0_1_39",r)
}
function rule43(){
	riadok650 = max(gV("0"),gV(min(gV("0_1_34"),gV(plus(gV("0_1_35_1"),gV(plus(gV("0_1_36_1"),gV(plus(gV("0_1_37"),gV("0_1_38"))))))))))
	if(!(step43_1())){
		return
	}
	help43_2()
}
var riadok700
function step44_1(){
	r=and(gT(eq(gV("0_1_40"),gV(riadok700))),gT(isInt(gV("0_1_40"))))
	if(r!="error"&&(r)){
		setOk("0_1_40")
		return true
	}else{
		if(getObjBackground("0_1_40")!=COLOR_SE){
			setBad("0_1_40")
		}
		return true
	}
}
function help44_2(){
	r=concat(gT(riadok700 ),gT(" \(max\(0, r600 - r650\)\)"))
	setTitle("0_1_40",r)
}
function rule44(){
	riadok700 = max(gV("0"),gV(minus(gV("0_1_34"),gV("0_1_39"))))
	if(!(step44_1())){
		return
	}
	help44_2()
}
var riadok710
function step45_1(){
	r=and(gT(eq(gV("0_1_41"),gV(riadok710))),gT(isInt(gV("0_1_41"))))
	if(r!="error"&&(r)){
		setOk("0_1_41")
		return true
	}else{
		if(getObjBackground("0_1_41")!=COLOR_SE){
			setBad("0_1_41")
		}
		return true
	}
}
function help45_2(){
	r=concat(gT(riadok710 ),gT(" \(max\(0, min\(r700, Tab. E r6\)\)\)"))
	setTitle("0_1_41",r)
}
function rule45(){
	riadok710 = max(gV("0"),gV(min(gV("0_1_40"),gV("0_1_63_5"))))
	if(!(step45_1())){
		return
	}
	help45_2()
}
var riadok800
function step46_1(){
	r=and(gT(eq(gV("0_1_42"),gV(riadok800))),gT(isInt(gV("0_1_42"))))
	if(r!="error"&&(r)){
		setOk("0_1_42")
		return true
	}else{
		if(getObjBackground("0_1_42")!=COLOR_SE){
			setBad("0_1_42")
		}
		return true
	}
}
function help46_2(){
	r=concat(gT(riadok800 ),gT(" \(max\(0, ZaokrúhliNaCeléStovkyNahor\(r700 - r710\)\)\)"))
	setTitle("0_1_42",r)
}
function rule46(){
	riadok800 = max(gV("0"),gV(round(gV(div(gV(minus(gV("0_1_40"),gV("0_1_41"))),gV("100"))),gV("0"),gT("up"))))
	if(!(step46_1())){
		return
	}
	help46_2()
}
function step47_0(){
	r=and(gT(compNumbers(gV("0_1_43_3"),gV("0"),">=")),gT(isInt(gV("0_1_43_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_43_3")
		return true
	}else{
		if(getObjBackground("0_1_43_3")!=COLOR_SE){
			setBad("0_1_43_3")
		}
		return true
	}
}
function help47_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_43_3",r)
}
function rule47(){
	if(!(step47_0())){
		return
	}
	help47_1()
}
function step48_0(){
	r=and(gT(compNumbers(gV("0_1_44_3"),gV("0"),">=")),gT(isInt(gV("0_1_44_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_44_3")
		return true
	}else{
		if(getObjBackground("0_1_44_3")!=COLOR_SE){
			setBad("0_1_44_3")
		}
		return true
	}
}
function help48_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_44_3",r)
}
function rule48(){
	if(!(step48_0())){
		return
	}
	help48_1()
}
function step49_0(){
	r=and(gT(compNumbers(gV("0_1_45"),gV("0"),">=")),gT(isInt(gV("0_1_45"))))
	if(r!="error"&&(r)){
		setOk("0_1_45")
		return true
	}else{
		if(getObjBackground("0_1_45")!=COLOR_SE){
			setBad("0_1_45")
		}
		return true
	}
}
function help49_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_45",r)
}
function rule49(){
	if(!(step49_0())){
		return
	}
	help49_1()
}
var riadok840
function step50_1(){
	r=and(gT(eq(gV("0_1_46"),gV(riadok840))),gT(isInt(gV("0_1_46"))))
	if(r!="error"&&(r)){
		setOk("0_1_46")
		return true
	}else{
		if(getObjBackground("0_1_46")!=COLOR_SE){
			setBad("0_1_46")
		}
		return true
	}
}
function help50_2(){
	r=concat(gT(riadok840 ),gT(" \(max\(0, r810 + r820 + r830\)\)"))
	setTitle("0_1_46",r)
}
function rule50(){
	riadok840 = max(gV("0"),gV(plus(gV("0_1_43_3"),gV(plus(gV("0_1_44_3"),gV("0_1_45"))))))
	if(!(step50_1())){
		return
	}
	help50_2()
}
function step51_0(){
	r= compNumbers(gV("0_1_45"),gV(mul(gV("0_1_42"),gV("100"))),">")
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step51_1(){
	r=and(gT(eq(gV("0_1_47"),gV("0_1_45"))),gT(isInt(gV("0_1_47"))))
	if(r!="error"&&(r)){
		setOk("0_1_47")
		return true
	}else{
		if(getObjBackground("0_1_47")!=COLOR_SE){
			setBad("0_1_47")
		}
		return true
	}
}
function help51_2(){
	r=concat(gT("0_1_45"),gT(" \(r830\)"))
	setTitle("0_1_47",r)
}
function rule51(){
	if(!(step51_0())){
		return
	}
	if(!(step51_1())){
		return
	}
	help51_2()
}
function step52_0(){
	r= not(gT(compNumbers(gV("0_1_45"),gV(mul(gV("0_1_42"),gV("100"))),">")))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step52_1(){
	r=and(gT(eq(gV("0_1_47"),gV(mul(gV("0_1_42"),gV("100"))))),gT(isInt(gV("0_1_47"))))
	if(r!="error"&&(r)){
		setOk("0_1_47")
		return true
	}else{
		if(getObjBackground("0_1_47")!=COLOR_SE){
			setBad("0_1_47")
		}
		return true
	}
}
function help52_2(){
	r=concat(gT(mul(gV("0_1_42"),gV("100")) ),gT(" \(r800\)"))
	setTitle("0_1_47",r)
}
function rule52(){
	if(!(step52_0())){
		return
	}
	if(!(step52_1())){
		return
	}
	help52_2()
}
var riadok900
function step53_1(){
	r=and(gT(eq(gV("0_1_48_3"),gV(riadok900))),gT(isInt(gV("0_1_48_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_48_3")
		return true
	}else{
		if(getObjBackground("0_1_48_3")!=COLOR_SE){
			setBad("0_1_48_3")
		}
		return true
	}
}
function help53_2(){
	r=concat(gT(riadok900 ),gT(" \(r850 - r840\)"))
	setTitle("0_1_48_3",r)
}
function rule53(){
	riadok900 = minus(gV("0_1_47"),gV("0_1_46"))
	if(!(step53_1())){
		return
	}
	help53_2()
}
function step54_0(){
	r=and(gT(compNumbers(gV("0_1_49"),gV("0"),">=")),gT(isInt(gV("0_1_49"))))
	if(r!="error"&&(r)){
		setOk("0_1_49")
		return true
	}else{
		if(getObjBackground("0_1_49")!=COLOR_SE){
			setBad("0_1_49")
		}
		return true
	}
}
function help54_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_49",r)
}
function rule54(){
	if(!(step54_0())){
		return
	}
	help54_1()
}
function step55_0(){
	r=and(gT(compNumbers(gV("0_1_50"),gV("0"),">=")),gT(isInt(gV("0_1_50"))))
	if(r!="error"&&(r)){
		setOk("0_1_50")
		return true
	}else{
		if(getObjBackground("0_1_50")!=COLOR_SE){
			setBad("0_1_50")
		}
		return true
	}
}
function help55_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_50",r)
}
function rule55(){
	if(!(step55_0())){
		return
	}
	help55_1()
}
var riadok910
function step56_1(){
	r=and(gT(eq(gV("0_1_51"),gV(riadok910))),gT(isInt(gV("0_1_51"))))
	if(r!="error"&&(r)){
		setOk("0_1_51")
		return true
	}else{
		if(getObjBackground("0_1_51")!=COLOR_SE){
			setBad("0_1_51")
		}
		return true
	}
}
function help56_2(){
	r=concat(gT(riadok910 ),gT(" \(max\(0, r600 - r620 - r630 - r640 - r710 - r830\)\)"))
	setTitle("0_1_51",r)
}
function rule56(){
	riadok910 = max(gV("0"),gV(minus(gV(minus(gV(minus(gV(minus(gV(minus(gV("0_1_34"),gV("0_1_36_1"))),gV("0_1_37"))),gV("0_1_38"))),gV("0_1_41"))),gV("0_1_45"))))
	if(!(step56_1())){
		return
	}
	help56_2()
}
function step57_0(){
	r=and(gT(compNumbers(gV("0_1_59_0"),gV("0"),">=")),gT(isInt(gV("0_1_59_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_0")
		return true
	}else{
		if(getObjBackground("0_1_59_0")!=COLOR_SE){
			setBad("0_1_59_0")
		}
		return true
	}
}
function help57_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_0",r)
}
function rule57(){
	if(!(step57_0())){
		return
	}
	help57_1()
}
function step58_0(){
	r=and(gT(compNumbers(gV("0_1_59_1"),gV("0"),">=")),gT(isInt(gV("0_1_59_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_1")
		return true
	}else{
		if(getObjBackground("0_1_59_1")!=COLOR_SE){
			setBad("0_1_59_1")
		}
		return true
	}
}
function help58_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_1",r)
}
function rule58(){
	if(!(step58_0())){
		return
	}
	help58_1()
}
function step59_0(){
	r=and(gT(compNumbers(gV("0_1_59_2"),gV("0"),">=")),gT(isInt(gV("0_1_59_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_2")
		return true
	}else{
		if(getObjBackground("0_1_59_2")!=COLOR_SE){
			setBad("0_1_59_2")
		}
		return true
	}
}
function help59_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_2",r)
}
function rule59(){
	if(!(step59_0())){
		return
	}
	help59_1()
}
function step60_0(){
	r=and(gT(compNumbers(gV("0_1_59_3"),gV("0"),">=")),gT(isInt(gV("0_1_59_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_3")
		return true
	}else{
		if(getObjBackground("0_1_59_3")!=COLOR_SE){
			setBad("0_1_59_3")
		}
		return true
	}
}
function help60_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_3",r)
}
function rule60(){
	if(!(step60_0())){
		return
	}
	help60_1()
}
function step61_0(){
	r=and(gT(compNumbers(gV("0_1_59_4"),gV("0"),">=")),gT(isInt(gV("0_1_59_4"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_4")
		return true
	}else{
		if(getObjBackground("0_1_59_4")!=COLOR_SE){
			setBad("0_1_59_4")
		}
		return true
	}
}
function help61_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_4",r)
}
function rule61(){
	if(!(step61_0())){
		return
	}
	help61_1()
}
function step62_0(){
	r=and(gT(compNumbers(gV("0_1_59_5"),gV("0"),">=")),gT(isInt(gV("0_1_59_5"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_5")
		return true
	}else{
		if(getObjBackground("0_1_59_5")!=COLOR_SE){
			setBad("0_1_59_5")
		}
		return true
	}
}
function help62_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_5",r)
}
function rule62(){
	if(!(step62_0())){
		return
	}
	help62_1()
}
function step63_0(){
	r=and(gT(compNumbers(gV("0_1_59_6"),gV("0"),">=")),gT(isInt(gV("0_1_59_6"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_6")
		return true
	}else{
		if(getObjBackground("0_1_59_6")!=COLOR_SE){
			setBad("0_1_59_6")
		}
		return true
	}
}
function help63_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_6",r)
}
function rule63(){
	if(!(step63_0())){
		return
	}
	help63_1()
}
function step64_0(){
	r=and(gT(compNumbers(gV("0_1_59_7"),gV("0"),">=")),gT(isInt(gV("0_1_59_7"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_7")
		return true
	}else{
		if(getObjBackground("0_1_59_7")!=COLOR_SE){
			setBad("0_1_59_7")
		}
		return true
	}
}
function help64_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_7",r)
}
function rule64(){
	if(!(step64_0())){
		return
	}
	help64_1()
}
function step65_0(){
	r=and(gT(compNumbers(gV("0_1_59_8"),gV("0"),">=")),gT(isInt(gV("0_1_59_8"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_8")
		return true
	}else{
		if(getObjBackground("0_1_59_8")!=COLOR_SE){
			setBad("0_1_59_8")
		}
		return true
	}
}
function help65_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_8",r)
}
function rule65(){
	if(!(step65_0())){
		return
	}
	help65_1()
}
function step66_0(){
	r=and(gT(compNumbers(gV("0_1_59_9"),gV("0"),">=")),gT(isInt(gV("0_1_59_9"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_9")
		return true
	}else{
		if(getObjBackground("0_1_59_9")!=COLOR_SE){
			setBad("0_1_59_9")
		}
		return true
	}
}
function help66_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_9",r)
}
function rule66(){
	if(!(step66_0())){
		return
	}
	help66_1()
}
function step67_0(){
	r=and(gT(compNumbers(gV("0_1_59_10"),gV("0"),">=")),gT(isInt(gV("0_1_59_10"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_10")
		return true
	}else{
		if(getObjBackground("0_1_59_10")!=COLOR_SE){
			setBad("0_1_59_10")
		}
		return true
	}
}
function help67_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_10",r)
}
function rule67(){
	if(!(step67_0())){
		return
	}
	help67_1()
}
function step68_0(){
	r=and(gT(compNumbers(gV("0_1_59_11"),gV("0"),">=")),gT(isInt(gV("0_1_59_11"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_11")
		return true
	}else{
		if(getObjBackground("0_1_59_11")!=COLOR_SE){
			setBad("0_1_59_11")
		}
		return true
	}
}
function help68_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_11",r)
}
function rule68(){
	if(!(step68_0())){
		return
	}
	help68_1()
}
function step69_0(){
	r=and(gT(compNumbers(gV("0_1_59_12"),gV("0"),">=")),gT(isInt(gV("0_1_59_12"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_12")
		return true
	}else{
		if(getObjBackground("0_1_59_12")!=COLOR_SE){
			setBad("0_1_59_12")
		}
		return true
	}
}
function help69_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_12",r)
}
function rule69(){
	if(!(step69_0())){
		return
	}
	help69_1()
}
function step70_0(){
	r=and(gT(compNumbers(gV("0_1_59_13"),gV("0"),">=")),gT(isInt(gV("0_1_59_13"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_13")
		return true
	}else{
		if(getObjBackground("0_1_59_13")!=COLOR_SE){
			setBad("0_1_59_13")
		}
		return true
	}
}
function help70_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_13",r)
}
function rule70(){
	if(!(step70_0())){
		return
	}
	help70_1()
}
function step71_0(){
	r=and(gT(compNumbers(gV("0_1_59_14"),gV("0"),">=")),gT(isInt(gV("0_1_59_14"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_14")
		return true
	}else{
		if(getObjBackground("0_1_59_14")!=COLOR_SE){
			setBad("0_1_59_14")
		}
		return true
	}
}
function help71_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_14",r)
}
function rule71(){
	if(!(step71_0())){
		return
	}
	help71_1()
}
function step72_0(){
	r=and(gT(compNumbers(gV("0_1_59_15"),gV("0"),">=")),gT(isInt(gV("0_1_59_15"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_15")
		return true
	}else{
		if(getObjBackground("0_1_59_15")!=COLOR_SE){
			setBad("0_1_59_15")
		}
		return true
	}
}
function help72_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_15",r)
}
function rule72(){
	if(!(step72_0())){
		return
	}
	help72_1()
}
function step73_0(){
	r=and(gT(eq(gV("0_1_59_16"),gV("0_1_62_0"))),gT(isInt(gV("0_1_59_16"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_16")
		return true
	}else{
		if(getObjBackground("0_1_59_16")!=COLOR_SE){
			setBad("0_1_59_16")
		}
		return true
	}
}
function help73_1(){
	r=concat(gT("0_1_62_0"),gT(" \(Tab. D r1\)"))
	setTitle("0_1_59_16",r)
}
function rule73(){
	if(!(step73_0())){
		return
	}
	help73_1()
}
function step74_0(){
	r=and(gT(compNumbers(gV("0_1_59_17"),gV("0"),">=")),gT(isInt(gV("0_1_59_17"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_17")
		return true
	}else{
		if(getObjBackground("0_1_59_17")!=COLOR_SE){
			setBad("0_1_59_17")
		}
		return true
	}
}
function help74_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_59_17",r)
}
function rule74(){
	if(!(step74_0())){
		return
	}
	help74_1()
}
var tabAriadok19
function step75_1(){
	r=and(gT(eq(gV("0_1_59_18"),gV(tabAriadok19))),gT(isInt(gV("0_1_59_18"))))
	if(r!="error"&&(r)){
		setOk("0_1_59_18")
		return true
	}else{
		if(getObjBackground("0_1_59_18")!=COLOR_SE){
			setBad("0_1_59_18")
		}
		return true
	}
}
function help75_2(){
	r=concat(gT(tabAriadok19 ),gT(" \(Tab. A r19 = Tab. A r1 + Tab. A r2 + ... + Tab. A r18\)"))
	setTitle("0_1_59_18",r)
}
function rule75(){
	tabAriadok19 = plus(gV("0_1_59_0"),gV(plus(gV("0_1_59_1"),gV(plus(gV("0_1_59_2"),gV(plus(gV("0_1_59_3"),gV(plus(gV("0_1_59_4"),gV(plus(gV("0_1_59_5"),gV(plus(gV("0_1_59_6"),gV(plus(gV("0_1_59_7"),gV(plus(gV("0_1_59_8"),gV(plus(gV("0_1_59_9"),gV(plus(gV("0_1_59_10"),gV(plus(gV("0_1_59_11"),gV(plus(gV("0_1_59_12"),gV(plus(gV("0_1_59_13"),gV(plus(gV("0_1_59_14"),gV(plus(gV("0_1_59_15"),gV(plus(gV("0_1_59_16"),gV("0_1_59_17"))))))))))))))))))))))))))))))))))
	if(!(step75_1())){
		return
	}
	help75_2()
}
function step76_0(){
	r=and(gT(compNumbers(gV("0_1_60_0"),gV("0"),">=")),gT(isInt(gV("0_1_60_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_60_0")
		return true
	}else{
		if(getObjBackground("0_1_60_0")!=COLOR_SE){
			setBad("0_1_60_0")
		}
		return true
	}
}
function help76_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_60_0",r)
}
function rule76(){
	if(!(step76_0())){
		return
	}
	help76_1()
}
function step77_0(){
	r=and(gT(compNumbers(gV("0_1_60_1"),gV("0"),">=")),gT(isInt(gV("0_1_60_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_60_1")
		return true
	}else{
		if(getObjBackground("0_1_60_1")!=COLOR_SE){
			setBad("0_1_60_1")
		}
		return true
	}
}
function help77_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_60_1",r)
}
function rule77(){
	if(!(step77_0())){
		return
	}
	help77_1()
}
function step78_0(){
	r=and(gT(compNumbers(gV("0_1_60_2"),gV("0"),">=")),gT(isInt(gV("0_1_60_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_60_2")
		return true
	}else{
		if(getObjBackground("0_1_60_2")!=COLOR_SE){
			setBad("0_1_60_2")
		}
		return true
	}
}
function help78_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_60_2",r)
}
function rule78(){
	if(!(step78_0())){
		return
	}
	help78_1()
}
function step79_0(){
	r=and(gT(compNumbers(gV("0_1_61_0"),gV("0"),">=")),gT(isInt(gV("0_1_61_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_61_0")
		return true
	}else{
		if(getObjBackground("0_1_61_0")!=COLOR_SE){
			setBad("0_1_61_0")
		}
		return true
	}
}
function help79_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_61_0",r)
}
function rule79(){
	if(!(step79_0())){
		return
	}
	help79_1()
}
function step80_0(){
	r=and(gT(compNumbers(gV("0_1_61_1"),gV("0"),">=")),gT(isInt(gV("0_1_61_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_61_1")
		return true
	}else{
		if(getObjBackground("0_1_61_1")!=COLOR_SE){
			setBad("0_1_61_1")
		}
		return true
	}
}
function help80_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_61_1",r)
}
function rule80(){
	if(!(step80_0())){
		return
	}
	help80_1()
}
function step81_0(){
	r=and(gT(compNumbers(gV("0_1_61_2"),gV("0"),">=")),gT(isInt(gV("0_1_61_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_61_2")
		return true
	}else{
		if(getObjBackground("0_1_61_2")!=COLOR_SE){
			setBad("0_1_61_2")
		}
		return true
	}
}
function help81_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_61_2",r)
}
function rule81(){
	if(!(step81_0())){
		return
	}
	help81_1()
}
function step82_0(){
	r=and(gT(compNumbers(gV("0_1_62_0"),gV("0"),">=")),gT(isInt(gV("0_1_62_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_62_0")
		return true
	}else{
		if(getObjBackground("0_1_62_0")!=COLOR_SE){
			setBad("0_1_62_0")
		}
		return true
	}
}
function help82_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_62_0",r)
}
function rule82(){
	if(!(step82_0())){
		return
	}
	help82_1()
}
function step83_0(){
	r=and(gT(and(gT(compNumbers(gV("0_1_62_1"),gV("0"),">=")),gT(compNumbers(gV("0_1_62_1"),gV("0_1_62_0"),"<=")))),gT(isInt(gV("0_1_62_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_62_1")
		return true
	}else{
		if(getObjBackground("0_1_62_1")!=COLOR_SE){
			setBad("0_1_62_1")
		}
		return true
	}
}
function help83_1(){
	r="Nezáporné celé èíslo <= Tab. D r1"
	setTitle("0_1_62_1",r)
}
function rule83(){
	if(!(step83_0())){
		return
	}
	help83_1()
}
function step84_0(){
	r=and(gT(and(gT(compNumbers(gV("0_1_62_2"),gV("0"),">=")),gT(compNumbers(gV("0_1_62_2"),gV("0_1_62_1"),"<=")))),gT(isInt(gV("0_1_62_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_62_2")
		return true
	}else{
		if(getObjBackground("0_1_62_2")!=COLOR_SE){
			setBad("0_1_62_2")
		}
		return true
	}
}
function help84_1(){
	r="Nezáporné celé èíslo <= Tab. D r2"
	setTitle("0_1_62_2",r)
}
function rule84(){
	if(!(step84_0())){
		return
	}
	help84_1()
}
function step85_0(){
	r=and(gT(and(gT(compNumbers(gV("0_1_62_3"),gV("0"),">=")),gT(compNumbers(gV("0_1_62_3"),gV("0_1_62_1"),"<=")))),gT(isInt(gV("0_1_62_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_62_3")
		return true
	}else{
		if(getObjBackground("0_1_62_3")!=COLOR_SE){
			setBad("0_1_62_3")
		}
		return true
	}
}
function help85_1(){
	r="Nezáporné celé èíslo <= Tab. D r2"
	setTitle("0_1_62_3",r)
}
function rule85(){
	if(!(step85_0())){
		return
	}
	help85_1()
}
function step86_0(){
	r=and(gT(and(gT(compNumbers(gV("0_1_62_4"),gV("0"),">=")),gT(compNumbers(gV("0_1_62_4"),gV("0_1_62_1"),"<=")))),gT(isInt(gV("0_1_62_4"))))
	if(r!="error"&&(r)){
		setOk("0_1_62_4")
		return true
	}else{
		if(getObjBackground("0_1_62_4")!=COLOR_SE){
			setBad("0_1_62_4")
		}
		return true
	}
}
function help86_1(){
	r="Nezáporné celé èíslo <= Tab. D r2"
	setTitle("0_1_62_4",r)
}
function rule86(){
	if(!(step86_0())){
		return
	}
	help86_1()
}
function step87_0(){
	r= not(gT(eq(gV("0_1_63_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var tabEriadok1
function step87_2(){
	r=and(gT(eq(gV("0_1_63_0"),gV(tabEriadok1))),gT(isInt(gV("0_1_63_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_63_0")
		return true
	}else{
		if(getObjBackground("0_1_63_0")!=COLOR_SE){
			setBad("0_1_63_0")
		}
		return true
	}
}
function help87_3(){
	r=concat(gT(tabEriadok1 ),gT(" \(max\(0, r400\)\)"))
	setTitle("0_1_63_0",r)
}
function rule87(){
	if(!(step87_0())){
		return
	}
	tabEriadok1 = max(gV("0"),gV("0_1_24"))
	if(!(step87_2())){
		return
	}
	help87_3()
}
function step88_0(){
	r= eq(gV("0_1_63_0"),gV("0"))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step88_1(){
	r=isInt(gV("0_1_63_0"))
	if(r!="error"&&(r)){
		setOk("0_1_63_0")
		return true
	}else{
		if(getObjBackground("0_1_63_0")!=COLOR_SE){
			setBad("0_1_63_0")
		}
		return true
	}
}
function help88_2(){
	r=""
	setTitle("0_1_63_0",r)
}
function rule88(){
	if(!(step88_0())){
		return
	}
	if(!(step88_1())){
		return
	}
	help88_2()
}
function step89_0(){
	r=and(gT(compNumbers(gV("0_1_63_1"),gV("0"),">=")),gT(isInt(gV("0_1_63_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_63_1")
		return true
	}else{
		if(getObjBackground("0_1_63_1")!=COLOR_SE){
			setBad("0_1_63_1")
		}
		return true
	}
}
function help89_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_63_1",r)
}
function rule89(){
	if(!(step89_0())){
		return
	}
	help89_1()
}
function step90_0_0(){
	r= compNumbers(gV("0_1_63_0"),gV("0"),">")
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var tabEriadok3
function help90_0_2(){
	r=concat(gT(tabEriadok3 ),gT(" \(Tab. E, r. 2 / Tab. E, r. 1 * 100\)"))
	setTitle("0_1_63_2",r)
}
function rule90_0(){
	if(!(step90_0_0())){
		return
	}
	tabEriadok3 = max(gV("0"),gV(round(gV(mul(gV(div(gV("0_1_63_1"),gV("0_1_63_0"))),gV("100"))),gV("2"),gT("center"))))
	help90_0_2()
}
function step90_1_0(){
	r= not(gT(compNumbers(gV("0_1_63_0"),gV("0"),">")))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function help90_1_2(){
	r=plus(gV("0"),gV(tabEriadok3))
	setTitle("0_1_63_2",r)
}
function rule90_1(){
	if(!(step90_1_0())){
		return
	}
	tabEriadok3 = plus(gV("0"),gV("0"))
	help90_1_2()
}
function step90_2(){
	r=eq(gV("0_1_63_2"),gV(tabEriadok3))
	if(r!="error"&&(r)){
		setOk("0_1_63_2")
		return true
	}else{
		if(getObjBackground("0_1_63_2")!=COLOR_SE){
			setBad("0_1_63_2")
		}
		return true
	}
}
function rule90(){
	rule90_0()
	rule90_1()
	if(!(step90_2())){
		return
	}
}
var tabEriadok4
function step91_1(){
	r=and(gT(eq(gV("0_1_63_3"),gV(tabEriadok4))),gT(isInt(gV("0_1_63_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_63_3")
		return true
	}else{
		if(getObjBackground("0_1_63_3")!=COLOR_SE){
			setBad("0_1_63_3")
		}
		return true
	}
}
function help91_2(){
	r=concat(gT(tabEriadok4 ),gT(" \(max\(0, ZaokrúhliNaCeléKoruny\(r600 * Tab. E r3 / 100\)\)\)"))
	setTitle("0_1_63_3",r)
}
function rule91(){
	tabEriadok4 = max(gV("0"),gV(round(gV(div(gV(mul(gV("0_1_34"),gV("0_1_63_2"))),gV("100"))),gV("0"),gT("up"))))
	if(!(step91_1())){
		return
	}
	help91_2()
}
function step92_0(){
	r=and(gT(compNumbers(gV("0_1_63_4"),gV("0"),">=")),gT(isInt(gV("0_1_63_4"))))
	if(r!="error"&&(r)){
		setOk("0_1_63_4")
		return true
	}else{
		if(getObjBackground("0_1_63_4")!=COLOR_SE){
			setBad("0_1_63_4")
		}
		return true
	}
}
function help92_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_63_4",r)
}
function rule92(){
	if(!(step92_0())){
		return
	}
	help92_1()
}
var tabEriadok6
function step93_1(){
	r=and(gT(eq(gV("0_1_63_5"),gV(tabEriadok6))),gT(isInt(gV("0_1_63_5"))))
	if(r!="error"&&(r)){
		setOk("0_1_63_5")
		return true
	}else{
		if(getObjBackground("0_1_63_5")!=COLOR_SE){
			setBad("0_1_63_5")
		}
		return true
	}
}
function help93_2(){
	r=concat(gT(tabEriadok6 ),gT(" \(max\(0, min\(Tab. E r4, Tab. E r5\)\)\)"))
	setTitle("0_1_63_5",r)
}
function rule93(){
	tabEriadok6 = max(gV("0"),gV(min(gV("0_1_63_3"),gV("0_1_63_4"))))
	if(!(step93_1())){
		return
	}
	help93_2()
}
function stepm0_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_0_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_0_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_0_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_0_1")!=COLOR_SE){
			setBad("0_1_64_0_0_1")
		}
		return true
	}
}
function helpm0_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_0_1",r)
}
function rulem0_94_0_0(){
	if(!(stepm0_94_0_0_0())){
		return
	}
	helpm0_94_0_0_1()
}
function stepm0_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_0_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_0_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_0_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_0_2")!=COLOR_SE){
			setBad("0_1_64_0_0_2")
		}
		return true
	}
}
function helpm0_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_0_2",r)
}
function rulem0_94_0_1(){
	if(!(stepm0_94_0_1_0())){
		return
	}
	helpm0_94_0_1_1()
}
function stepm0_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_0_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_0_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_0_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_0_3")!=COLOR_SE){
			setBad("0_1_64_0_0_3")
		}
		return true
	}
}
function helpm0_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_0_3",r)
}
function rulem0_94_0_2(){
	if(!(stepm0_94_0_2_0())){
		return
	}
	helpm0_94_0_2_1()
}
function foreachm0_94_0() {
	rulem0_94_0_0()
	rulem0_94_0_1()
	rulem0_94_0_2()
}
function stepm1_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_1_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_1_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_1_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_1_1")!=COLOR_SE){
			setBad("0_1_64_0_1_1")
		}
		return true
	}
}
function helpm1_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_1_1",r)
}
function rulem1_94_0_0(){
	if(!(stepm1_94_0_0_0())){
		return
	}
	helpm1_94_0_0_1()
}
function stepm1_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_1_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_1_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_1_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_1_2")!=COLOR_SE){
			setBad("0_1_64_0_1_2")
		}
		return true
	}
}
function helpm1_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_1_2",r)
}
function rulem1_94_0_1(){
	if(!(stepm1_94_0_1_0())){
		return
	}
	helpm1_94_0_1_1()
}
function stepm1_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_1_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_1_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_1_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_1_3")!=COLOR_SE){
			setBad("0_1_64_0_1_3")
		}
		return true
	}
}
function helpm1_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_1_3",r)
}
function rulem1_94_0_2(){
	if(!(stepm1_94_0_2_0())){
		return
	}
	helpm1_94_0_2_1()
}
function foreachm1_94_0() {
	rulem1_94_0_0()
	rulem1_94_0_1()
	rulem1_94_0_2()
}
function stepm2_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_2_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_2_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_2_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_2_1")!=COLOR_SE){
			setBad("0_1_64_0_2_1")
		}
		return true
	}
}
function helpm2_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_2_1",r)
}
function rulem2_94_0_0(){
	if(!(stepm2_94_0_0_0())){
		return
	}
	helpm2_94_0_0_1()
}
function stepm2_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_2_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_2_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_2_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_2_2")!=COLOR_SE){
			setBad("0_1_64_0_2_2")
		}
		return true
	}
}
function helpm2_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_2_2",r)
}
function rulem2_94_0_1(){
	if(!(stepm2_94_0_1_0())){
		return
	}
	helpm2_94_0_1_1()
}
function stepm2_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_2_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_2_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_2_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_2_3")!=COLOR_SE){
			setBad("0_1_64_0_2_3")
		}
		return true
	}
}
function helpm2_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_2_3",r)
}
function rulem2_94_0_2(){
	if(!(stepm2_94_0_2_0())){
		return
	}
	helpm2_94_0_2_1()
}
function foreachm2_94_0() {
	rulem2_94_0_0()
	rulem2_94_0_1()
	rulem2_94_0_2()
}
function stepm3_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_3_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_3_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_3_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_3_1")!=COLOR_SE){
			setBad("0_1_64_0_3_1")
		}
		return true
	}
}
function helpm3_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_3_1",r)
}
function rulem3_94_0_0(){
	if(!(stepm3_94_0_0_0())){
		return
	}
	helpm3_94_0_0_1()
}
function stepm3_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_3_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_3_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_3_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_3_2")!=COLOR_SE){
			setBad("0_1_64_0_3_2")
		}
		return true
	}
}
function helpm3_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_3_2",r)
}
function rulem3_94_0_1(){
	if(!(stepm3_94_0_1_0())){
		return
	}
	helpm3_94_0_1_1()
}
function stepm3_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_3_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_3_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_3_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_3_3")!=COLOR_SE){
			setBad("0_1_64_0_3_3")
		}
		return true
	}
}
function helpm3_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_3_3",r)
}
function rulem3_94_0_2(){
	if(!(stepm3_94_0_2_0())){
		return
	}
	helpm3_94_0_2_1()
}
function foreachm3_94_0() {
	rulem3_94_0_0()
	rulem3_94_0_1()
	rulem3_94_0_2()
}
function stepm4_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_4_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_4_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_4_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_4_1")!=COLOR_SE){
			setBad("0_1_64_0_4_1")
		}
		return true
	}
}
function helpm4_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_4_1",r)
}
function rulem4_94_0_0(){
	if(!(stepm4_94_0_0_0())){
		return
	}
	helpm4_94_0_0_1()
}
function stepm4_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_4_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_4_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_4_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_4_2")!=COLOR_SE){
			setBad("0_1_64_0_4_2")
		}
		return true
	}
}
function helpm4_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_4_2",r)
}
function rulem4_94_0_1(){
	if(!(stepm4_94_0_1_0())){
		return
	}
	helpm4_94_0_1_1()
}
function stepm4_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_4_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_4_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_4_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_4_3")!=COLOR_SE){
			setBad("0_1_64_0_4_3")
		}
		return true
	}
}
function helpm4_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_4_3",r)
}
function rulem4_94_0_2(){
	if(!(stepm4_94_0_2_0())){
		return
	}
	helpm4_94_0_2_1()
}
function foreachm4_94_0() {
	rulem4_94_0_0()
	rulem4_94_0_1()
	rulem4_94_0_2()
}
function stepm5_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_5_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_5_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_5_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_5_1")!=COLOR_SE){
			setBad("0_1_64_0_5_1")
		}
		return true
	}
}
function helpm5_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_5_1",r)
}
function rulem5_94_0_0(){
	if(!(stepm5_94_0_0_0())){
		return
	}
	helpm5_94_0_0_1()
}
function stepm5_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_5_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_5_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_5_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_5_2")!=COLOR_SE){
			setBad("0_1_64_0_5_2")
		}
		return true
	}
}
function helpm5_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_5_2",r)
}
function rulem5_94_0_1(){
	if(!(stepm5_94_0_1_0())){
		return
	}
	helpm5_94_0_1_1()
}
function stepm5_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_5_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_5_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_5_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_5_3")!=COLOR_SE){
			setBad("0_1_64_0_5_3")
		}
		return true
	}
}
function helpm5_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_5_3",r)
}
function rulem5_94_0_2(){
	if(!(stepm5_94_0_2_0())){
		return
	}
	helpm5_94_0_2_1()
}
function foreachm5_94_0() {
	rulem5_94_0_0()
	rulem5_94_0_1()
	rulem5_94_0_2()
}
function stepm6_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_6_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_6_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_6_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_6_1")!=COLOR_SE){
			setBad("0_1_64_0_6_1")
		}
		return true
	}
}
function helpm6_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_6_1",r)
}
function rulem6_94_0_0(){
	if(!(stepm6_94_0_0_0())){
		return
	}
	helpm6_94_0_0_1()
}
function stepm6_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_6_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_6_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_6_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_6_2")!=COLOR_SE){
			setBad("0_1_64_0_6_2")
		}
		return true
	}
}
function helpm6_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_6_2",r)
}
function rulem6_94_0_1(){
	if(!(stepm6_94_0_1_0())){
		return
	}
	helpm6_94_0_1_1()
}
function stepm6_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_6_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_6_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_6_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_6_3")!=COLOR_SE){
			setBad("0_1_64_0_6_3")
		}
		return true
	}
}
function helpm6_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_6_3",r)
}
function rulem6_94_0_2(){
	if(!(stepm6_94_0_2_0())){
		return
	}
	helpm6_94_0_2_1()
}
function foreachm6_94_0() {
	rulem6_94_0_0()
	rulem6_94_0_1()
	rulem6_94_0_2()
}
function stepm7_94_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_7_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_7_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_7_1")
		return true
	}else{
		if(getObjBackground("0_1_64_0_7_1")!=COLOR_SE){
			setBad("0_1_64_0_7_1")
		}
		return true
	}
}
function helpm7_94_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_7_1",r)
}
function rulem7_94_0_0(){
	if(!(stepm7_94_0_0_0())){
		return
	}
	helpm7_94_0_0_1()
}
function stepm7_94_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_7_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_7_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_7_2")
		return true
	}else{
		if(getObjBackground("0_1_64_0_7_2")!=COLOR_SE){
			setBad("0_1_64_0_7_2")
		}
		return true
	}
}
function helpm7_94_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_7_2",r)
}
function rulem7_94_0_1(){
	if(!(stepm7_94_0_1_0())){
		return
	}
	helpm7_94_0_1_1()
}
function stepm7_94_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_0_7_3"),gV("0"),">=")),gT(isInt(gV("0_1_64_0_7_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_0_7_3")
		return true
	}else{
		if(getObjBackground("0_1_64_0_7_3")!=COLOR_SE){
			setBad("0_1_64_0_7_3")
		}
		return true
	}
}
function helpm7_94_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_0_7_3",r)
}
function rulem7_94_0_2(){
	if(!(stepm7_94_0_2_0())){
		return
	}
	helpm7_94_0_2_1()
}
function foreachm7_94_0() {
	rulem7_94_0_0()
	rulem7_94_0_1()
	rulem7_94_0_2()
}
function rule94(){
	foreachm0_94_0()
	foreachm1_94_0()
	foreachm2_94_0()
	foreachm3_94_0()
	foreachm4_94_0()
	foreachm5_94_0()
	foreachm6_94_0()
	foreachm7_94_0()
}
function stepm0_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_0_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_0_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_0_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_0_1")!=COLOR_SE){
			setBad("0_1_64_2_0_1")
		}
		return true
	}
}
function helpm0_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_0_1",r)
}
function rulem0_95_0_0(){
	if(!(stepm0_95_0_0_0())){
		return
	}
	helpm0_95_0_0_1()
}
function stepm0_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_0_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_0_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_0_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_0_2")!=COLOR_SE){
			setBad("0_1_64_2_0_2")
		}
		return true
	}
}
function helpm0_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_0_2",r)
}
function rulem0_95_0_1(){
	if(!(stepm0_95_0_1_0())){
		return
	}
	helpm0_95_0_1_1()
}
function foreachm0_95_0() {
	rulem0_95_0_0()
	rulem0_95_0_1()
}
function stepm1_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_1_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_1_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_1_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_1_1")!=COLOR_SE){
			setBad("0_1_64_2_1_1")
		}
		return true
	}
}
function helpm1_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_1_1",r)
}
function rulem1_95_0_0(){
	if(!(stepm1_95_0_0_0())){
		return
	}
	helpm1_95_0_0_1()
}
function stepm1_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_1_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_1_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_1_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_1_2")!=COLOR_SE){
			setBad("0_1_64_2_1_2")
		}
		return true
	}
}
function helpm1_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_1_2",r)
}
function rulem1_95_0_1(){
	if(!(stepm1_95_0_1_0())){
		return
	}
	helpm1_95_0_1_1()
}
function foreachm1_95_0() {
	rulem1_95_0_0()
	rulem1_95_0_1()
}
function stepm2_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_2_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_2_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_2_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_2_1")!=COLOR_SE){
			setBad("0_1_64_2_2_1")
		}
		return true
	}
}
function helpm2_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_2_1",r)
}
function rulem2_95_0_0(){
	if(!(stepm2_95_0_0_0())){
		return
	}
	helpm2_95_0_0_1()
}
function stepm2_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_2_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_2_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_2_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_2_2")!=COLOR_SE){
			setBad("0_1_64_2_2_2")
		}
		return true
	}
}
function helpm2_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_2_2",r)
}
function rulem2_95_0_1(){
	if(!(stepm2_95_0_1_0())){
		return
	}
	helpm2_95_0_1_1()
}
function foreachm2_95_0() {
	rulem2_95_0_0()
	rulem2_95_0_1()
}
function stepm3_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_3_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_3_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_3_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_3_1")!=COLOR_SE){
			setBad("0_1_64_2_3_1")
		}
		return true
	}
}
function helpm3_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_3_1",r)
}
function rulem3_95_0_0(){
	if(!(stepm3_95_0_0_0())){
		return
	}
	helpm3_95_0_0_1()
}
function stepm3_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_3_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_3_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_3_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_3_2")!=COLOR_SE){
			setBad("0_1_64_2_3_2")
		}
		return true
	}
}
function helpm3_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_3_2",r)
}
function rulem3_95_0_1(){
	if(!(stepm3_95_0_1_0())){
		return
	}
	helpm3_95_0_1_1()
}
function foreachm3_95_0() {
	rulem3_95_0_0()
	rulem3_95_0_1()
}
function stepm4_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_4_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_4_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_4_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_4_1")!=COLOR_SE){
			setBad("0_1_64_2_4_1")
		}
		return true
	}
}
function helpm4_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_4_1",r)
}
function rulem4_95_0_0(){
	if(!(stepm4_95_0_0_0())){
		return
	}
	helpm4_95_0_0_1()
}
function stepm4_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_4_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_4_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_4_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_4_2")!=COLOR_SE){
			setBad("0_1_64_2_4_2")
		}
		return true
	}
}
function helpm4_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_4_2",r)
}
function rulem4_95_0_1(){
	if(!(stepm4_95_0_1_0())){
		return
	}
	helpm4_95_0_1_1()
}
function foreachm4_95_0() {
	rulem4_95_0_0()
	rulem4_95_0_1()
}
function stepm5_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_5_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_5_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_5_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_5_1")!=COLOR_SE){
			setBad("0_1_64_2_5_1")
		}
		return true
	}
}
function helpm5_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_5_1",r)
}
function rulem5_95_0_0(){
	if(!(stepm5_95_0_0_0())){
		return
	}
	helpm5_95_0_0_1()
}
function stepm5_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_5_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_5_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_5_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_5_2")!=COLOR_SE){
			setBad("0_1_64_2_5_2")
		}
		return true
	}
}
function helpm5_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_5_2",r)
}
function rulem5_95_0_1(){
	if(!(stepm5_95_0_1_0())){
		return
	}
	helpm5_95_0_1_1()
}
function foreachm5_95_0() {
	rulem5_95_0_0()
	rulem5_95_0_1()
}
function stepm6_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_6_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_6_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_6_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_6_1")!=COLOR_SE){
			setBad("0_1_64_2_6_1")
		}
		return true
	}
}
function helpm6_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_6_1",r)
}
function rulem6_95_0_0(){
	if(!(stepm6_95_0_0_0())){
		return
	}
	helpm6_95_0_0_1()
}
function stepm6_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_6_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_6_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_6_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_6_2")!=COLOR_SE){
			setBad("0_1_64_2_6_2")
		}
		return true
	}
}
function helpm6_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_6_2",r)
}
function rulem6_95_0_1(){
	if(!(stepm6_95_0_1_0())){
		return
	}
	helpm6_95_0_1_1()
}
function foreachm6_95_0() {
	rulem6_95_0_0()
	rulem6_95_0_1()
}
function stepm7_95_0_0_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_7_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_7_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_7_1")
		return true
	}else{
		if(getObjBackground("0_1_64_2_7_1")!=COLOR_SE){
			setBad("0_1_64_2_7_1")
		}
		return true
	}
}
function helpm7_95_0_0_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_7_1",r)
}
function rulem7_95_0_0(){
	if(!(stepm7_95_0_0_0())){
		return
	}
	helpm7_95_0_0_1()
}
function stepm7_95_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_2_7_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_2_7_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_7_2")
		return true
	}else{
		if(getObjBackground("0_1_64_2_7_2")!=COLOR_SE){
			setBad("0_1_64_2_7_2")
		}
		return true
	}
}
function helpm7_95_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_2_7_2",r)
}
function rulem7_95_0_1(){
	if(!(stepm7_95_0_1_0())){
		return
	}
	helpm7_95_0_1_1()
}
function foreachm7_95_0() {
	rulem7_95_0_0()
	rulem7_95_0_1()
}
function rule95(){
	foreachm0_95_0()
	foreachm1_95_0()
	foreachm2_95_0()
	foreachm3_95_0()
	foreachm4_95_0()
	foreachm5_95_0()
	foreachm6_95_0()
	foreachm7_95_0()
}
var tabFriadokstlpec7
function stepm0_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_0_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_0_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_0_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_0_3")!=COLOR_SE){
			setBad("0_1_64_1_0_3")
		}
		return true
	}
}
function helpm0_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_0_3",r)
}
function rulem0_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_0_1"),gV("0_1_64_1_0_2"))))
	if(!(stepm0_96_0_0_1())){
		return
	}
	helpm0_96_0_0_2()
}
function stepm0_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_0_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_0_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_0_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_0_1")!=COLOR_SE){
			setBad("0_1_64_1_0_1")
		}
		return true
	}
}
function helpm0_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_0_1",r)
}
function rulem0_96_0_1(){
	if(!(stepm0_96_0_1_0())){
		return
	}
	helpm0_96_0_1_1()
}
function stepm0_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_0_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_0_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_0_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_0_2")!=COLOR_SE){
			setBad("0_1_64_1_0_2")
		}
		return true
	}
}
function helpm0_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_0_2",r)
}
function rulem0_96_0_2(){
	if(!(stepm0_96_0_2_0())){
		return
	}
	helpm0_96_0_2_1()
}
function foreachm0_96_0() {
	rulem0_96_0_0()
	rulem0_96_0_1()
	rulem0_96_0_2()
}
function stepm1_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_1_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_1_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_1_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_1_3")!=COLOR_SE){
			setBad("0_1_64_1_1_3")
		}
		return true
	}
}
function helpm1_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_1_3",r)
}
function rulem1_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_1_1"),gV("0_1_64_1_1_2"))))
	if(!(stepm1_96_0_0_1())){
		return
	}
	helpm1_96_0_0_2()
}
function stepm1_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_1_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_1_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_1_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_1_1")!=COLOR_SE){
			setBad("0_1_64_1_1_1")
		}
		return true
	}
}
function helpm1_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_1_1",r)
}
function rulem1_96_0_1(){
	if(!(stepm1_96_0_1_0())){
		return
	}
	helpm1_96_0_1_1()
}
function stepm1_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_1_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_1_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_1_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_1_2")!=COLOR_SE){
			setBad("0_1_64_1_1_2")
		}
		return true
	}
}
function helpm1_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_1_2",r)
}
function rulem1_96_0_2(){
	if(!(stepm1_96_0_2_0())){
		return
	}
	helpm1_96_0_2_1()
}
function foreachm1_96_0() {
	rulem1_96_0_0()
	rulem1_96_0_1()
	rulem1_96_0_2()
}
function stepm2_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_2_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_2_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_2_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_2_3")!=COLOR_SE){
			setBad("0_1_64_1_2_3")
		}
		return true
	}
}
function helpm2_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_2_3",r)
}
function rulem2_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_2_1"),gV("0_1_64_1_2_2"))))
	if(!(stepm2_96_0_0_1())){
		return
	}
	helpm2_96_0_0_2()
}
function stepm2_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_2_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_2_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_2_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_2_1")!=COLOR_SE){
			setBad("0_1_64_1_2_1")
		}
		return true
	}
}
function helpm2_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_2_1",r)
}
function rulem2_96_0_1(){
	if(!(stepm2_96_0_1_0())){
		return
	}
	helpm2_96_0_1_1()
}
function stepm2_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_2_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_2_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_2_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_2_2")!=COLOR_SE){
			setBad("0_1_64_1_2_2")
		}
		return true
	}
}
function helpm2_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_2_2",r)
}
function rulem2_96_0_2(){
	if(!(stepm2_96_0_2_0())){
		return
	}
	helpm2_96_0_2_1()
}
function foreachm2_96_0() {
	rulem2_96_0_0()
	rulem2_96_0_1()
	rulem2_96_0_2()
}
function stepm3_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_3_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_3_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_3_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_3_3")!=COLOR_SE){
			setBad("0_1_64_1_3_3")
		}
		return true
	}
}
function helpm3_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_3_3",r)
}
function rulem3_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_3_1"),gV("0_1_64_1_3_2"))))
	if(!(stepm3_96_0_0_1())){
		return
	}
	helpm3_96_0_0_2()
}
function stepm3_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_3_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_3_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_3_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_3_1")!=COLOR_SE){
			setBad("0_1_64_1_3_1")
		}
		return true
	}
}
function helpm3_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_3_1",r)
}
function rulem3_96_0_1(){
	if(!(stepm3_96_0_1_0())){
		return
	}
	helpm3_96_0_1_1()
}
function stepm3_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_3_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_3_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_3_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_3_2")!=COLOR_SE){
			setBad("0_1_64_1_3_2")
		}
		return true
	}
}
function helpm3_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_3_2",r)
}
function rulem3_96_0_2(){
	if(!(stepm3_96_0_2_0())){
		return
	}
	helpm3_96_0_2_1()
}
function foreachm3_96_0() {
	rulem3_96_0_0()
	rulem3_96_0_1()
	rulem3_96_0_2()
}
function stepm4_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_4_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_4_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_4_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_4_3")!=COLOR_SE){
			setBad("0_1_64_1_4_3")
		}
		return true
	}
}
function helpm4_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_4_3",r)
}
function rulem4_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_4_1"),gV("0_1_64_1_4_2"))))
	if(!(stepm4_96_0_0_1())){
		return
	}
	helpm4_96_0_0_2()
}
function stepm4_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_4_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_4_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_4_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_4_1")!=COLOR_SE){
			setBad("0_1_64_1_4_1")
		}
		return true
	}
}
function helpm4_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_4_1",r)
}
function rulem4_96_0_1(){
	if(!(stepm4_96_0_1_0())){
		return
	}
	helpm4_96_0_1_1()
}
function stepm4_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_4_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_4_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_4_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_4_2")!=COLOR_SE){
			setBad("0_1_64_1_4_2")
		}
		return true
	}
}
function helpm4_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_4_2",r)
}
function rulem4_96_0_2(){
	if(!(stepm4_96_0_2_0())){
		return
	}
	helpm4_96_0_2_1()
}
function foreachm4_96_0() {
	rulem4_96_0_0()
	rulem4_96_0_1()
	rulem4_96_0_2()
}
function stepm5_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_5_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_5_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_5_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_5_3")!=COLOR_SE){
			setBad("0_1_64_1_5_3")
		}
		return true
	}
}
function helpm5_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_5_3",r)
}
function rulem5_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_5_1"),gV("0_1_64_1_5_2"))))
	if(!(stepm5_96_0_0_1())){
		return
	}
	helpm5_96_0_0_2()
}
function stepm5_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_5_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_5_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_5_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_5_1")!=COLOR_SE){
			setBad("0_1_64_1_5_1")
		}
		return true
	}
}
function helpm5_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_5_1",r)
}
function rulem5_96_0_1(){
	if(!(stepm5_96_0_1_0())){
		return
	}
	helpm5_96_0_1_1()
}
function stepm5_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_5_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_5_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_5_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_5_2")!=COLOR_SE){
			setBad("0_1_64_1_5_2")
		}
		return true
	}
}
function helpm5_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_5_2",r)
}
function rulem5_96_0_2(){
	if(!(stepm5_96_0_2_0())){
		return
	}
	helpm5_96_0_2_1()
}
function foreachm5_96_0() {
	rulem5_96_0_0()
	rulem5_96_0_1()
	rulem5_96_0_2()
}
function stepm6_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_6_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_6_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_6_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_6_3")!=COLOR_SE){
			setBad("0_1_64_1_6_3")
		}
		return true
	}
}
function helpm6_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_6_3",r)
}
function rulem6_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_6_1"),gV("0_1_64_1_6_2"))))
	if(!(stepm6_96_0_0_1())){
		return
	}
	helpm6_96_0_0_2()
}
function stepm6_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_6_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_6_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_6_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_6_1")!=COLOR_SE){
			setBad("0_1_64_1_6_1")
		}
		return true
	}
}
function helpm6_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_6_1",r)
}
function rulem6_96_0_1(){
	if(!(stepm6_96_0_1_0())){
		return
	}
	helpm6_96_0_1_1()
}
function stepm6_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_6_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_6_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_6_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_6_2")!=COLOR_SE){
			setBad("0_1_64_1_6_2")
		}
		return true
	}
}
function helpm6_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_6_2",r)
}
function rulem6_96_0_2(){
	if(!(stepm6_96_0_2_0())){
		return
	}
	helpm6_96_0_2_1()
}
function foreachm6_96_0() {
	rulem6_96_0_0()
	rulem6_96_0_1()
	rulem6_96_0_2()
}
function stepm7_96_0_0_1(){
	r=and(gT(eq(gV("0_1_64_1_7_3"),gV(tabFriadokstlpec7))),gT(isInt(gV("0_1_64_1_7_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_7_3")
		return true
	}else{
		if(getObjBackground("0_1_64_1_7_3")!=COLOR_SE){
			setBad("0_1_64_1_7_3")
		}
		return true
	}
}
function helpm7_96_0_0_2(){
	r=concat(gT(tabFriadokstlpec7 ),gT(" \(max\(0, Tab. F príslu¹ný riadok s5 + Tab. F príslu¹ný riadok s6\)\)"))
	setTitle("0_1_64_1_7_3",r)
}
function rulem7_96_0_0(){
	tabFriadokstlpec7 = max(gV("0"),gV(plus(gV("0_1_64_1_7_1"),gV("0_1_64_1_7_2"))))
	if(!(stepm7_96_0_0_1())){
		return
	}
	helpm7_96_0_0_2()
}
function stepm7_96_0_1_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_7_1"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_7_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_7_1")
		return true
	}else{
		if(getObjBackground("0_1_64_1_7_1")!=COLOR_SE){
			setBad("0_1_64_1_7_1")
		}
		return true
	}
}
function helpm7_96_0_1_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_7_1",r)
}
function rulem7_96_0_1(){
	if(!(stepm7_96_0_1_0())){
		return
	}
	helpm7_96_0_1_1()
}
function stepm7_96_0_2_0(){
	r=and(gT(compNumbers(gV("0_1_64_1_7_2"),gV("0"),">=")),gT(isInt(gV("0_1_64_1_7_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_1_7_2")
		return true
	}else{
		if(getObjBackground("0_1_64_1_7_2")!=COLOR_SE){
			setBad("0_1_64_1_7_2")
		}
		return true
	}
}
function helpm7_96_0_2_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_64_1_7_2",r)
}
function rulem7_96_0_2(){
	if(!(stepm7_96_0_2_0())){
		return
	}
	helpm7_96_0_2_1()
}
function foreachm7_96_0() {
	rulem7_96_0_0()
	rulem7_96_0_1()
	rulem7_96_0_2()
}
function rule96(){
	foreachm0_96_0()
	foreachm1_96_0()
	foreachm2_96_0()
	foreachm3_96_0()
	foreachm4_96_0()
	foreachm5_96_0()
	foreachm6_96_0()
	foreachm7_96_0()
}
var varTabFr1s10
function step97_1_0(){
	r= not(gT(eq(gV("0_1_64_2_0_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule97_1(){
	if(!(step97_1_0())){
		return
	}
	varTabFr1s10 = max(gV("0"),gV(min(gV(varTabFr1s10),gV("0_1_64_2_0_2"))))
}
function step97_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_0_3"),gV(varTabFr1s10),"<=")),gT(compNumbers(gV("0_1_64_2_0_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_0_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_0_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_0_3")!=COLOR_SE){
			setBad("0_1_64_2_0_3")
		}
		return true
	}
}
function help97_3(){
	r=concat(gT(varTabFr1s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_0_3",r)
}
function rule97(){
	varTabFr1s10 = max(gV("0"),gV(min(gV("0_1_64_1_0_3"),gV("0_1_64_2_0_1"))))
	rule97_1()
	if(!(step97_2())){
		return
	}
	help97_3()
}
var varTabFr2s10
function step98_1_0(){
	r= not(gT(eq(gV("0_1_64_2_1_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule98_1(){
	if(!(step98_1_0())){
		return
	}
	varTabFr2s10 = max(gV("0"),gV(min(gV(varTabFr2s10),gV("0_1_64_2_1_2"))))
}
function step98_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_1_3"),gV(varTabFr2s10),"<=")),gT(compNumbers(gV("0_1_64_2_1_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_1_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_1_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_1_3")!=COLOR_SE){
			setBad("0_1_64_2_1_3")
		}
		return true
	}
}
function help98_3(){
	r=concat(gT(varTabFr2s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_1_3",r)
}
function rule98(){
	varTabFr2s10 = max(gV("0"),gV(min(gV("0_1_64_1_1_3"),gV("0_1_64_2_1_1"))))
	rule98_1()
	if(!(step98_2())){
		return
	}
	help98_3()
}
var varTabFr3s10
function step99_1_0(){
	r= not(gT(eq(gV("0_1_64_2_2_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule99_1(){
	if(!(step99_1_0())){
		return
	}
	varTabFr3s10 = max(gV("0"),gV(min(gV(varTabFr3s10),gV("0_1_64_2_2_2"))))
}
function step99_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_2_3"),gV(varTabFr3s10),"<=")),gT(compNumbers(gV("0_1_64_2_2_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_2_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_2_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_2_3")!=COLOR_SE){
			setBad("0_1_64_2_2_3")
		}
		return true
	}
}
function help99_3(){
	r=concat(gT(varTabFr3s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_2_3",r)
}
function rule99(){
	varTabFr3s10 = max(gV("0"),gV(min(gV("0_1_64_1_2_3"),gV("0_1_64_2_2_1"))))
	rule99_1()
	if(!(step99_2())){
		return
	}
	help99_3()
}
var varTabFr4s10
function step100_1_0(){
	r= not(gT(eq(gV("0_1_64_2_3_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule100_1(){
	if(!(step100_1_0())){
		return
	}
	varTabFr4s10 = max(gV("0"),gV(min(gV(varTabFr4s10),gV("0_1_64_2_3_2"))))
}
function step100_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_3_3"),gV(varTabFr4s10),"<=")),gT(compNumbers(gV("0_1_64_2_3_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_3_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_3_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_3_3")!=COLOR_SE){
			setBad("0_1_64_2_3_3")
		}
		return true
	}
}
function help100_3(){
	r=concat(gT(varTabFr4s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_3_3",r)
}
function rule100(){
	varTabFr4s10 = max(gV("0"),gV(min(gV("0_1_64_1_3_3"),gV("0_1_64_2_3_1"))))
	rule100_1()
	if(!(step100_2())){
		return
	}
	help100_3()
}
var varTabFr5s10
function step101_1_0(){
	r= not(gT(eq(gV("0_1_64_2_4_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule101_1(){
	if(!(step101_1_0())){
		return
	}
	varTabFr5s10 = max(gV("0"),gV(min(gV(varTabFr5s10),gV("0_1_64_2_4_2"))))
}
function step101_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_4_3"),gV(varTabFr5s10),"<=")),gT(compNumbers(gV("0_1_64_2_4_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_4_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_4_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_4_3")!=COLOR_SE){
			setBad("0_1_64_2_4_3")
		}
		return true
	}
}
function help101_3(){
	r=concat(gT(varTabFr5s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_4_3",r)
}
function rule101(){
	varTabFr5s10 = max(gV("0"),gV(min(gV("0_1_64_1_4_3"),gV("0_1_64_2_4_1"))))
	rule101_1()
	if(!(step101_2())){
		return
	}
	help101_3()
}
var varTabFr6s10
function step102_1_0(){
	r= not(gT(eq(gV("0_1_64_2_5_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule102_1(){
	if(!(step102_1_0())){
		return
	}
	varTabFr6s10 = max(gV("0"),gV(min(gV(varTabFr6s10),gV("0_1_64_2_5_2"))))
}
function step102_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_5_3"),gV(varTabFr6s10),"<=")),gT(compNumbers(gV("0_1_64_2_5_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_5_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_5_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_5_3")!=COLOR_SE){
			setBad("0_1_64_2_5_3")
		}
		return true
	}
}
function help102_3(){
	r=concat(gT(varTabFr6s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_5_3",r)
}
function rule102(){
	varTabFr6s10 = max(gV("0"),gV(min(gV("0_1_64_1_5_3"),gV("0_1_64_2_5_1"))))
	rule102_1()
	if(!(step102_2())){
		return
	}
	help102_3()
}
var varTabFr7s10
function step103_1_0(){
	r= not(gT(eq(gV("0_1_64_2_6_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule103_1(){
	if(!(step103_1_0())){
		return
	}
	varTabFr7s10 = max(gV("0"),gV(min(gV(varTabFr7s10),gV("0_1_64_2_6_2"))))
}
function step103_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_6_3"),gV(varTabFr7s10),"<=")),gT(compNumbers(gV("0_1_64_2_6_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_6_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_6_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_6_3")!=COLOR_SE){
			setBad("0_1_64_2_6_3")
		}
		return true
	}
}
function help103_3(){
	r=concat(gT(varTabFr7s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_6_3",r)
}
function rule103(){
	varTabFr7s10 = max(gV("0"),gV(min(gV("0_1_64_1_6_3"),gV("0_1_64_2_6_1"))))
	rule103_1()
	if(!(step103_2())){
		return
	}
	help103_3()
}
var varTabFr8s10
function step104_1_0(){
	r= not(gT(eq(gV("0_1_64_2_7_2"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function rule104_1(){
	if(!(step104_1_0())){
		return
	}
	varTabFr8s10 = max(gV("0"),gV(min(gV(varTabFr8s10),gV("0_1_64_2_7_2"))))
}
function step104_2(){
	r=and(gT(and(gT(compNumbers(gV("0_1_64_2_7_3"),gV(varTabFr8s10),"<=")),gT(compNumbers(gV("0_1_64_2_7_3"),gV("0"),">=")))),gT(isInt(gV("0_1_64_2_7_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_64_2_7_3")
		return true
	}else{
		if(getObjBackground("0_1_64_2_7_3")!=COLOR_SE){
			setBad("0_1_64_2_7_3")
		}
		return true
	}
}
function help104_3(){
	r=concat(gT(varTabFr8s10 ),gT(" \(Nezáporné celé èíslo < Tab. F s.7; Tab. F s. 8; Tab F s.9\)"))
	setTitle("0_1_64_2_7_3",r)
}
function rule104(){
	varTabFr8s10 = max(gV("0"),gV(min(gV("0_1_64_1_7_3"),gV("0_1_64_2_7_1"))))
	rule104_1()
	if(!(step104_2())){
		return
	}
	help104_3()
}
function step105_0(){
	r=and(gT(compNumbers(gV("0_1_65_0"),gV("0"),">=")),gT(isInt(gV("0_1_65_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_65_0")
		return true
	}else{
		if(getObjBackground("0_1_65_0")!=COLOR_SE){
			setBad("0_1_65_0")
		}
		return true
	}
}
function help105_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_65_0",r)
}
function rule105(){
	if(!(step105_0())){
		return
	}
	help105_1()
}
function step106_0(){
	r=and(gT(compNumbers(gV("0_1_65_1"),gV("0"),">=")),gT(isInt(gV("0_1_65_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_65_1")
		return true
	}else{
		if(getObjBackground("0_1_65_1")!=COLOR_SE){
			setBad("0_1_65_1")
		}
		return true
	}
}
function help106_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_65_1",r)
}
function rule106(){
	if(!(step106_0())){
		return
	}
	help106_1()
}
function step107_0(){
	r=and(gT(compNumbers(gV("0_1_66_0"),gV("0"),">=")),gT(isInt(gV("0_1_66_0"))))
	if(r!="error"&&(r)){
		setOk("0_1_66_0")
		return true
	}else{
		if(getObjBackground("0_1_66_0")!=COLOR_SE){
			setBad("0_1_66_0")
		}
		return true
	}
}
function help107_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_66_0",r)
}
function rule107(){
	if(!(step107_0())){
		return
	}
	help107_1()
}
function step108_0(){
	r=and(gT(compNumbers(gV("0_1_66_1"),gV("0"),">=")),gT(isInt(gV("0_1_66_1"))))
	if(r!="error"&&(r)){
		setOk("0_1_66_1")
		return true
	}else{
		if(getObjBackground("0_1_66_1")!=COLOR_SE){
			setBad("0_1_66_1")
		}
		return true
	}
}
function help108_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_66_1",r)
}
function rule108(){
	if(!(step108_0())){
		return
	}
	help108_1()
}
function step109_0(){
	r=and(gT(compNumbers(gV("0_1_66_2"),gV("0"),">=")),gT(isInt(gV("0_1_66_2"))))
	if(r!="error"&&(r)){
		setOk("0_1_66_2")
		return true
	}else{
		if(getObjBackground("0_1_66_2")!=COLOR_SE){
			setBad("0_1_66_2")
		}
		return true
	}
}
function help109_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_66_2",r)
}
function rule109(){
	if(!(step109_0())){
		return
	}
	help109_1()
}
function step110_0(){
	r=and(gT(compNumbers(gV("0_1_66_3"),gV("0"),">=")),gT(isInt(gV("0_1_66_3"))))
	if(r!="error"&&(r)){
		setOk("0_1_66_3")
		return true
	}else{
		if(getObjBackground("0_1_66_3")!=COLOR_SE){
			setBad("0_1_66_3")
		}
		return true
	}
}
function help110_1(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_66_3",r)
}
function rule110(){
	if(!(step110_0())){
		return
	}
	help110_1()
}
function step111_0(){
	r= and(gT(and(gT(eq(gV("0_0_0_2"),gV("1"))),gT(eq(gV("0_0_0_1"),gV("0"))))),gT(eq(gV("0_0_0_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step111_1(){
	r=and(gT(compNumbers(gV("0_1_53"),gV("0"),">=")),gT(isInt(gV("0_1_53"))))
	if(r!="error"&&(r)){
		setOk("0_1_53")
		return true
	}else{
		if(getObjBackground("0_1_53")!=COLOR_SE){
			setBad("0_1_53")
		}
		return true
	}
}
function help111_2(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_53",r)
}
function rule111(){
	if(!(step111_0())){
		return
	}
	if(!(step111_1())){
		return
	}
	help111_2()
}
function step112_0(){
	r= or(gT(or(gT(eq(gV("0_0_0_2"),gV("0"))),gT(eq(gV("0_0_0_1"),gV("1"))))),gT(eq(gV("0_0_0_0"),gV("1"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step112_1(){
	r=and(gT(eq(gT("0_1_53"),gT(""))),gT(eq(gV("0_1_53"),gV("0_1_53"))))
	if(r!="error"&&(r)){
		setOk("0_1_53")
		return true
	}else{
		if(getObjBackground("0_1_53")!=COLOR_SE){
			setBad("0_1_53")
		}
		return true
	}
}
function help112_2(){
	r=""
	setTitle("0_1_53",r)
}
function rule112(){
	if(!(step112_0())){
		return
	}
	if(!(step112_1())){
		return
	}
	help112_2()
}
function step113_0(){
	r= and(gT(and(gT(eq(gV("0_0_0_2"),gV("1"))),gT(eq(gV("0_0_0_1"),gV("0"))))),gT(eq(gV("0_0_0_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step113_1(){
	r=and(gT(compNumbers(gV("0_1_56"),gV("0"),">=")),gT(isInt(gV("0_1_56"))))
	if(r!="error"&&(r)){
		setOk("0_1_56")
		return true
	}else{
		if(getObjBackground("0_1_56")!=COLOR_SE){
			setBad("0_1_56")
		}
		return true
	}
}
function help113_2(){
	r="Nezáporné celé èíslo"
	setTitle("0_1_56",r)
}
function rule113(){
	if(!(step113_0())){
		return
	}
	if(!(step113_1())){
		return
	}
	help113_2()
}
function step114_0(){
	r= or(gT(or(gT(eq(gV("0_0_0_2"),gV("0"))),gT(eq(gV("0_0_0_1"),gV("1"))))),gT(eq(gV("0_0_0_0"),gV("1"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step114_1(){
	r=and(gT(eq(gT("0_1_56"),gT(""))),gT(eq(gV("0_1_56"),gV("0_1_56"))))
	if(r!="error"&&(r)){
		setOk("0_1_56")
		return true
	}else{
		if(getObjBackground("0_1_56")!=COLOR_SE){
			setBad("0_1_56")
		}
		return true
	}
}
function help114_2(){
	r=""
	setTitle("0_1_56",r)
}
function rule114(){
	if(!(step114_0())){
		return
	}
	if(!(step114_1())){
		return
	}
	help114_2()
}
function step115_0(){
	r= and(gT(and(gT(eq(gV("0_0_0_2"),gV("1"))),gT(eq(gV("0_0_0_1"),gV("0"))))),gT(eq(gV("0_0_0_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var riadok930
function step115_2(){
	r=and(gT(eq(gV("0_1_54"),gV(riadok930))),gT(isInt(gV("0_1_54"))))
	if(r!="error"&&(r)){
		setOk("0_1_54")
		return true
	}else{
		if(getObjBackground("0_1_54")!=COLOR_SE){
			setBad("0_1_54")
		}
		return true
	}
}
function help115_3(){
	r=concat(gT(riadok930 ),gT(" \(max\(0, r800\)\)"))
	setTitle("0_1_54",r)
}
function rule115(){
	if(!(step115_0())){
		return
	}
	riadok930 = max(gV("0"),gV(mul(gV("0_1_42"),gV("100"))))
	if(!(step115_2())){
		return
	}
	help115_3()
}
function step116_0(){
	r= or(gT(or(gT(eq(gV("0_0_0_2"),gV("0"))),gT(eq(gV("0_0_0_1"),gV("1"))))),gT(eq(gV("0_0_0_0"),gV("1"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step116_1(){
	r=and(gT(eq(gT("0_1_54"),gT(""))),gT(eq(gV("0_1_54"),gV("0_1_54"))))
	if(r!="error"&&(r)){
		setOk("0_1_54")
		return true
	}else{
		if(getObjBackground("0_1_54")!=COLOR_SE){
			setBad("0_1_54")
		}
		return true
	}
}
function help116_2(){
	r=""
	setTitle("0_1_54",r)
}
function rule116(){
	if(!(step116_0())){
		return
	}
	if(!(step116_1())){
		return
	}
	help116_2()
}
function step117_0(){
	r= and(gT(and(gT(eq(gV("0_0_0_2"),gV("1"))),gT(eq(gV("0_0_0_1"),gV("0"))))),gT(eq(gV("0_0_0_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var riadok940
function step117_2(){
	r=and(gT(eq(gV("0_1_55"),gV(riadok940))),gT(isInt(gV("0_1_55"))))
	if(r!="error"&&(r)){
		setOk("0_1_55")
		return true
	}else{
		if(getObjBackground("0_1_55")!=COLOR_SE){
			setBad("0_1_55")
		}
		return true
	}
}
function help117_3(){
	r=concat(gT(riadok940 ),gT(" \(r930 - r920\)"))
	setTitle("0_1_55",r)
}
function rule117(){
	if(!(step117_0())){
		return
	}
	riadok940 = minus(gV("0_1_54"),gV("0_1_53"))
	if(!(step117_2())){
		return
	}
	help117_3()
}
function step118_0(){
	r= or(gT(or(gT(eq(gV("0_0_0_2"),gV("0"))),gT(eq(gV("0_0_0_1"),gV("1"))))),gT(eq(gV("0_0_0_0"),gV("1"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step118_1(){
	r=and(gT(eq(gT("0_1_55"),gT(""))),gT(eq(gV("0_1_55"),gV("0_1_55"))))
	if(r!="error"&&(r)){
		setOk("0_1_55")
		return true
	}else{
		if(getObjBackground("0_1_55")!=COLOR_SE){
			setBad("0_1_55")
		}
		return true
	}
}
function help118_2(){
	r=""
	setTitle("0_1_55",r)
}
function rule118(){
	if(!(step118_0())){
		return
	}
	if(!(step118_1())){
		return
	}
	help118_2()
}
function step119_0(){
	r= and(gT(and(gT(eq(gV("0_0_0_2"),gV("1"))),gT(eq(gV("0_0_0_1"),gV("0"))))),gT(eq(gV("0_0_0_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var riadok960
function step119_2(){
	r=and(gT(eq(gV("0_1_57"),gV(riadok960))),gT(isInt(gV("0_1_57"))))
	if(r!="error"&&(r)){
		setOk("0_1_57")
		return true
	}else{
		if(getObjBackground("0_1_57")!=COLOR_SE){
			setBad("0_1_57")
		}
		return true
	}
}
function help119_3(){
	r=concat(gT(riadok960 ),gT(" \(max\(0, -r400\)\)"))
	setTitle("0_1_57",r)
}
function rule119(){
	if(!(step119_0())){
		return
	}
	riadok960 = max(gV("0"),gV(mul(gV("0_1_24"),gV("-1"))))
	if(!(step119_2())){
		return
	}
	help119_3()
}
function step120_0(){
	r= or(gT(or(gT(eq(gV("0_0_0_2"),gV("0"))),gT(eq(gV("0_0_0_1"),gV("1"))))),gT(eq(gV("0_0_0_0"),gV("1"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step120_1(){
	r=and(gT(eq(gT("0_1_57"),gT(""))),gT(eq(gV("0_1_57"),gV("0_1_57"))))
	if(r!="error"&&(r)){
		setOk("0_1_57")
		return true
	}else{
		if(getObjBackground("0_1_57")!=COLOR_SE){
			setBad("0_1_57")
		}
		return true
	}
}
function help120_2(){
	r=""
	setTitle("0_1_57",r)
}
function rule120(){
	if(!(step120_0())){
		return
	}
	if(!(step120_1())){
		return
	}
	help120_2()
}
function step121_0(){
	r= and(gT(and(gT(eq(gV("0_0_0_2"),gV("1"))),gT(eq(gV("0_0_0_1"),gV("0"))))),gT(eq(gV("0_0_0_0"),gV("0"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
var riadok970
function step121_2(){
	r=and(gT(eq(gV("0_1_58"),gV(riadok970))),gT(isInt(gV("0_1_58"))))
	if(r!="error"&&(r)){
		setOk("0_1_58")
		return true
	}else{
		if(getObjBackground("0_1_58")!=COLOR_SE){
			setBad("0_1_58")
		}
		return true
	}
}
function help121_3(){
	r=concat(gT(riadok970 ),gT(" \(r960 - r950\)"))
	setTitle("0_1_58",r)
}
function rule121(){
	if(!(step121_0())){
		return
	}
	riadok970 = minus(gV("0_1_57"),gV("0_1_56"))
	if(!(step121_2())){
		return
	}
	help121_3()
}
function step122_0(){
	r= or(gT(or(gT(eq(gV("0_0_0_2"),gV("0"))),gT(eq(gV("0_0_0_1"),gV("1"))))),gT(eq(gV("0_0_0_0"),gV("1"))))
	if(r!="error"&&(r)){
		return true
	}else{
		return false
	}
}
function step122_1(){
	r=and(gT(eq(gT("0_1_58"),gT(""))),gT(eq(gV("0_1_58"),gV("0_1_58"))))
	if(r!="error"&&(r)){
		setOk("0_1_58")
		return true
	}else{
		if(getObjBackground("0_1_58")!=COLOR_SE){
			setBad("0_1_58")
		}
		return true
	}
}
function help122_2(){
	r=""
	setTitle("0_1_58",r)
}
function rule122(){
	if(!(step122_0())){
		return
	}
	if(!(step122_1())){
		return
	}
	help122_2()
}
function onLoad() {
	rule0()
	rule1()
	rule2()
	rule3()
	rule4()
	rule5()
	rule6()
	rule7()
	rule8()
	rule9()
	rule10()
	rule11()
	rule12()
	rule13()
	rule14()
	rule15()
	rule16()
	rule17()
	rule18()
	rule19()
	rule20()
	rule21()
	rule22()
	rule23()
	rule24()
	rule25()
	rule26()
	rule27()
	rule28()
	rule29()
	rule30()
	rule31()
	rule32()
	rule33()
	rule34()
	rule35()
	rule36()
	rule37()
	rule38()
	rule39()
	rule40()
	rule41()
	rule42()
	rule43()
	rule44()
	rule45()
	rule46()
	rule47()
	rule48()
	rule49()
	rule50()
	rule51()
	rule52()
	rule53()
	rule54()
	rule55()
	rule56()
	rule57()
	rule58()
	rule59()
	rule60()
	rule61()
	rule62()
	rule63()
	rule64()
	rule65()
	rule66()
	rule67()
	rule68()
	rule69()
	rule70()
	rule71()
	rule72()
	rule73()
	rule74()
	rule75()
	rule76()
	rule77()
	rule78()
	rule79()
	rule80()
	rule81()
	rule82()
	rule83()
	rule84()
	rule85()
	rule86()
	rule87()
	rule88()
	rule89()
	rule90()
	rule91()
	rule92()
	rule93()
	rule94()
	rule95()
	rule96()
	rule97()
	rule98()
	rule99()
	rule100()
	rule101()
	rule102()
	rule103()
	rule104()
	rule105()
	rule106()
	rule107()
	rule108()
	rule109()
	rule110()
	rule111()
	rule112()
	rule113()
	rule114()
	rule115()
	rule116()
	rule117()
	rule118()
	rule119()
	rule120()
	rule121()
	rule122()
}
function check(field) {
	switch(field) {
		case "0_0_3":
			rule1()
			break
		case "0_0_4":
			rule1()
			break
		case "0_0_6":
			rule1()
			break
		case "0_0_5":
			rule1()
			break
		case "0_0_7_2":
			rule1()
			break
		case "0_0_7_3":
			rule1()
			break
		case "0_0_7_5":
			rule1()
			break
		case "0_0_7_6":
			rule1()
			break
		case "0_0_7_7":
			rule1()
			break
		case "0_0_7_8":
			rule1()
			break
		case "0_0_7_9_2":
			rule1()
			break
		case "0_0_7_10_2":
			rule1()
			break
		case "0_0_8_4_1":
			rule1()
			break
		case "0_0_8_4_4":
			rule1()
			break
		case "0_0_8_4_5":
			rule1()
			break
		case "0_0_8_4_6":
			rule1()
			break
		case "0_0_8_4_7":
			rule1()
			break
		case "0_1_66_0":
			rule2()
			rule107()
			break
		case "0_1_66_1":
			rule2()
			rule108()
			break
		case "0_1_0_1":
			rule2()
			rule23()
			break
		case "0_1_1":
			rule3()
			rule12()
			break
		case "0_1_2":
			rule4()
			rule12()
			break
		case "0_1_59_18":
			rule5()
			rule75()
			break
		case "0_1_3":
			rule5()
			rule12()
			break
		case "0_1_4":
			rule6()
			rule12()
			break
		case "0_1_5":
			rule7()
			rule12()
			break
		case "0_1_6":
			rule8()
			rule12()
			break
		case "0_1_7":
			rule9()
			rule12()
			break
		case "0_1_8":
			rule10()
			rule12()
			break
		case "0_1_9":
			rule11()
			rule12()
			break
		case "0_1_10":
			rule12()
			rule23()
			break
		case "0_1_11":
			rule13()
			rule22()
			break
		case "0_1_12":
			rule14()
			rule22()
			break
		case "0_1_13":
			rule15()
			rule22()
			break
		case "0_1_14":
			rule16()
			rule22()
			break
		case "0_1_15":
			rule17()
			rule18()
			rule22()
			break
		case "0_1_16":
			rule18()
			rule22()
			break
		case "0_1_17":
			rule19()
			rule22()
			break
		case "0_1_18":
			rule20()
			rule22()
			break
		case "0_1_19":
			rule21()
			rule22()
			break
		case "0_1_20":
			rule22()
			rule23()
			break
		case "0_1_21":
			rule23()
			rule26()
			break
		case "0_1_22":
			rule24()
			rule26()
			break
		case "0_1_23":
			rule25()
			rule26()
			break
		case "0_1_24":
			rule26()
			rule28()
			rule30()
			rule31()
			rule32()
			rule33()
			rule35()
			rule36()
			rule87()
			rule119()
			break
		case "0_0_10_2":
			rule27()
			break
		case "0_1_64_2_0_0":
			rule27()
			break
		case "0_1_64_2_0_3":
			rule27()
			rule97()
			break
		case "0_1_64_2_1_0":
			rule27()
			break
		case "0_1_64_2_1_3":
			rule27()
			rule98()
			break
		case "0_1_64_2_2_0":
			rule27()
			break
		case "0_1_64_2_2_3":
			rule27()
			rule99()
			break
		case "0_1_64_2_3_0":
			rule27()
			break
		case "0_1_64_2_3_3":
			rule27()
			rule100()
			break
		case "0_1_64_2_4_0":
			rule27()
			break
		case "0_1_64_2_4_3":
			rule27()
			rule101()
			break
		case "0_1_64_2_5_0":
			rule27()
			break
		case "0_1_64_2_5_3":
			rule27()
			rule102()
			break
		case "0_1_64_2_6_0":
			rule27()
			break
		case "0_1_64_2_6_3":
			rule27()
			rule103()
			break
		case "0_1_64_2_7_0":
			rule27()
			break
		case "0_1_64_2_7_3":
			rule27()
			rule104()
			break
		case "0_1_25":
			rule27()
			rule35()
			break
		case "0_1_26":
			rule28()
			rule35()
			break
		case "0_1_27":
			rule29()
			rule35()
			break
		case "0_1_28":
			rule30()
			rule31()
			rule35()
			break
		case "0_1_29":
			rule32()
			rule33()
			rule35()
			break
		case "0_1_30":
			rule34()
			rule35()
			break
		case "0_1_31":
			rule35()
			rule36()
			break
		case "0_1_32":
			rule36()
			rule38()
			break
		case "0_1_33":
			rule37()
			rule38()
			break
		case "0_1_34":
			rule38()
			rule43()
			rule44()
			rule56()
			rule91()
			break
		case "0_1_35_1":
			rule39()
			rule43()
			break
		case "0_1_36_1":
			rule40()
			rule43()
			rule56()
			break
		case "0_1_37":
			rule41()
			rule43()
			rule56()
			break
		case "0_1_38":
			rule42()
			rule43()
			rule56()
			break
		case "0_1_39":
			rule43()
			rule44()
			break
		case "0_1_40":
			rule44()
			rule45()
			rule46()
			break
		case "0_1_63_5":
			rule45()
			rule93()
			break
		case "0_1_41":
			rule45()
			rule46()
			rule56()
			break
		case "0_1_42":
			rule46()
			rule51()
			rule52()
			rule115()
			break
		case "0_1_43_3":
			rule47()
			rule50()
			break
		case "0_1_44_3":
			rule48()
			rule50()
			break
		case "0_1_45":
			rule49()
			rule50()
			rule51()
			rule52()
			rule56()
			break
		case "0_1_46":
			rule50()
			rule53()
			break
		case "0_1_47":
			rule51()
			rule52()
			rule53()
			break
		case "0_1_48_3":
			rule53()
			break
		case "0_1_49":
			rule54()
			break
		case "0_1_50":
			rule55()
			break
		case "0_1_51":
			rule56()
			break
		case "0_1_59_0":
			rule57()
			rule75()
			break
		case "0_1_59_1":
			rule58()
			rule75()
			break
		case "0_1_59_2":
			rule59()
			rule75()
			break
		case "0_1_59_3":
			rule60()
			rule75()
			break
		case "0_1_59_4":
			rule61()
			rule75()
			break
		case "0_1_59_5":
			rule62()
			rule75()
			break
		case "0_1_59_6":
			rule63()
			rule75()
			break
		case "0_1_59_7":
			rule64()
			rule75()
			break
		case "0_1_59_8":
			rule65()
			rule75()
			break
		case "0_1_59_9":
			rule66()
			rule75()
			break
		case "0_1_59_10":
			rule67()
			rule75()
			break
		case "0_1_59_11":
			rule68()
			rule75()
			break
		case "0_1_59_12":
			rule69()
			rule75()
			break
		case "0_1_59_13":
			rule70()
			rule75()
			break
		case "0_1_59_14":
			rule71()
			rule75()
			break
		case "0_1_59_15":
			rule72()
			rule75()
			break
		case "0_1_59_16":
			rule73()
			rule75()
			break
		case "0_1_62_0":
			rule73()
			rule82()
			rule83()
			break
		case "0_1_59_17":
			rule74()
			rule75()
			break
		case "0_1_60_0":
			rule76()
			break
		case "0_1_60_1":
			rule77()
			break
		case "0_1_60_2":
			rule78()
			break
		case "0_1_61_0":
			rule79()
			break
		case "0_1_61_1":
			rule80()
			break
		case "0_1_61_2":
			rule81()
			break
		case "0_1_62_1":
			rule83()
			rule84()
			rule85()
			rule86()
			break
		case "0_1_62_2":
			rule84()
			break
		case "0_1_62_3":
			rule85()
			break
		case "0_1_62_4":
			rule86()
			break
		case "0_1_63_0":
			rule87()
			rule88()
			rule90()
			break
		case "0_1_63_1":
			rule89()
			rule90()
			break
		case "0_1_63_2":
			rule90()
			rule91()
			break
		case "0_1_63_3":
			rule91()
			rule93()
			break
		case "0_1_63_4":
			rule92()
			rule93()
			break
		case "0_1_64_0_0_1":
			rule94()
			break
		case "0_1_64_0_0_2":
			rule94()
			break
		case "0_1_64_0_0_3":
			rule94()
			break
		case "0_1_64_0_1_1":
			rule94()
			break
		case "0_1_64_0_1_2":
			rule94()
			break
		case "0_1_64_0_1_3":
			rule94()
			break
		case "0_1_64_0_2_1":
			rule94()
			break
		case "0_1_64_0_2_2":
			rule94()
			break
		case "0_1_64_0_2_3":
			rule94()
			break
		case "0_1_64_0_3_1":
			rule94()
			break
		case "0_1_64_0_3_2":
			rule94()
			break
		case "0_1_64_0_3_3":
			rule94()
			break
		case "0_1_64_0_4_1":
			rule94()
			break
		case "0_1_64_0_4_2":
			rule94()
			break
		case "0_1_64_0_4_3":
			rule94()
			break
		case "0_1_64_0_5_1":
			rule94()
			break
		case "0_1_64_0_5_2":
			rule94()
			break
		case "0_1_64_0_5_3":
			rule94()
			break
		case "0_1_64_0_6_1":
			rule94()
			break
		case "0_1_64_0_6_2":
			rule94()
			break
		case "0_1_64_0_6_3":
			rule94()
			break
		case "0_1_64_0_7_1":
			rule94()
			break
		case "0_1_64_0_7_2":
			rule94()
			break
		case "0_1_64_0_7_3":
			rule94()
			break
		case "0_1_64_2_0_1":
			rule95()
			rule97()
			break
		case "0_1_64_2_0_2":
			rule95()
			rule97()
			break
		case "0_1_64_2_1_1":
			rule95()
			rule98()
			break
		case "0_1_64_2_1_2":
			rule95()
			rule98()
			break
		case "0_1_64_2_2_1":
			rule95()
			rule99()
			break
		case "0_1_64_2_2_2":
			rule95()
			rule99()
			break
		case "0_1_64_2_3_1":
			rule95()
			rule100()
			break
		case "0_1_64_2_3_2":
			rule95()
			rule100()
			break
		case "0_1_64_2_4_1":
			rule95()
			rule101()
			break
		case "0_1_64_2_4_2":
			rule95()
			rule101()
			break
		case "0_1_64_2_5_1":
			rule95()
			rule102()
			break
		case "0_1_64_2_5_2":
			rule95()
			rule102()
			break
		case "0_1_64_2_6_1":
			rule95()
			rule103()
			break
		case "0_1_64_2_6_2":
			rule95()
			rule103()
			break
		case "0_1_64_2_7_1":
			rule95()
			rule104()
			break
		case "0_1_64_2_7_2":
			rule95()
			rule104()
			break
		case "0_1_64_1_0_1":
			rule96()
			break
		case "0_1_64_1_0_2":
			rule96()
			break
		case "0_1_64_1_0_3":
			rule96()
			rule97()
			break
		case "0_1_64_1_1_1":
			rule96()
			break
		case "0_1_64_1_1_2":
			rule96()
			break
		case "0_1_64_1_1_3":
			rule96()
			rule98()
			break
		case "0_1_64_1_2_1":
			rule96()
			break
		case "0_1_64_1_2_2":
			rule96()
			break
		case "0_1_64_1_2_3":
			rule96()
			rule99()
			break
		case "0_1_64_1_3_1":
			rule96()
			break
		case "0_1_64_1_3_2":
			rule96()
			break
		case "0_1_64_1_3_3":
			rule96()
			rule100()
			break
		case "0_1_64_1_4_1":
			rule96()
			break
		case "0_1_64_1_4_2":
			rule96()
			break
		case "0_1_64_1_4_3":
			rule96()
			rule101()
			break
		case "0_1_64_1_5_1":
			rule96()
			break
		case "0_1_64_1_5_2":
			rule96()
			break
		case "0_1_64_1_5_3":
			rule96()
			rule102()
			break
		case "0_1_64_1_6_1":
			rule96()
			break
		case "0_1_64_1_6_2":
			rule96()
			break
		case "0_1_64_1_6_3":
			rule96()
			rule103()
			break
		case "0_1_64_1_7_1":
			rule96()
			break
		case "0_1_64_1_7_2":
			rule96()
			break
		case "0_1_64_1_7_3":
			rule96()
			rule104()
			break
		case "0_1_65_0":
			rule105()
			break
		case "0_1_65_1":
			rule106()
			break
		case "0_1_66_2":
			rule109()
			break
		case "0_1_66_3":
			rule110()
			break
		case "0_0_0_2":
			rule111()
			rule112()
			rule113()
			rule114()
			rule115()
			rule116()
			rule117()
			rule118()
			rule119()
			rule120()
			rule121()
			rule122()
			break
		case "0_0_0_1":
			rule111()
			rule112()
			rule113()
			rule114()
			rule115()
			rule116()
			rule117()
			rule118()
			rule119()
			rule120()
			rule121()
			rule122()
			break
		case "0_0_0_0":
			rule111()
			rule112()
			rule113()
			rule114()
			rule115()
			rule116()
			rule117()
			rule118()
			rule119()
			rule120()
			rule121()
			rule122()
			break
		case "0_1_53":
			rule111()
			rule112()
			rule117()
			break
		case "0_1_56":
			rule113()
			rule114()
			rule121()
			break
		case "0_1_54":
			rule115()
			rule116()
			rule117()
			break
		case "0_1_55":
			rule117()
			rule118()
			break
		case "0_1_57":
			rule119()
			rule120()
			rule121()
			break
		case "0_1_58":
			rule121()
			rule122()
			break
	}
}
