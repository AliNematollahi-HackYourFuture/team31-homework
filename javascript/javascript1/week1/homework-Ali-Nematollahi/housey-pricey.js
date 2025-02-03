console.log('====== housey-pricey ======');


function comparePrice(name, width, Depth , height , gardenSizeInM2 , suggestedPrice){

    let volumeInMeters = width * height * Depth;
    let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

    if(suggestedPrice > housePrice){
        console.log(`For ${name}'s house, suggested price is ${suggestedPrice},but estimated price is ${housePrice}, so ${name} is paying too much.`);
    } else {
        console.log(`For ${name}'s house, suggested price is ${suggestedPrice},but estimated price is ${housePrice}, so ${name} is paying too little.`);
    }
}

comparePrice('Peter',8,10,10,100,2500000);
comparePrice('Julia',5,11,8,70,1000000);
