console.log("============ weather wear ============");


function clothingForTemperatures(temperature){
    if(temperature <= 0){
        return "Heavy winter coat + Thermal pants";
    } else if (temperature > 0 && temperature <= 5){
        return "Medium to heavy winter coat + Warm pants";
    } else if (temperature > 5 && temperature <= 10){
        return "Lighter winter coat + Jeans or pants";
    } else if (temperature > 10 && temperature <= 15){
        return "Light jacket + Jeans";
    } else if (temperature > 15 && temperature <= 20){
        return "T-shirt or blouse + Comfortable pants";
    } else {
        return "T-shirt + shorts";
    }
}

console.log(clothingForTemperatures(-3));
console.log(clothingForTemperatures(3));
console.log(clothingForTemperatures(8));
console.log(clothingForTemperatures(13));
console.log(clothingForTemperatures(18));
console.log(clothingForTemperatures(23));
