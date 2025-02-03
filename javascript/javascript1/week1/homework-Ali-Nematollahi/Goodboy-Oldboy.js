console.log('====== Goodboy-Oldboy ======');

const dogYearOfBirth = 2017 ;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears =true;

if(shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be  ${dogYear} human years old in 2027 ${dogYearFuture}`);
}