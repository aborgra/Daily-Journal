import getJournalEntries, { saveEntry } from "./JournalDataProvider.js"
import renderEntries from "./JournalEntryList.js";


const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".container")

export const JournalFormComponent = () => {
  const render = () => {
    contentTarget.innerHTML = `
<form class="form" action="">
<div class="form-group">

    <fieldset class="form__journalDate form-group">
      <input type="date" name="journalDate" class="form-control" id="journalDate">
    </fieldset>
    <fieldset class="form__concepts form-group">
      <input type="text" name="conceptsCovered" class="form-control" id="conceptsCovered" placeholder="Concepts Covered">
    </fieldset>
    <fieldset class="form__journalEntry form-group">
          <textarea name=" journalEntry" class="form-control"id="journalEntry" cols="30" rows="10" placeholder="Journal Entry"></textarea>
    </fieldset>
    <fieldset class="form__mood form-group">
      <select name="mood" id="mood" class="form-control">
        <option value="" disabled selected hidden>Select Mood</option>
        <option value="Happy">Happy</option>
        <option value="Proud">Proud</option>
        <option value="Sad">Sad</option>
        <option value="Frustrated">Frustrated</option>
      </select>
    </fieldset>
    <fieldset class="form__button">
      <button type="button" id="saveButton" class="button btn btn-primary">Record Journal Entry</button>
    </fieldset>
    </div>
  </form>
  <br>
  `
  }
  render()
  


}
 
  
 
 