function integerAndFloat(firstNum, secondNum, thirdNum) {
    const sum = firstNum + secondNum + thirdNum;

    if (sum % 1 == 0) {
        console.log(`${sum} - Integer`);
    } else{
        console.log(`${sum} - Float`);
    }
}