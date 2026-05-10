import { useEffect, useState } from "react";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import Header from "./components/Header";
import EntryList from "./components/EntryList";


function App() {
 const [entries, setEntries] = useState([]);
 const [showAddModal, setShowAddModal] = useState(false);
 const [selectedEntry, setSelectedEntry] = useState(null);


 useEffect(() => {
   const savedEntries = JSON.parse(localStorage.getItem("diaryEntries"));


   if (savedEntries) {
     setEntries(savedEntries);
   }
 }, []);


 useEffect(() => {
   localStorage.setItem("diaryEntries", JSON.stringify(entries));
 }, [entries]);


 const handleAddEntry = (newEntry) => {
   const entryAlreadyExists = entries.some(
     (entry) => entry.date === newEntry.date,
   );


   if (entryAlreadyExists) {
     alert("You already have an entry for this date.");
     return false;
   }


   setEntries([newEntry, ...entries]);
   return true;
 };


 const handleViewEntry = (entry) => {
   setSelectedEntry(entry);
 };


 const handleCloseViewModal = () => {
   setSelectedEntry(null);
 };


 return (
   <div className="min-h-screen bg-base-200">
     <div className="max-w-6xl mx-auto p-6">


       <Header
         onAddEntryClick={() => setShowAddModal(true)}
       />


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
           <span>
             No diary entries yet. Click "Add Entry" to create one.
           </span>
         </div>
       )}


       <EntryList
         entries={entries}
         onViewEntry={handleViewEntry}
       />


       {showAddModal && (
         <AddEntryModal
           onClose={() => setShowAddModal(false)}
           onAddEntry={handleAddEntry}
         />
       )}


       {selectedEntry && (
         <ViewEntryModal
           entry={selectedEntry}
           onClose={handleCloseViewModal}
         />
       )}


     </div>
   </div>
 );
}


export default App;