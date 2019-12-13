/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import getJournalEntries, { saveEntry, useJournalEntries, deleteEntry } from "./JournalDataProvider.js";
import JournalEntryComponent from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");
const eventHub = document.querySelector(".container")

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  const entries = useJournalEntries()

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
       deleteEntry(id).then( 
         () => getJournalEntries()).then(
        () => renderEntries(useJournalEntries()) )
    }
  })

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
        
         entryLog.innerHTML=""
         renderEntries(useJournalEntries())
      
      })}
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
renderEntries(entries)

}

export default EntryListComponent;
