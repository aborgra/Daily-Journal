/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = entry => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
         <div>Date: ${entry.date}</div>
         <div>Concepts Covered: ${entry.concept}</div>
         <div>Journal Entry: ${entry.entry}</div>
         <div>Mood: ${entry.mood}</div>
      </section>
      <br>
  `;
};

export default JournalEntryComponent;
