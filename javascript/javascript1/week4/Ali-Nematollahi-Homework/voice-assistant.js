const users = []; // The function works for multiple users.
let currentUser; // The last user is set as current user.
let currentUserIndex;
const now = new Date();
const currentYear = now.getFullYear();

function getReply(command) {
  if (command.includes("Hello my name is")) {
    let isUserExist = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === command.substr(17)) {
        isUserExist = true;
        currentUserIndex = i;
      }
    }
    if (isUserExist) {
      if (currentUser !== command.substr(17)) {
        currentUser = command.substr(17);
        console.log(
          `\n##### Current user switched to the user: "${command.substr(
            17
          )}" #####\n`
        );
      }
      return `Hi again ${command.substr(17)}`;
    } else {
      if (users.length === 0) {
        console.log(
          `\n##### Current user set to the user: "${command.substr(
            17
          )}" #####\n`
        );
      } else {
        console.log(
          `\n##### Current user switched to the user: "${command.substr(
            17
          )}" #####\n`
        );
      }
      currentUser = command.substr(17);
      currentUserIndex = users.length;
      users.push({
        name: command.substr(17),
        todoList: [],
      });
      return `Nice to meet you ${command.substr(17)}`;
    }
  } else if (command === "What is my name?") {
    return currentUser
      ? `Your name is ${currentUser}`
      : "I do not know your name yet!";
  } else if (command.includes("Add ") && command.includes("to my todo")) {
    if (users[currentUserIndex].todoList.includes(command.slice(4, -11))) {
      return `${command.slice(4, -11)} already exist in your todo list`;
    } else {
      users[currentUserIndex].todoList.push(command.slice(4, -11));
      return `${command.slice(4, -11)} added to your todo`;
    }
  } else if (command.includes("Remove ") && command.includes("from my todo")) {
    if (users[currentUserIndex].todoList.includes(command.slice(7, -13))) {
      users[currentUserIndex].todoList = users[
        currentUserIndex
      ].todoList.filter((item) => item !== command.slice(7, -13));
      return `Removed ${command.slice(7, -13)} from your todo`;
    } else {
      return `${command.slice(7, -13)} did not exist in your todo`;
    }
  } else if (command === "What is on my todo?") {
    let todoItams = "";
    for (let i = 0; i < users[currentUserIndex].todoList.length; i++) {
      todoItams += `${i + 1}.${users[currentUserIndex].todoList[i]}\n`;
    }
    return todoItams;
  } else if (command === "What day is it today?") {
    return getTodayDate();
  } else if (command.includes("What is ")) {
    // The command "What is on my todo?" has already checked!
    return calculator(command.substr(8));
  } else if (command.includes("Set a timer")) {
    const minutes = Number(command.slice(16, -8));
    setTimeout(() => {
      console.log("Timer done");
    }, minutes * 60 * 1000);
    return `Timer set for ${minutes} minutes`;
  } else if (command === "How many item do I have in todo list?") {
    return users[currentUserIndex].todoList.length === 0
      ? "You do not have any item in todo list"
      : `You have ${users[currentUserIndex].todoList.length} item${
          users[currentUserIndex].todoList.length == 1 ? "" : "s"
        } in todo list`;
  } else if (
    command.includes("I was born on ") &&
    command.includes("How old am I?")
  ) {
    return ageCalculator(command.substr(14, 10));
  } else if (command === "How many days left to my next birthday?") {
    return daysUntilBirthday(users[currentUserIndex].birthday);
  } else {
    return "Invalid input, try again";
  }
}

function getTodayDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const day = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  return `Today is ${day}. of ${monthNames[monthIndex]} ${year}`;
}

function calculator(statement) {
  const modifiedStatement = statement.trim().replace(/  +/g, " ");
  const statementArray = modifiedStatement.split(" ");
  const num1 = Number(statementArray[0]);
  const num2 = Number(statementArray[2]);

  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid input. Use this template: <first number  space  operator  space  second number>";
  }
  switch (statementArray[1]) {
    case "+":
      return `Result for ${modifiedStatement} is ${num1 + num2}`;
    case "-":
      return `Result for ${modifiedStatement} is ${num1 - num2}`;
    case "*":
      return `Result for ${modifiedStatement} is ${num1 * num2}`;
    case "/":
      return `Result for ${modifiedStatement} is ${num1 / num2}`;
    default:
      return "Invalid input. Use this template: <first number  space  operator  space  second number>";
  }
}

function ageCalculator(birthday) {
  // Input validation
  const birthdayArray = birthday.split("-");
  const year = Number(birthdayArray[0]);
  const month = Number(birthdayArray[1]);
  const day = Number(birthdayArray[2]);

  if (isNaN(year) || year < 1900 || year > currentYear) {
    return "Invalid date or format. Date format template: yyyy-mm-dd";
  }

  if (isNaN(month) || month < 1 || month > 12) {
    return " Invalid date format. Date format template: yyyy-mm-dd";
  }

  if (isNaN(day) || day < 1 || day > 31) {
    return " Invalid date format. Date format template: yyyy-mm-dd";
  }

  // Validation done
  users[currentUserIndex].birthday = birthday;

  const dayOfBirth = new Date(birthday);
  const age = (now - dayOfBirth) / (365 * 24 * 60 * 60 * 1000);

  return `You are ${Math.trunc(age)} years old`;
}

function daysUntilBirthday(birthday) {
  if (!birthday) {
    return "You have not registered your birthday yet";
  }

  const year = Number(birthday.substr(0, 4));
  let newBirthday = new Date(birthday.replace(year, currentYear));

  if (newBirthday - now < 0) {
    newBirthday = new Date(birthday.replace(year, currentYear + 1));
  }

  return `Days Until Your Birthday: ${Math.ceil(
    (newBirthday - now) / (24 * 60 * 60 * 1000)
  )} days`;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add sleeping to my todo"));
console.log(getReply("How many item do I have in todo list?"));
console.log(getReply("Remove running from my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("How many days left to my next birthday?"));
console.log(getReply("I was born on 2060-05-06.How old am I?"));
console.log(getReply("I was born on 2006-05-06.How old am I?"));
console.log(getReply("How many days left to my next birthday?"));

console.log(getReply("Hello my name is Ali"));
console.log(getReply("What is my name?"));
console.log(getReply("Add running to my todo"));
console.log(getReply("Add shopping to my todo"));
console.log(getReply("I was born on 1989-09-16.How old am I?"));

console.log(getReply("Hello my name is John"));
console.log(getReply("I was born on 1999-09-09.How old am I?"));
console.log(getReply("How many days left to my next birthday?"));

console.log(getReply("Hello my name is Ali"));
console.log(getReply("How many days left to my next birthday?"));
console.log(getReply("What is on my todo?"));

console.log(getReply("What day is it today?"));

console.log(getReply("What is 3 + 36"));
console.log(getReply("What is 55 - 39"));
console.log(getReply("What is 99 * 12"));
console.log(getReply("What is 80 / 8"));

console.log(getReply("Set a timer for 4 minutes"));