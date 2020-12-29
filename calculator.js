var executionStart = false;
var storedValue = '';
var operatorId = '';

var calcView = document.getElementById('calc-view');
var numButtons = [...document.getElementsByClassName('number')];
numButtons.forEach(button => button.addEventListener('click', function() {
	console.log(storedValue);
	console.log(operatorId);
	if (calcView.innerText === '0' && !executionStart) {
		calcView.innerText = button.innerHTML;
	
	}
	else if (calcView.innerText !='0' && executionStart) {
		calcView.innerText = button.innerHTML;
	}
	else {
		calcView.innerText = calcView.innerText.concat(button.innerHTML);
	}
}));

var operators = [...document.getElementsByClassName('operator')];

operators.forEach(operator => operator.addEventListener('click', function(){
	if (storedValue && operatorId) {
		calcView.innerText = execute(storedValue, operatorId, calcView.innerText)
		storedValue = calcView.innerText;
	}
	if (storedValue === '') {
		storedValue = calcView.innerText;
		calcView.innerText = "0";
	}
	operatorId = operator.innerText;
	}
));

var decimal = document.getElementById('calc-decimal');

decimal.addEventListener('click', function(){
	console.log(calcView.innerText.includes('.'));
		if (!calcView.innerText.includes('.')) {
			calcView.innerText = calcView.innerText.concat(decimal.innerHTML);
		}
		else {
			return
		}

	}
);

var clearView = document.getElementById('calc-clear');

clearView.addEventListener('click', function(){
		calcView.innerText = 0;
		storedValue = '';
		executionStart = false;	
	}
);

var equal = document.getElementById('calc-equal');

equal.addEventListener('click', function(){
		currentValue = calcView.innerText;
		if (operatorId != '') {
			calcView.innerText = execute(storedValue, operatorId, currentValue)
		}
		storedValue = calcView.innerText;
		operatorId = ''
	}
);

function execute(storedValue, operator, currentValue) {
	executionStart = true;
	if (operator === "+") {
		return +storedValue + +currentValue;
	}
	else if (operator === "-") {
		return storedValue - currentValue;
	}
	else if (operator === "*") {
		return storedValue * currentValue;
	}
	else if (operator === "/") {
		return storedValue / currentValue;
	}
}
