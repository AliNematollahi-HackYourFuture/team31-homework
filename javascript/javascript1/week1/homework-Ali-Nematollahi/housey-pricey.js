console.log('====== housey-pricey ======');


function comparePrice(friendName, houseWidth, houseDepth , houseHeight , gardenSizeInM2 , suggestedPrice){

    const volumeInMeters = houseWidth * houseHeight * houseDepth;
    const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

    if(suggestedPrice > housePrice){
        console.log(`For ${friendName}'s house, suggested price is ${suggestedPrice},but estimated price is ${housePrice}, so ${friendName} is paying too much.`);
    } else {
        console.log(`For ${friendName}'s house, suggested price is ${suggestedPrice},but estimated price is ${housePrice}, so ${friendName} is paying too little.`);
    }
}

comparePrice('Peter',8,10,10,100,2500000);
comparePrice('Julia',5,11,8,70,1000000);
