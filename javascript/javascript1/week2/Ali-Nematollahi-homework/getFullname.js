console.log("====== Flight booking fullname function ======");

function getFullname(firstname , surname , useFormalName , gender){
    const fullName = firstname + ' ' + surname;
    if(useFormalName){
        if(gender.toLowerCase() === "male"){
            return 'Lord ' + fullName;
        } else if(gender === "female"){
            return 'Lady ' + fullName;
        } else {
            return fullName;
        }
    } else {
        return fullName;
    }
}

const fullname1 = getFullname("Brad", "Pitt", true , "male");
const fullname2 = getFullname("Angelina", "Jolie", true , "female");

console.log('fullname1:',fullname1);
console.log('fullname2:',fullname2);