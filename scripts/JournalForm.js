import { saveEntry } from "./JournalDataProvider.js"



const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".container")

export const JournalFormComponent = () => {
  
    contentTarget.innerHTML = `
<form class="form" action="">
    <fieldset class="form__journalDate">
      <label for="journalDate">Date of Entry</label>
      <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset class="form__concepts">
      <label for="concepts">Concepts Covered</label>
      <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
    <fieldset class="form__journalEntry">
      <label for="journalEntry">Journal Entry<label>
        <br>
          <textarea name=" journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
    </fieldset>
    <fieldset class="form__mood">
      <label for="mood">Mood</label>
      <select name="mood" id="mood">
        <option value="happy">Happy</option>
        <option value="proud">Proud</option>
        <option value="sad">Sad</option>
        <option value="frustrated">Frustrated</option>
      </select>
    </fieldset>
    <fieldset class="form__button">
      <button type="button" id="saveButton">Record Journal Entry</button>
    </fieldset>
  </form>`
  }

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
     saveEntry(message)
   }
 })
  
 
 