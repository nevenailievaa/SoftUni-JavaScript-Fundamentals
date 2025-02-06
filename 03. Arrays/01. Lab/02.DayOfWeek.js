function dayOfWeek(dayOfWeekNum) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];

    if (dayOfWeekNum >= 1 && dayOfWeekNum <= 7) {
        console.log(days[dayOfWeekNum-1]);
    } else {
        console.log('Invalid day!');
    }
}