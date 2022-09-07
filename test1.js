const calculator = (a, operator, b) => {
	switch (operator) {
		case '+':
			return a + b
			break;
		case '*':
			return a * b
			break;
		case '-':
			return a - b
			break;
		case '/':
			if (b === 0) {
				return "Can't divide by 0!"
			} else {
				return a / b
			}
			break;
	}
}
console.log(calculator(2, '+', 2));
console.log(calculator(2, '-', 2));
console.log(calculator(2, '*', 3));
console.log(calculator(2, '/', 2));
console.log(calculator(2, '/', 0));