console.log("======== travel-information  ========");

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(information) {
  const travelTimePerHour = information.destinationDistance / information.speed;
  const hours = Math.floor(travelTimePerHour);
  const minutes = (travelTimePerHour - hours) * 60;

  return `${hours} hours and ${Math.floor(minutes)} minutes`;
}

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
