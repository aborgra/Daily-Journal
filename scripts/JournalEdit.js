
const eventHub = document.querySelector(".container")

const EditNoteComponent = (entry) => {
return `
<form>
<div class="form-group">
  <input type="hidden" id="editEntryId" value="${entry.id}">
  <div>
  <label for="date" class="text-muted">Date:</label>
  </div>
  <div id="editEntryDate" value="${entry.date}" class="form-group">${entry.date}</div>
  <div>
  <label for="conceptCovered" class="text-muted">Concepts Covered:</label>
  </div>
  <input type="text" id="editConceptCovered" class="form-group form-control" value="${entry.concept}">
  <fieldset class="form__noteEntry">
    <label for="noteEntry" class="text-muted">Edit Entry:</label>
    <br>
    <textarea name="editEntry" id="editEntry" cols="70" rows="5" class="form-group form-control">${entry.entry}</textarea>
  </fieldset>
  <fieldset class="form__mood form-group">
  <div>
  <label for="mood" class="text-muted">Date:</label>
  </div>
      <select name="mood" id="editMood" class="form-control">
        <option value="" disabled selected hidden>Select Mood</option>
        <option value="Happy">Happy</option>
        <option value="Proud">Proud</option>
        <option value="Sad">Sad</option>
        <option value="Frustrated">Frustrated</option>
      </select>
  </fieldset>
  </div>
</form>
  <button id="saveEditedEntry--${entry.id}">Save</button>

`
}

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id.startsWith("saveEditedEntry--")) {
    const editedNoteText = document.querySelector("#editEntry").value
    const editedNoteId = document.querySelector("#editEntryId").value
    const editedNoteDate = document.querySelector("#editEntryDate").innerHTML
    const editedConcept = document.querySelector("#editConceptCovered").value
    const editedMood = document.querySelector("#editMood").innerHTML

    console.log("edited entry save button clicked")

    const editedEntry = new CustomEvent ("entryEdited",
    {
      detail: {
        date: editedNoteDate,
        concept: editedConcept,
        entry: editedNoteText,
        id: editedNoteId,
        mood: editedMood
      }
    })
    
    eventHub.dispatchEvent(editedEntry)
  }})
export default EditNoteComponent