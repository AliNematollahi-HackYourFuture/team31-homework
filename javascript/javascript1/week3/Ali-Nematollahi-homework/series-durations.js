console.log("======== series-durations ========");

const seriesDurations = [
  {
    title: "Friends",
    days: 3,
    hours: 11,
    minutes: 36,
  },
  {
    title: "Game of thrones",
    days: 3,
    hours: 13,
    minutes: 12,
  },
  {
    title: "Squid game",
    days: 3,
    hours: 21,
    minutes: 12,
  }
];

function logOutSeriesText() {

    let totalPercentage = 0;
    
    for(i in seriesDurations){

        const years = convertToYears(seriesDurations[i].days,seriesDurations[i].hours,seriesDurations[i].minutes);
        const percentage = (years / 80) * 100;
        totalPercentage += percentage;

        console.log(`${seriesDurations[i].title} took ${percentage.toFixed(3)}% of my life`);
    }

    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

function convertToYears(days,hours,minutes){
    return (days + (hours/24) + (minutes/(60*24))) / 365;
}
  
logOutSeriesText();
