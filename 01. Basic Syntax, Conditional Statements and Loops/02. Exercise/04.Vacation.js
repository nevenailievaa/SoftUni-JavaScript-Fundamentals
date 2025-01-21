function division(peopleCount, groupType, day) {
    let price = 0;

    if (groupType == 'Students') {
        if (day == 'Friday') {
            price = 8.45 * peopleCount;
        } else if (day == 'Saturday') {
            price = 9.80 * peopleCount;
        } else if (day == 'Sunday') {
            price = 10.46 * peopleCount;
        }

        //Discount
        if (peopleCount >= 30) {
            price *= 0.85;
        }
    } else if (groupType == 'Business') {
        //Discount
        if (peopleCount >= 100) {
            peopleCount -= 10;
        }

        if (day == 'Friday') {
            price = 10.90 * peopleCount;
        } else if (day == 'Saturday') {
            price = 15.60 * peopleCount;
        } else if (day == 'Sunday') {
            price = 16 * peopleCount;
        }
    } else if (groupType == 'Regular') {
        if (day == 'Friday') {
            price = 15 * peopleCount;
        } else if (day == 'Saturday') {
            price = 20 * peopleCount;
        } else if (day == 'Sunday') {
            price = 22.50 * peopleCount;
        }

        //Discount
        if (peopleCount >= 10 && peopleCount <= 20) {
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}