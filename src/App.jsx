// Owns:

// entries
// selectedEntry
// modal state

// Passes props down.

import { useState } from "react";
import AddEntryModal from "./components/AddEntryModal";


function App() {
  // Stores all diary entries
  const [entries, setEntries] = useState([]);


  // Controls whether the Add Entry modal is shown
  const [showAddModal, setShowAddModal] = useState(false);


  // Receives new entry data from AddEntryModal
  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };


  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-6xl mx-auto p-6">


        <header className="navbar bg-base-100 rounded-box shadow mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              Personal Diary
            </h1>
          </div>


          <div className="flex-none">
            <button
              onClick={() => setShowAddModal(true)}
              className="btn btn-primary"
            >
              Add Entry
            </button>
          </div>
        </header>


        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            My Diary Entries
          </h2>


          <p className="text-base-content/70">
            Your memories, your story.
          </p>
        </section>


        {entries.length === 0 && (
          <div className="alert">
            <span>No diary entries yet. Click “Add Entry” to create one.</span>
          </div>
        )}


        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <div key={entry.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="w-full h-48 object-cover"
                />
              </figure>


              <div className="card-body">
                <h3 className="card-title">
                  {entry.title}
                </h3>


                <p className="text-base-content/60">
                  {entry.date}
                </p>
              </div>
            </div>
          ))}
        </section>


        {showAddModal && (
          <AddEntryModal
            onClose={() => setShowAddModal(false)}
            onAddEntry={handleAddEntry}
          />
        )}


      </div>
    </div>
  );
}


export default App;
