console.log("====== Flight booking fullname function ======");

function getFullname(firstname , surname , useFormalName , gender){
    if(useFormalName){
        if(gender === "male"){
            return 'Lord ' + firstname + ' ' + surname;
        } else if(gender === "female"){
            return 'Lady ' + firstname + ' ' + surname;
        } else {
            return firstname + ' ' + surname;
        }
    } else {
        return firstname + ' ' + surname;
    }
}

const fullname1 = getFullname("Brad", "Pitt", true , "male");
const fullname2 = getFullname("Angelina", "Jolie", true , "female");

console.log('fullname1:',fullname1);
console.log('fullname2:',fullname2);