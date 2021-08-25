$(document).ready(function () {
    var interval = setInterval(function () {
    var momentNow = moment();
          
    $("#date-part").html(
        momentNow.format("YYYY MMMM DD") +  " " +
        momentNow.format("dddd").substring(0, 3).toUpperCase()
    );
    
    $("#time-part").html(momentNow.format("A hh:mm:ss"));
}, 100);
});

let hexInput = document.getElementById("hex");
let rgbInput = document.getElementById("rgb");

window.onload=()=>{
    hexInput.value = "";
    rgbInput.value = "";
}

function valid(element){
    element.style.color = "#202040";
}

function invalid(element,otherElement){
    element.style.color = "#f04624";
    otherElement.value = 0;
}

function toRgb(){
    let hexCode = hexInput.value;
    let rgbArr = [];
    if(/^#?[A-Fa-f0-9]{6}$/.test(hexCode)){
        valid(hexInput);
        hexCode = hexCode.split("#")[1] || hexCode;
        for(let i=0; i<hexCode.length;i+=2){
            rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
            console.log(rgbArr);
        }
        rgbInput.value = "rgb(" + rgbArr + ")";
        document.body.style.backgroundColor = "rgb(" + rgbArr + ")";
    }
    else{
        invalid(hexInput,rgbInput);
    }
}

function toHex(){
    let rgbCode = rgbInput.value;
    let rgbRegex1 = /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/;
    let rgbRegex2 = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
    let hex = "#";
    if(rgbRegex1.test(rgbCode) || rgbRegex2.test(rgbCode)){
        rgbCode = rgbCode.replace(/[rgb()]+/g,"") || rgbCode;
        rgbCode = rgbCode.split(",");
        let condition = rgbCode.every((value) => {
            return parseInt(value) <= 255;
        });
        if(condition){
            valid(rgbInput);
            rgbCode.forEach(value => {
                value = parseInt(value).toString(16);
                hex += value.length == 1? "0"+value : value;
            });
            hexInput.value = hex;
            document.body.style.backgroundColor = hex;
        }
        else{
            invalid(rgbInput,hexInput);
        }
    }
    else{
        invalid(rgbInput,hexInput);
    }

}

onChange('from');
onChange('to');
	function onChange(fromOrTo) {
		if(fromOrTo === 'from') {
			document.getElementById("from").placeholder = document.getElementById("selectFrom").value;
		} else if(fromOrTo === 'to') {
		document.getElementById("to").placeholder = document.getElementById("selectTo").value;
		} 
		}
	function calculate() {
		var from = document.getElementById("selectFrom");
		var to = document.getElementById("selectTo");
		var fromValue = parseInt(document.getElementById("from").value);
		var toValue = parseInt(document.getElementById("to").value);
			if(from.value == "Celcius") {
			if(to.value == "Fahrenheit") {
				result = ((fromValue * 9)/5) + 32;
			}
			else if(to.value == "Reamur") {
				result = ((fromValue * 4)/5);
			} else {
				result = "Cannot calculate!";
			}
				document.getElementById("to").value = result.toFixed(2);
			}
			else if(from.value == "Fahrenheit") {
				if(to.value == "Celcius") {
					result = ((fromValue - 32) * 5)/9;
			}
			else if(to.value == "Reamur") {
				result = ((fromValue - 32) * 4)/9;
			} else {
				result = "Cannot calculate!";
			}
			document.getElementById("to").value = result.toFixed(2);
			}
			else if(from.value == "Reamur") {
				if(to.value == "Celcius") {
					result = ((fromValue * 5)/4);
				}
				else if(to.value == "Fahrenheit") {
					result = ((fromValue * 9)/4) + 32;
				} else {
					result = "Cannot calculate!";
				}
					document.getElementById("to").value = result.toFixed(2);
				}
}
function change() {
    document.body.style.backgroundColor =
      document.getElementById("color").value;
  }
