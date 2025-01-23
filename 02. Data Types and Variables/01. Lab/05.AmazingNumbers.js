function amazingNumbers(num) {
    const numString = num.toString();
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }

    if (sum.toString().includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}