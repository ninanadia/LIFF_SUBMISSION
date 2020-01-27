var currentTextInput;
var puzzelArrayData;
//Loads the Crossword
function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "";
			}
		}
	}
	addHint();
}
//Adds the hint numbers
function addHint(){
	document.getElementById("txt_0_7").placeholder = "1";
	document.getElementById("txt_1_6").placeholder = "2";
	document.getElementById("txt_1_9").placeholder = "3";
	document.getElementById("txt_0_13").placeholder = "4";
	document.getElementById("txt_4_0").placeholder = "5";
	document.getElementById("txt_4_5").placeholder = "6";
	document.getElementById("txt_8_8").placeholder = "7";
	document.getElementById("txt_7_13").placeholder ="8";
	document.getElementById("txt_10_11").placeholder = "9";
	document.getElementById("txt_14_11").placeholder = "10";
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
var items = [	[0,  0,   0,   0,  0,  0,   0,   'h',  0,   0,   0,   0,   0,  'a',    0,  0,   0],
				[0,  0,   0,   0,  0,  0,  'b',  'o', 'o', 's', 't', 'r', 'a', 'p',    0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,   's',  0,  'o',  0,   0,   0,  'i',    0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,   't',  0,  'f',  0,   0,   0,   0,     0,  0,   0],
				['j','a', 'v','a','s', 'c','r',  'i', 'p', 't',  0,   0,   0,   0,     0,  0,   0],
				[0,  0,   0,   0,  0,  'o', 0,   'n',  0,  'w',  0,   0,   0,   0,     0,  0,   0],
				[0,  0,   0,   0,  0,  'm', 0,   'g',  0,  'a',  0,   0,   0,   0,     0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,  'r',  0,   0,   0,   'w',   0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,  'd', 'e', 'v', 'e',  'l', 'o',  'p','e', 'r'],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,   0,   0,   'r',   0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,  'b', 'o',  'd',  'y', 0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,   0,   0,   'p',   0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,   0,   0,   'r',   0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,   0,   0,   'e',   0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,  'c',  's',  's',  0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,   0,   0,    's',  0,  0,   0],
				[0,  0,   0,   0,  0,  0,   0,    0,   0,   0,   0,   0,   0,    0,    0,  0,   0]
				
				
				
			];
return items;
}
//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzelArrayData[i][j]){
					selectedInputTextElement.style.backgroundColor = 'red';

					
				}else{
					selectedInputTextElement.style.backgroundColor = 'white';
				}
			}
		}
	}
}
//Clue Button
function clueClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = puzzelArrayData[row][column];
		//checkClicked();
	}
}
//Solve Button
function solveClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		
		// Print elements on top
		for(j = row; j >= 0; j--){
			if(puzzelArrayData[j][column] != 0){
				document.getElementById('txt' + '_' + j + '_' + column).value = puzzelArrayData[j][column];
				}else break;
		}
		// Print elements on right
		for(i = column; i< puzzelArrayData[row].length; i++){
			if(puzzelArrayData[row][i] != 0){
				document.getElementById('txt' + '_' + row + '_' + i).value = puzzelArrayData[row][i];
				}else break;
		}
		
		// Print elements below
		for(m = row; m< puzzelArrayData.length; m++){
			if(puzzelArrayData[m][column] != 0){
				document.getElementById('txt' + '_' + m + '_' + column).value = puzzelArrayData[m][column];
				}else break;
		}
		// Print elements on left
		for(k = column; k >= 0; k--){
			if(puzzelArrayData[row][k] != 0){
				document.getElementById('txt' + '_' + row + '_' + k).value = puzzelArrayData[row][k];
				}else break;
		}
		// Done!
		
	}
}


function cek_skor() {
		var skor = 0;
		var txt_0_7 = document.getElementById("txt_0_7").value;
		var txt_1_7 = document.getElementById("txt_1_7").value;
		var txt_2_7 = document.getElementById("txt_2_7").value;
		var txt_3_7 = document.getElementById("txt_3_7").value;
		var txt_4_7 = document.getElementById("txt_4_7").value;
		var txt_5_7 = document.getElementById("txt_5_7").value;
		var txt_6_7 = document.getElementById("txt_6_7").value;

		var txt_1_6 = document.getElementById("txt_1_6").value;
		var txt_1_8 = document.getElementById("txt_1_8").value;
		var txt_1_9 = document.getElementById("txt_1_9").value;
		var txt_1_10 = document.getElementById("txt_1_10").value;
		var txt_1_11 = document.getElementById("txt_1_11").value;
		var txt_1_12 = document.getElementById("txt_1_12").value;
		var txt_1_13 = document.getElementById("txt_1_13").value;
		
		var txt_2_9 = document.getElementById("txt_2_9").value;
		var txt_3_9 = document.getElementById("txt_3_9").value;
		var txt_4_9 = document.getElementById("txt_4_9").value;
		var txt_5_9 = document.getElementById("txt_5_9").value;
		var txt_6_9 = document.getElementById("txt_6_9").value;
		var txt_7_9 = document.getElementById("txt_7_9").value;
		var txt_8_9 = document.getElementById("txt_8_9").value;

		var txt_0_13 = document.getElementById("txt_0_13").value;
		var txt_2_13 = document.getElementById("txt_2_13").value;

		var txt_4_0 = document.getElementById("txt_4_0").value;
		var txt_4_1 = document.getElementById("txt_4_1").value;
		var txt_4_2 = document.getElementById("txt_4_2").value;
		var txt_4_3 = document.getElementById("txt_4_3").value;
		var txt_4_4 = document.getElementById("txt_4_4").value;
		var txt_4_5 = document.getElementById("txt_4_5").value;
		var txt_4_6 = document.getElementById("txt_4_6").value;
		var txt_4_8 = document.getElementById("txt_4_8").value;

		var txt_5_5 = document.getElementById("txt_5_5").value;
		var txt_6_5 = document.getElementById("txt_6_5").value;

		var txt_8_8 = document.getElementById("txt_8_8").value;
		var txt_8_10 = document.getElementById("txt_8_10").value;
		var txt_8_11 = document.getElementById("txt_8_11").value;
		var txt_8_12 = document.getElementById("txt_8_12").value;
		var txt_8_13 = document.getElementById("txt_8_13").value;
		var txt_8_14 = document.getElementById("txt_8_14").value;
		var txt_8_15 = document.getElementById("txt_8_15").value;
		var txt_8_16 = document.getElementById("txt_8_16").value;

		var txt_7_13 = document.getElementById("txt_7_13").value;
		var txt_9_13 = document.getElementById("txt_9_13").value;
		var txt_10_13 = document.getElementById("txt_10_13").value;
		var txt_11_13 = document.getElementById("txt_11_13").value;
		var txt_12_13 = document.getElementById("txt_12_13").value;
		var txt_13_13 = document.getElementById("txt_13_13").value;
		var txt_14_13 = document.getElementById("txt_14_13").value;
		var txt_15_13 = document.getElementById("txt_15_13").value;

		var txt_10_11 = document.getElementById("txt_10_11").value;
		var txt_10_12 = document.getElementById("txt_10_12").value;
		var txt_10_14 = document.getElementById("txt_10_14").value;

		var txt_14_11 = document.getElementById("txt_14_11").value;
		var txt_14_12 = document.getElementById("txt_14_12").value;



		
		if (txt_0_7 =="H" || txt_0_7=="h") {
			document.getElementById("txt_0_7").classList.remove("kotak");
			document.getElementById("txt_0_7").classList.remove("salah");
			document.getElementById("txt_0_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_0_7").classList.remove("kotak");
			document.getElementById("txt_0_7").classList.remove("betul");
			document.getElementById("txt_0_7").classList.add("salah");
		}
		if (txt_1_7 =="O" || txt_1_7 =="o") {
			document.getElementById("txt_1_7").classList.remove("kotak");
			document.getElementById("txt_1_7").classList.remove("salah");
			document.getElementById("txt_1_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_7").classList.remove("kotak");
			document.getElementById("txt_1_7").classList.remove("betul");
			document.getElementById("txt_1_7").classList.add("salah");
		}
		if (txt_2_7 =="S" || txt_2_7 =="s") {
			document.getElementById("txt_2_7").classList.remove("kotak");
			document.getElementById("txt_2_7").classList.remove("salah");
			document.getElementById("txt_2_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_2_7").classList.remove("kotak");
			document.getElementById("txt_2_7").classList.remove("betul");
			document.getElementById("txt_2_7").classList.add("salah");
		}
		if (txt_3_7=="T" || txt_3_7=="t") {
			document.getElementById("txt_3_7").classList.remove("kotak");
			document.getElementById("txt_3_7").classList.remove("salah");
			document.getElementById("txt_3_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_3_7").classList.remove("kotak");
			document.getElementById("txt_3_7").classList.remove("betul");
			document.getElementById("txt_3_7").classList.add("salah");
		}
		if (txt_4_7=="I" || txt_4_7=="i") {
			document.getElementById("txt_4_7").classList.remove("kotak");
			document.getElementById("txt_4_7").classList.remove("salah");
			document.getElementById("txt_4_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_7").classList.remove("kotak");
			document.getElementById("txt_4_7").classList.remove("betul");
			document.getElementById("txt_4_7").classList.add("salah");
		}
		if (txt_5_7=="N" || txt_5_7=="n") {
			document.getElementById("txt_5_7").classList.remove("kotak");
			document.getElementById("txt_5_7").classList.remove("salah");
			document.getElementById("txt_5_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_5_7").classList.remove("kotak");
			document.getElementById("txt_5_7").classList.remove("betul");
			document.getElementById("txt_5_7").classList.add("salah");
		}
		if (txt_6_7=="G" || txt_6_7=="g") {
			document.getElementById("txt_6_7").classList.remove("kotak");
			document.getElementById("txt_6_7").classList.remove("salah");
			document.getElementById("txt_6_7").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_6_7").classList.remove("kotak");
			document.getElementById("txt_6_7").classList.remove("betul");
			document.getElementById("txt_6_7").classList.add("salah");
		}
		if (txt_1_6=="B" || txt_1_6=="b") {
			document.getElementById("txt_1_6").classList.remove("kotak");
			document.getElementById("txt_1_6").classList.remove("salah");
			document.getElementById("txt_1_6").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_6").classList.remove("kotak");
			document.getElementById("txt_1_6").classList.remove("betul");
			document.getElementById("txt_1_6").classList.add("salah");
		}
		if (txt_1_8 =="O" || txt_1_8=="o") {
			document.getElementById("txt_1_8").classList.remove("kotak");
			document.getElementById("txt_1_8").classList.remove("salah");
			document.getElementById("txt_1_8").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_8").classList.remove("kotak");
			document.getElementById("txt_1_8").classList.remove("betul");
			document.getElementById("txt_1_8").classList.add("salah");
		}
		if (txt_1_9 =="S" || txt_1_9=="s") {
			document.getElementById("txt_1_9").classList.remove("kotak");
			document.getElementById("txt_1_9").classList.remove("salah");
			document.getElementById("txt_1_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_9").classList.remove("kotak");
			document.getElementById("txt_1_9").classList.remove("betul");
			document.getElementById("txt_1_9").classList.add("salah");
		}
		if (txt_1_10 =="T" || txt_1_10=="t") {
			document.getElementById("txt_1_10").classList.remove("kotak");
			document.getElementById("txt_1_10").classList.remove("salah");
			document.getElementById("txt_1_10").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_10").classList.remove("kotak");
			document.getElementById("txt_1_10").classList.remove("betul");
			document.getElementById("txt_1_10").classList.add("salah");
		}
		if (txt_1_11=="R" || txt_1_11=="r") {
			document.getElementById("txt_1_11").classList.remove("kotak");
			document.getElementById("txt_1_11").classList.remove("salah");
			document.getElementById("txt_1_11").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_11").classList.remove("kotak");
			document.getElementById("txt_1_11").classList.remove("betul");
			document.getElementById("txt_1_11").classList.add("salah");
		}
		if (txt_1_12=="A" || txt_1_12=="a") {
			document.getElementById("txt_1_12").classList.remove("kotak");
			document.getElementById("txt_1_12").classList.remove("salah");
			document.getElementById("txt_1_12").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_12").classList.remove("kotak");
			document.getElementById("txt_1_12").classList.remove("betul");
			document.getElementById("txt_1_12").classList.add("salah");
		}
		if (txt_1_13=="P" || txt_1_13=="p") {
			document.getElementById("txt_1_13").classList.remove("kotak");
			document.getElementById("txt_1_13").classList.remove("salah");
			document.getElementById("txt_1_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_1_13").classList.remove("kotak");
			document.getElementById("txt_1_13").classList.remove("betul");
			document.getElementById("txt_1_13").classList.add("salah");
		}
		if (txt_2_9 =="O" || txt_2_9=="o") {
			document.getElementById("txt_2_9").classList.remove("kotak");
			document.getElementById("txt_2_9").classList.remove("salah");
			document.getElementById("txt_2_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_2_9").classList.remove("kotak");
			document.getElementById("txt_2_9").classList.remove("betul");
			document.getElementById("txt_2_9").classList.add("salah");
		}
		if (txt_3_9=="F" || txt_3_9=="f") {
			document.getElementById("txt_3_9").classList.remove("kotak");
			document.getElementById("txt_3_9").classList.remove("salah");
			document.getElementById("txt_3_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_3_9").classList.remove("kotak");
			document.getElementById("txt_3_9").classList.remove("betul");
			document.getElementById("txt_3_9").classList.add("salah");
		}
		if (txt_4_9 =="T" || txt_4_9=="t") {
			document.getElementById("txt_4_9").classList.remove("kotak");
			document.getElementById("txt_4_9").classList.remove("salah");
			document.getElementById("txt_4_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_9").classList.remove("kotak");
			document.getElementById("txt_4_9").classList.remove("betul");
			document.getElementById("txt_4_9").classList.add("salah");
		}
		if (txt_5_9=="W" || txt_5_9=="w") {
			document.getElementById("txt_5_9").classList.remove("kotak");
			document.getElementById("txt_5_9").classList.remove("salah");
			document.getElementById("txt_5_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_5_9").classList.remove("kotak");
			document.getElementById("txt_5_9").classList.remove("betul");
			document.getElementById("txt_5_9").classList.add("salah");
		}
		if (txt_6_9=="A" || txt_6_9=="a") {
			document.getElementById("txt_6_9").classList.remove("kotak");
			document.getElementById("txt_6_9").classList.remove("salah");
			document.getElementById("txt_6_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_6_9").classList.remove("kotak");
			document.getElementById("txt_6_9").classList.remove("betul");
			document.getElementById("txt_6_9").classList.add("salah");
		}
		if (txt_7_9=="R" || txt_7_9=="r") {
			document.getElementById("txt_7_9").classList.remove("kotak");
			document.getElementById("txt_7_9").classList.remove("salah");
			document.getElementById("txt_7_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_7_9").classList.remove("kotak");
			document.getElementById("txt_7_9").classList.remove("betul");
			document.getElementById("txt_7_9").classList.add("salah");
		}
		if (txt_8_9=="E" || txt_8_9=="e") {
			document.getElementById("txt_8_9").classList.remove("kotak");
			document.getElementById("txt_8_9").classList.remove("salah");
			document.getElementById("txt_8_9").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_9").classList.remove("kotak");
			document.getElementById("txt_8_9").classList.remove("betul");
			document.getElementById("txt_8_9").classList.add("salah");
		}
		if (txt_0_13=="A" || txt_0_13=="a") {
			document.getElementById("txt_0_13").classList.remove("kotak");
			document.getElementById("txt_0_13").classList.remove("salah");
			document.getElementById("txt_0_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_0_13").classList.remove("kotak");
			document.getElementById("txt_0_13").classList.remove("betul");
			document.getElementById("txt_0_13").classList.add("salah");
		}
		if (txt_2_13=="I" || txt_2_13=="i") {
			document.getElementById("txt_2_13").classList.remove("kotak");
			document.getElementById("txt_2_13").classList.remove("salah");
			document.getElementById("txt_2_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_2_13").classList.remove("kotak");
			document.getElementById("txt_2_13").classList.remove("betul");
			document.getElementById("txt_2_13").classList.add("salah");
		}
		if (txt_4_0=="J" || txt_4_0=="j") {
			document.getElementById("txt_4_0").classList.remove("kotak");
			document.getElementById("txt_4_0").classList.remove("salah");
			document.getElementById("txt_4_0").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_0").classList.remove("kotak");
			document.getElementById("txt_4_0").classList.remove("betul");
			document.getElementById("txt_4_0").classList.add("salah");
		}
		if (txt_4_1=="A" || txt_4_1=="a") {
			document.getElementById("txt_4_1").classList.remove("kotak");
			document.getElementById("txt_4_1").classList.remove("salah");
			document.getElementById("txt_4_1").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_1").classList.remove("kotak");
			document.getElementById("txt_4_1").classList.remove("betul");
			document.getElementById("txt_4_1").classList.add("salah");
		}
		if (txt_4_2=="V" || txt_4_2=="v") {
			document.getElementById("txt_4_2").classList.remove("kotak");
			document.getElementById("txt_4_2").classList.remove("salah");
			document.getElementById("txt_4_2").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_2").classList.remove("kotak");
			document.getElementById("txt_4_2").classList.remove("betul");
			document.getElementById("txt_4_2").classList.add("salah");
		}
		if (txt_4_3=="A" || txt_4_3=="a") {
			document.getElementById("txt_4_3").classList.remove("kotak");
			document.getElementById("txt_4_3").classList.remove("salah");
			document.getElementById("txt_4_3").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_3").classList.remove("kotak");
			document.getElementById("txt_4_3").classList.remove("betul");
			document.getElementById("txt_4_3").classList.add("salah");
		}
		if (txt_4_4=="S" || txt_4_4=="s") {
			document.getElementById("txt_4_4").classList.remove("kotak");
			document.getElementById("txt_4_4").classList.remove("salah");
			document.getElementById("txt_4_4").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_4").classList.remove("kotak");
			document.getElementById("txt_4_4").classList.remove("betul");
			document.getElementById("txt_4_4").classList.add("salah");
		}
		if (txt_4_5=="C" || txt_4_5=="c") {
			document.getElementById("txt_4_5").classList.remove("kotak");
			document.getElementById("txt_4_5").classList.remove("salah");
			document.getElementById("txt_4_5").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_5").classList.remove("kotak");
			document.getElementById("txt_4_5").classList.remove("betul");
			document.getElementById("txt_4_5").classList.add("salah");
		}
		if (txt_4_6=="R" || txt_4_6=="r") {
			document.getElementById("txt_4_6").classList.remove("kotak");
			document.getElementById("txt_4_6").classList.remove("salah");
			document.getElementById("txt_4_6").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_6").classList.remove("kotak");
			document.getElementById("txt_4_6").classList.remove("betul");
			document.getElementById("txt_4_6").classList.add("salah");
		}
		if (txt_4_8=="P" || txt_4_8=="p") {
			document.getElementById("txt_4_8").classList.remove("kotak");
			document.getElementById("txt_4_8").classList.remove("salah");
			document.getElementById("txt_4_8").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_4_8").classList.remove("kotak");
			document.getElementById("txt_4_8").classList.remove("betul");
			document.getElementById("txt_4_8").classList.add("salah");
		}
		if (txt_5_5=="O" || txt_5_5=="o") {
			document.getElementById("txt_5_5").classList.remove("kotak");
			document.getElementById("txt_5_5").classList.remove("salah");
			document.getElementById("txt_5_5").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_5_5").classList.remove("kotak");
			document.getElementById("txt_5_5").classList.remove("betul");
			document.getElementById("txt_5_5").classList.add("salah");
		}
		if (txt_6_5=="M" || txt_6_5=="m") {
			document.getElementById("txt_6_5").classList.remove("kotak");
			document.getElementById("txt_6_5").classList.remove("salah");
			document.getElementById("txt_6_5").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_6_5").classList.remove("kotak");
			document.getElementById("txt_6_5").classList.remove("betul");
			document.getElementById("txt_6_5").classList.add("salah");
		}
		if (txt_8_8=="D" || txt_8_8=="d") {
			document.getElementById("txt_8_8").classList.remove("kotak");
			document.getElementById("txt_8_8").classList.remove("salah");
			document.getElementById("txt_8_8").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_8").classList.remove("kotak");
			document.getElementById("txt_8_8").classList.remove("betul");
			document.getElementById("txt_8_8").classList.add("salah");
		}
		if (txt_8_10=="V" || txt_8_10=="v") {
			document.getElementById("txt_8_10").classList.remove("kotak");
			document.getElementById("txt_8_10").classList.remove("salah");
			document.getElementById("txt_8_10").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_10").classList.remove("kotak");
			document.getElementById("txt_8_10").classList.remove("betul");
			document.getElementById("txt_8_10").classList.add("salah");
		}
		if (txt_8_11=="E" || txt_8_11=="e") {
			document.getElementById("txt_8_11").classList.remove("kotak");
			document.getElementById("txt_8_11").classList.remove("salah");
			document.getElementById("txt_8_11").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_11").classList.remove("kotak");
			document.getElementById("txt_8_11").classList.remove("betul");
			document.getElementById("txt_8_11").classList.add("salah");
		}
		if (txt_8_12=="L" || txt_8_12=="l") {
			document.getElementById("txt_8_12").classList.remove("kotak");
			document.getElementById("txt_8_12").classList.remove("salah");
			document.getElementById("txt_8_12").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_12").classList.remove("kotak");
			document.getElementById("txt_8_12").classList.remove("betul");
			document.getElementById("txt_8_12").classList.add("salah");
		}
		if (txt_8_13=="O" || txt_8_13=="o") {
			document.getElementById("txt_8_13").classList.remove("kotak");
			document.getElementById("txt_8_13").classList.remove("salah");
			document.getElementById("txt_8_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_13").classList.remove("kotak");
			document.getElementById("txt_8_13").classList.remove("betul");
			document.getElementById("txt_8_13").classList.add("salah");
		}
		if (txt_8_14=="P" || txt_8_14=="p") {
			document.getElementById("txt_8_14").classList.remove("kotak");
			document.getElementById("txt_8_14").classList.remove("salah");
			document.getElementById("txt_8_14").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_14").classList.remove("kotak");
			document.getElementById("txt_8_14").classList.remove("betul");
			document.getElementById("txt_8_14").classList.add("salah");
		}
		if (txt_8_15=="E" || txt_8_15=="e") {
			document.getElementById("txt_8_15").classList.remove("kotak");
			document.getElementById("txt_8_15").classList.remove("salah");
			document.getElementById("txt_8_15").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_15").classList.remove("kotak");
			document.getElementById("txt_8_15").classList.remove("betul");
			document.getElementById("txt_8_15").classList.add("salah");
		}
		if (txt_8_16=="R" || txt_8_16=="r") {
			document.getElementById("txt_8_16").classList.remove("kotak");
			document.getElementById("txt_8_16").classList.remove("salah");
			document.getElementById("txt_8_16").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_8_16").classList.remove("kotak");
			document.getElementById("txt_8_16").classList.remove("betul");
			document.getElementById("txt_8_16").classList.add("salah");
		}
		if (txt_7_13=="W" || txt_7_13=="w") {
			document.getElementById("txt_7_13").classList.remove("kotak");
			document.getElementById("txt_7_13").classList.remove("salah");
			document.getElementById("txt_7_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_7_13").classList.remove("kotak");
			document.getElementById("txt_7_13").classList.remove("betul");
			document.getElementById("txt_7_13").classList.add("salah");
		}
		if (txt_9_13=="R" || txt_9_13=="r") {
			document.getElementById("txt_9_13").classList.remove("kotak");
			document.getElementById("txt_9_13").classList.remove("salah");
			document.getElementById("txt_9_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_9_13").classList.remove("kotak");
			document.getElementById("txt_9_13").classList.remove("betul");
			document.getElementById("txt_9_13").classList.add("salah");
		}
		if (txt_10_13=="D" || txt_10_13=="d") {
			document.getElementById("txt_10_13").classList.remove("kotak");
			document.getElementById("txt_10_13").classList.remove("salah");
			document.getElementById("txt_10_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_10_13").classList.remove("kotak");
			document.getElementById("txt_10_13").classList.remove("betul");
			document.getElementById("txt_10_13").classList.add("salah");
		}
		if (txt_11_13=="P" || txt_11_13=="p") {
			document.getElementById("txt_11_13").classList.remove("kotak");
			document.getElementById("txt_11_13").classList.remove("salah");
			document.getElementById("txt_11_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_11_13").classList.remove("kotak");
			document.getElementById("txt_11_13").classList.remove("betul");
			document.getElementById("txt_11_13").classList.add("salah");
		}
		if (txt_12_13=="R" || txt_12_13=="r") {
			document.getElementById("txt_12_13").classList.remove("kotak");
			document.getElementById("txt_12_13").classList.remove("salah");
			document.getElementById("txt_12_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_12_13").classList.remove("kotak");
			document.getElementById("txt_12_13").classList.remove("betul");
			document.getElementById("txt_12_13").classList.add("salah");
		}
		if (txt_13_13=="E" || txt_13_13=="e") {
			document.getElementById("txt_13_13").classList.remove("kotak");
			document.getElementById("txt_13_13").classList.remove("salah");
			document.getElementById("txt_13_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_13_13").classList.remove("kotak");
			document.getElementById("txt_13_13").classList.remove("betul");
			document.getElementById("txt_13_13").classList.add("salah");
		}
		if (txt_14_13=="S" || txt_14_13=="s") {
			document.getElementById("txt_14_13").classList.remove("kotak");
			document.getElementById("txt_14_13").classList.remove("salah");
			document.getElementById("txt_14_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_14_13").classList.remove("kotak");
			document.getElementById("txt_14_13").classList.remove("betul");
			document.getElementById("txt_14_13").classList.add("salah");
		}
		if (txt_15_13=="S" || txt_15_13=="s") {
			document.getElementById("txt_15_13").classList.remove("kotak");
			document.getElementById("txt_15_13").classList.remove("salah");
			document.getElementById("txt_15_13").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_15_13").classList.remove("kotak");
			document.getElementById("txt_15_13").classList.remove("betul");
			document.getElementById("txt_15_13").classList.add("salah");
		}
		if (txt_10_11=="B" || txt_10_11=="b") {
			document.getElementById("txt_10_11").classList.remove("kotak");
			document.getElementById("txt_10_11").classList.remove("salah");
			document.getElementById("txt_10_11").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_10_11").classList.remove("kotak");
			document.getElementById("txt_10_11").classList.remove("betul");
			document.getElementById("txt_10_11").classList.add("salah");
		}
		if (txt_10_12=="O" || txt_10_12=="o") {
			document.getElementById("txt_10_12").classList.remove("kotak");
			document.getElementById("txt_10_12").classList.remove("salah");
			document.getElementById("txt_10_12").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_10_12").classList.remove("kotak");
			document.getElementById("txt_10_12").classList.remove("betul");
			document.getElementById("txt_10_12").classList.add("salah");
		}
		if (txt_10_14=="Y" || txt_10_14=="y") {
			document.getElementById("txt_10_14").classList.remove("kotak");
			document.getElementById("txt_10_14").classList.remove("salah");
			document.getElementById("txt_10_14").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_10_14").classList.remove("kotak");
			document.getElementById("txt_10_14").classList.remove("betul");
			document.getElementById("txt_10_14").classList.add("salah");
		}
		if (txt_14_11=="C" || txt_14_11=="c") {
			document.getElementById("txt_14_11").classList.remove("kotak");
			document.getElementById("txt_14_11").classList.remove("salah");
			document.getElementById("txt_14_11").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_14_11").classList.remove("kotak");
			document.getElementById("txt_14_11").classList.remove("betul");
			document.getElementById("txt_14_11").classList.add("salah");
		}
		if (txt_14_12=="S" || txt_14_12=="s") {
			document.getElementById("txt_14_12").classList.remove("kotak");
			document.getElementById("txt_14_12").classList.remove("salah");
			document.getElementById("txt_14_12").classList.add("betul");
			skor++;
		} else {
			document.getElementById("txt_14_12").classList.remove("kotak");
			document.getElementById("txt_14_12").classList.remove("betul");
			document.getElementById("txt_14_12").classList.add("salah");
		}





		alert("Skor Kamu Adalah: "+skor);
	}
