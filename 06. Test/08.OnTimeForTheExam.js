function onTimeForTheExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let difference = arrivalTime - examTime;
    
    if (difference > 0) {
        console.log("Late");
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (difference >= -30) {
        console.log("On time");
        if (difference !== 0) {
            console.log(`${Math.abs(difference)} minutes before the start`);
        }
    } else {
        console.log("Early");
        let absDiff = Math.abs(difference);
        if (absDiff < 60) {
            console.log(`${absDiff} minutes before the start`);
        } else {
            let hours = Math.floor(absDiff / 60);
            let minutes = absDiff % 60;
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}