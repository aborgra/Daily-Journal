const eventHub = document.querySelector(".container")


const MoodFilter = () => {
  return `
      <fieldset class="fieldset">
          <label for="filterMood">Filter Journal Entries by Mood:</label>
          <div>
            <input type="radio" id="moodChoice1"
             name="moodFilter" value="Happy">
            <label for="contactChoice1">Happy</label>
            <input type="radio" id="moodChoice2"
             name="moodFilter" value="Proud">
            <label for="contactChoice2">Proud</label>
            <input type="radio" id="moodChoice3"
             name="moodFilter" value="Sad">
            <label for="contactChoice3">Sad</label>
            <input type="radio" id="moodChoice4"
              name="moodFilter" value="Frustrated">
            <label for="contactChoice4">Frustrated</label>
          </div>
      </fieldset>
      `
}

eventHub.addEventListener("click", event => {
  console.log("radio button clicked")
  if (event.target.name === "moodFilter") {
      const mood = event.target.value
      console.log(event.target.value)
      const message = new CustomEvent("filterMoodChecked", {
        detail: {
          mood: mood
        }
      })
      eventHub.dispatchEvent(message)
  }
})
export default MoodFilter