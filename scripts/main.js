import EntryListComponent from "./JournalEntryList.js";
import getJournalEntries from "./JournalDataProvider.js";
import { JournalFormComponent } from "./JournalForm.js";
import { FilterBar } from "./filter/FilterBar.js";

JournalFormComponent()
// EntryListComponent();
getJournalEntries().then(EntryListComponent)
FilterBar()

