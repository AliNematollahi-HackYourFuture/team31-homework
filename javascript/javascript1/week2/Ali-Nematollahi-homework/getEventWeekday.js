console.log("============== Event application ============== ");

function getEventWeekday(days){
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeekIndex = (today.getDay()+days) % 7;
    return weekdays[dayOfWeekIndex];
}

console.log(getEventWeekday(10));
