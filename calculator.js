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

var calcView = document.getElementById('calc-view');
var buttons = [...document.getElementsByClassName('number')];

buttons.forEach(button => button.addEventListener('click', function(){
	console.log(typeof calcView.innerText);

	if (calcView.innerText === '0') {
		calcView.innerText = button.innerHTML;
	}
	else {
		calcView.innerText = calcView.innerText.concat(button.innerHTML);
	}
	
}
));

var operators = [...document.getElementsByClassName('operator')];

operators.forEach(operator => operator.addEventListener('click', function(){
	calcView.innerText = "0";
}));


