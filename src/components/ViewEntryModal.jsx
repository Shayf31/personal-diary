// -App keeps the main diary entries state in App.jsx. 
// -The Header opens a modal, the modal collects the form data,
// - When the form is submitted, the new entry is sent back up to App.jsx. 
// -App.jsx updates the entries array, passes it down to EntryList, and 
// -EntryList renders one EntryCard for each diary entry. 


// flow:
// App.jsx - stores all diary entries
// ------
// Header.jsx - opens AddEntryModal
// ------
// AddEntryModal.jsx - collects form data
// ------
// sends new entry back to App.jsx
// --------
// App.jsx updates entries state
// -----
// EntryList.jsx maps over entries
// -----
// EntryCard.jsx displays each diary entry
