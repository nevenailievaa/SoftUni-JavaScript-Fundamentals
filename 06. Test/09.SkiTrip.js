function calculateHotelPrice(days, roomType, feedback) {
    let nights = days - 1;
    let pricePerNight = 0;

    if (roomType === "room for one person") {
        pricePerNight = 18.00;
    } else if (roomType === "apartment") {
        pricePerNight = 25.00;
        if (nights < 10) {
            pricePerNight *= 0.70;
        } else if (nights <= 15) {
            pricePerNight *= 0.65;
        } else {
            pricePerNight *= 0.50;
        }
    } else if (roomType === "president apartment") {
        pricePerNight = 35.00;
        if (nights < 10) {
            pricePerNight *= 0.90;
        } else if (nights <= 15) {
            pricePerNight *= 0.85;
        } else {
            pricePerNight *= 0.80;
        }
    }

    let totalPrice = nights * pricePerNight;
    
    if (feedback === "positive") {
        totalPrice *= 1.25;
    } else if (feedback === "negative") {
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));
}