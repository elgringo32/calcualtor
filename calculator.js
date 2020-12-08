function add (num1,num2) {
	return num1 + num2;
	
}

function subtract (num1,num2) {
	return num1 - num2;
}


function multiply (num1,num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1/num2;
	
}

var calcView = document.getElementsByClassName('calc-view');
var buttons = [...document.getElementsByClassName('btn')];
console.log();

buttons.forEach(button => button.addEventListener('click', function(){
    calcView[0].innerText = "update";
}
));


