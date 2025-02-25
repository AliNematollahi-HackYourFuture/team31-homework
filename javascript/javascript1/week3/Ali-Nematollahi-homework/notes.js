console.log("================ notes ================");

const notes = [];

// ########################## saveNote ##########################

function saveNote(content, id) {
  if (!content || !id || isNaN(id)) {
    console.log("invalid input");
  } else {
    const time = new Date(); // adding unique feature (adding current time for each note)
    notes.push({ content: content, id: id, time: time.toLocaleTimeString() });
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// ########################## getNote ##########################

function getNote(id) {
  for (i in notes) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      console.log("invalid id");
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

// ###################### logOutNotesFormatted ######################

function logOutNotesFormatted() {
  for (i in notes) {
    console.log(
      `The note with id: ${notes[i].id}, is written at ${notes[i].time} and has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();
