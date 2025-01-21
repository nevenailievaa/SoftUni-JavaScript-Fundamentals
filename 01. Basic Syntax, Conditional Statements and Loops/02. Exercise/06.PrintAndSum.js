function printAndSum(startNum, endNum) {
    let sum = 0;
    let displaySum = '';

    for (let i = startNum; i <= endNum; i++) {
        displaySum += i + ' ';
        sum += i;
    }

    console.log(displaySum);
    console.log(`Sum: ${sum}`);
}