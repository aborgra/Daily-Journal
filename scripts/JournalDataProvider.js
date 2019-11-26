/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
  {
    date: "11/13/2019",
    concept: "HTML & CSS",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Happy"
  },
  {
    date: "11/22/2019",
    concept: "JavaScript",
    entry: "We started talking about JavaScript and how to use it in our HTML",
    mood: "Happy"
  },
  {
    date: "11/25/2019",
    concept: "JavaScript Objects and Functions",
    entry:
      "We worked on using JavaScript objects, functions, and methods to automate input into HTML",
    mood: "Happy"
  }
];

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};
