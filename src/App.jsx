import { useEffect, useState } from "react";
import AddEntryModal from "./components/AddEntryModal";


function App() {
 // Stores ALL diary entries
 const [entries, setEntries] = useState([]);


 // Controls whether the Add Entry modal is visible
 const [showAddModal, setShowAddModal] = useState(false);


 // ---------------------------------------------------
 // LOAD ENTRIES WHEN APP STARTS
 // ---------------------------------------------------
 // useEffect with [] runs ONCE when component mounts
 // This loads saved diary entries from localStorage
 useEffect(() => {
   // Get saved entries from browser storage
   const savedEntries = JSON.parse(localStorage.getItem("diaryEntries"));


   // If entries exist in storage,
   // update React state
   if (savedEntries) {
     setEntries(savedEntries);
   }
 }, []);


 // ---------------------------------------------------
 // SAVE ENTRIES WHENEVER ENTRIES CHANGES
 // ---------------------------------------------------
 // This runs every time the entries state updates
 useEffect(() => {
   // Convert JS array -> JSON string
   // localStorage ONLY stores strings
   localStorage.setItem("diaryEntries", JSON.stringify(entries));
 }, [entries]);


 // ---------------------------------------------------
 // ADD NEW ENTRY
 // ---------------------------------------------------
 // Receives new entry object from AddEntryModal
 const handleAddEntry = (newEntry) => {
  const entryAlreadyExists = entries.some(
    (entry) => entry.date === newEntry.date
  );

  if (entryAlreadyExists) {
    alert("You already have an entry for this date. Come back the next day.");
    return false;
  }

  setEntries([newEntry, ...entries]);
  return true;
};


 return (
   <div className="min-h-screen bg-base-200">
     <div className="max-w-6xl mx-auto p-6">
       {/* ===================================================
           HEADER
       =================================================== */}
       <header className="navbar bg-base-100 rounded-box shadow mb-10">
         <div className="flex-1">
           <h1 className="text-3xl font-bold">Personal Diary</h1>
         </div>


         <div className="flex-none">
           {/* Opens modal */}
           <button
             onClick={() => setShowAddModal(true)}
             className="btn btn-primary"
           >
             Add Entry
           </button>
         </div>
       </header>


       {/* ===================================================
           PAGE INTRO
       =================================================== */}
       <section className="mb-6">
         <h2 className="text-2xl font-semibold mb-2">My Diary Entries</h2>


         <p className="text-base-content/70">Your memories, your story.</p>
       </section>


       {/* ===================================================
           EMPTY STATE
       =================================================== */}
       {/* Shows ONLY when there are no entries */}
       {entries.length === 0 && (
         <div className="alert">
           <span>No diary entries yet. Click "Add Entry" to create one.</span>
         </div>
       )}


       {/* ===================================================
           ENTRY LIST
       =================================================== */}
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Loop through entries array */}
         {entries.map((entry) => (
           <div key={entry.id} className="card bg-base-100 shadow-xl">
             {/* Entry image */}
             <figure>
               <img
                 src={entry.imageUrl}
                 alt={entry.title}
                 className="w-full h-48 object-cover"
               />
             </figure>


             {/* Card body */}
             <div className="card-body">
               <h3 className="card-title">{entry.title}</h3>


               <p className="text-base-content/60">{entry.date}</p>
             </div>
           </div>
         ))}
       </section>


       {/* ===================================================
           ADD ENTRY MODAL
       =================================================== */}
       {/* Only render modal if state is true */}
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
