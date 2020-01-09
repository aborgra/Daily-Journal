/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import getJournalEntries, { saveEntry, useJournalEntries, deleteEntry, editEntry } from "./JournalDataProvider.js";
import JournalEntryComponent from "./JournalEntry.js";
import { JournalFormComponent } from "./JournalForm.js";
import  EditNoteComponent  from "./JournalEdit.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");
const eventHub = document.querySelector(".container")

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  const entries = useJournalEntries()


// Delete journal entry event listener
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
       deleteEntry(id).then( 
        () => {
          const newNotes = useJournalEntries()
          renderEntries(newNotes)} )
    }
  })


// Save entry event listener
  eventHub.addEventListener("click", saveEvent => {
    if (saveEvent.target.id === "saveButton") {
      const date = document.querySelector("#journalDate").value
      const concept = document.querySelector("#conceptsCovered").value
      const entry = document.querySelector("#journalEntry").value
      const mood = document.querySelector("#mood").value
 
      const message =  {
          date: date,
          concept: concept,
          entry: entry,
          mood: mood
        }
      saveEntry(message).then( () => {
        JournalFormComponent()
        //  entryLog.innerHTML=""
         renderEntries(useJournalEntries())
      })}
  })

  eventHub.addEventListener("editClicked", event => {
    // debugger
    const entryId = parseInt(event.detail.id, 10)
    const allEntries = useJournalEntries();
      const theSelectedEntry = allEntries.find(entry => entry.id === entryId);
      const contentTarget = document.querySelector(".dialog__editForm");

      renderEdit(contentTarget, theSelectedEntry);
      const theDialog = document.querySelector(".dialog__editForm")
          theDialog.showModal()
  })

  eventHub.addEventListener("entryEdited", clickEvent => {
    editEntry(clickEvent.detail).then(() => renderEntries(useJournalEntries()))
  })


  eventHub.addEventListener("filterMoodChecked", event => {
    console.log("mood event heard")
    const selectedMood = event.detail.mood
    const allEntries = useJournalEntries()
    if(selectedMood === "All"){
      renderEntries(allEntries)
    }else{
    const matchingEntries = allEntries.filter(entry => {
      if(entry.mood === selectedMood){
        return entry
      }
    })
    if(matchingEntries.length === 0){
      alert("No matching Journal Entries")}
      else{renderEntries(matchingEntries)}
    }
  })

eventHub.addEventListener("searchInitiated", event => {
  const searchData = event.detail.data
  const allEntries = useJournalEntries()
  let matchingEntries = []

  for (const entry of allEntries) {
    for (const value of Object.values(entry)){
      if(value.toString().includes(searchData) && !(matchingEntries.includes(entry))) {
        matchingEntries.push(entry)
      }
    }
  }
  if (matchingEntries.length > 0) {
    renderEntries(matchingEntries)
  } else {alert("No Matching Journal Entries")}

})

  const renderEntries = (entries) => {
  entryLog.innerHTML = `
        ${entries
          .map(entry => {
            return JournalEntryComponent(entry);
          })
          .join("")}
    `;
}

const renderEdit = (contentTarget, theSelectedEntry) => {
  contentTarget.innerHTML = `
${EditNoteComponent(theSelectedEntry)}
`;
};

renderEntries(entries)

}

export default EntryListComponent;
