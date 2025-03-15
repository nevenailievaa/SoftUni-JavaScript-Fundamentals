function operations(a, b, operator) {
    let result = 0;

    if (operator == "+") {
        result = a + b;
        if (result % 2 == 0) {
            console.log(`${a} ${operator} ${b} = ${result} - even`); 
        } else {
            console.log(`${a} ${operator} ${b} = ${result} - odd`);
        }
        
    } else if (operator == "-") {
        result = a - b;
        if (result % 2 == 0) {
            console.log(`${a} ${operator} ${b} = ${result} - even`); 
        } else {
            console.log(`${a} ${operator} ${b} = ${result} - odd`);
        }
    } else if (operator == "*") {
        result = a * b;
        if (result % 2 == 0) {
            console.log(`${a} ${operator} ${b} = ${result} - even`); 
        } else {
            console.log(`${a} ${operator} ${b} = ${result} - odd`);
        }
    } else if (operator == "/") {
        result = a / b;
        if (b !== 0) {
            console.log(`${a} / ${b} = ${(result).toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${a} by zero`);
        }
    } else if (operator == "%") {
        result = a % b;
        if (b !== 0) {
            console.log(`${a} % ${b} = ${result}`);
        }else {
            console.log(`Cannot divide ${a} by zero`);
        }
    }
}