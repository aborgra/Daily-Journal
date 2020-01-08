const eventHub = document.querySelector(".container")


const JournalEntryComponent = entry => {
  return `
      <hr>
      <section id="entry--${entry.id}" class="journalEntry">
        
         <div>Date: ${entry.date}</div>
         <div>Concepts Covered: ${entry.concept}</div>
         <div>Journal Entry: ${entry.entry}</div>
         <div>Mood: ${entry.mood}</div>
         <br>
         <button id="editEntry--${entry.id}" class="button btn btn-secondary">Edit</button>
         <button id="deleteEntry--${entry.id}" class="button btn btn-danger">Delete</button>
      </section>
      <dialog class="dialog__editForm form">
      <button class="saveButton btn btn-secondary">Save</button>
      </dialog>
      <hr>
      <br>
  `;
};

eventHub.addEventListener("click", event => {
  if(event.target.id.startsWith("editEntry--")) {
    const [prefix, entryId] = event.target.id.split("--")

    const message = new CustomEvent ("editClicked", 
    {
      detail: {
        id: entryId
      }
    })
    eventHub.dispatchEvent(message)
  }
  // if(event.target.id.startsWith("saveButton")) {
  //   const saveMessage = new CustomEvent ("entryEdited")
  //   eventHub.dispatchEvent(saveMessage)

  // }
})

export default JournalEntryComponent;
