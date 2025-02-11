console.log("============ student-manager ============");

const class07Students = [];

function addStudentToClass(studentName) {

  if(class07Students.length < 6 || studentName === "Queen"){

    if (studentName == ""){
        console.log("student name is required");
    } else {

        let isNameAlreadyExist = false;

        for(let i=0; i<class07Students.length; i++){
            if(studentName === class07Students[i]){
                isNameAlreadyExist = true;
            }
        }

        if(isNameAlreadyExist){
            console.log(`Student ${studentName} is already in the class`)
        } else {
            class07Students.push(studentName);
        }
    }
  } else {
    console.log("Cannot add more students to class 07");
  }
}

function getNumberOfStudents() {
    return class07Students.length;
}


addStudentToClass("Emma");    // 1st
addStudentToClass("John");    // 2nd
addStudentToClass("Olivia");  // 3rd 
addStudentToClass("Michael"); // 4th

addStudentToClass("Michael"); // Already Exist

addStudentToClass("Sophia");  // 5th
addStudentToClass("David");   // 6th

addStudentToClass("Lily");    // No space in class

addStudentToClass("Queen");   //  Queen added to a full class

console.log(getNumberOfStudents());
