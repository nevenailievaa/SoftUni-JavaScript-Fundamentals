function evenAndOddSubtraction(array) {
    let sumEven = 0;
    let sumOdd = 0;

        for (let i = 0; i < array.length; i++) {
            let currentNum = Number(array[i]);

            if(currentNum % 2 == 0) {
                sumEven += currentNum;
            } else {
                sumOdd += currentNum;
            }
        }

    console.log(sumEven - sumOdd);
}