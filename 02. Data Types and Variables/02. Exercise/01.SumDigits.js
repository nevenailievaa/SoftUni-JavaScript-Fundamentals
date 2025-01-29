function sumDigits(digit) {
    const digitString = digit.toString();
    let sum = 0;

    for (let i = 0; i < digitString.length; i++) {
        const number = Number(digitString[i]);
        sum += number;
    }

    console.log(sum);
}