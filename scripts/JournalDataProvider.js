// const eventHub = document.querySelector(".container")

let journalEntries = [];

export const useJournalEntries = () => {
  return journalEntries;
}


const getJournalEntries = () => {
  return fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(entries => {
      console.log(entries)

  journalEntries = entries.slice().sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return journalEntries;
})};


export const saveEntry = entry => {
  return fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  }).then(getJournalEntries);
};


export const deleteEntry = noteId => {
  return fetch(`http://localhost:3000/entries/${noteId}`, {
      method: "DELETE"
  })
      .then(getJournalEntries)
}


export default getJournalEntries