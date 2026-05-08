// Owns:


// entries
// selectedEntry
// modal state


// Passes props down.


import { useState } from "react";
import AddEntryModal from "./components/AddEntryModal.jsx";


function App() {
 // Controls whether the Add Entry modal is shown
 const [showAddModal, setShowAddModal] = useState(false);


 return (
   <div className="min-h-screen bg-base-200">
     <div className="max-w-6xl mx-auto p-6">


       {/* DaisyUI navbar/header */}
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


       {/* Page intro */}
       <section className="mb-6">
         <h2 className="text-2xl font-semibold mb-2">
           My Diary Entries
         </h2>


         <p className="text-base-content/70">
           Your memories, your story.
         </p>
       </section>


       {/* Diary Cards */}
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


         {/* DaisyUI Card */}
         <div className="card bg-base-100 shadow-xl">


           <figure>
             <img
               src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
               alt="Beach"
               className="w-full h-48 object-cover"
             />
           </figure>


           <div className="card-body">
             <h3 className="card-title">
               Test Message
             </h3>


             <p className="text-base-content/60">
               May 7, 2026
             </p>
           </div>


         </div>


       </section>


       {/* Modal controlled by React useState */}
       {showAddModal && (
         <AddEntryModal
           onClose={() => setShowAddModal(false)}
         />
       )}


     </div>
   </div>
 );
}


export default App;
