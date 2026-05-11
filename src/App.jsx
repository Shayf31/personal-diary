import { useEffect, useState } from "react";
import AddEntryModal from "./components/AddEntryModal";
import Header from "./components/Header";
import EntryList from "./components/EntryList";

function App() {
  // // Stores ALL diary entries
 // Starts as an empty array
  const [entries, setEntries] = useState([]);
  
  // Controls whether the "Add Entry" modal is visible
 // false hidden
  const [showAddModal, setShowAddModal] = useState(false);
  

   // ---------------------------------------------------
 // LOAD SAVED ENTRIES ON APP START
 // ---------------------------------------------------
 // useEffect with [] runs ONCE when the component first mounts
 // Get saved diary entries from localStorage
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries"));

    if (savedEntries) {
      setEntries(savedEntries);
    }
  }, []);

   // ---------------------------------------------------
 // SAVE ENTRIES TO LOCALSTORAGE
 // ---------------------------------------------------
 // Runs EVERY time entries changes
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);


  // ---------------------------------------------------
 // ADD NEW ENTRY -comes up from AddEntryModal.jsx
 // -----------------------------------------------
 // Receives a new entry object
 // from AddEntryModal component
  const handleAddEntry = (newEntry) => {
    // Check if an entry already exists
   // for the selected date
    let entryAlreadyExists = false;

for (let entry of entries) {
  if (entry.date === newEntry.date) {
    entryAlreadyExists = true;
  }
}

    if (entryAlreadyExists) {
      alert("You already have an entry for this date.");
      return false;
    }


    // Add new entry to FRONT of array
   // newest entries appear first
    setEntries([newEntry, ...entries]);
    return true;
  };


  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-6xl mx-auto p-6">

      {/* Pass function into Header component */}
       {/* Clicking button sets modal to visible */}
        <Header onAddEntryClick={() => setShowAddModal(true)} />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Diary Entries</h2>

          <p className="text-base-content/70">Enter your stories here.</p>
        </section>

        {entries.length === 0 && (
          <div className="alert">
            <span>No diary entries yet. Click "Add Entry" to create one.</span>
          </div>
        )}

{/* Pass entries + click handler into EntryList */}
        <EntryList entries={entries} />

{/* Only render modal if state is true */}
        {showAddModal && (
          <AddEntryModal
          // Function to close modal
            onClose={() => setShowAddModal(false)}
            // Function to add new entry
            onAddEntry={handleAddEntry}
          />
        )}
        
      </div>
    </div>
  );
}

export default App;
