const eventHub = document.querySelector(".container")


const MoodFilter = () => {
  return `
    <div class="filterBar">
      <fieldset class="fieldset">
          <label for="filterMood">Filter Journal Entries by Mood:</label>
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
      </fieldset>
      <fieldset class="fieldset">
        <input type="search" id="searchField" placeholder="Search Journal Entries">
      </fieldset>
      </div>
      `
}

eventHub.addEventListener("click", event => {
  if (event.target.name === "moodFilter") {
    console.log("radio button clicked")
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

eventHub.addEventListener ("keypress", event => {
  if(event.keycode == 13 && document.querySelector("#searchField").innerHTML != "") {
    console.log ("search entered")
  }
})
export default MoodFilter