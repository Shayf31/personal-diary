// Responsible for displaying:
// - app title
// - Add Entry button
//
// Receives ONE prop:
//
// onAddEntryClick
// -> function that opens the Add Entry modal
const Header = ({ onAddEntryClick }) => {
 return (
   <header className="navbar bg-base-100 rounded-box shadow mb-10 px-6">
     <div className="flex-1">
       <h1 className="text-3xl font-bold text-blue-500">
         DiaryApp
       </h1>
     </div>


     <div className="flex-none">
       <button
       //User clicks button
         // onAddEntryClick runs
         // showAddModal becomes true
         // AddEntryModal appears
         onClick={onAddEntryClick}
         className="btn btn-primary bg-blue-500 hover:bg-blue-400 text-white"
       >
         Add Entry
       </button>
     </div>
   </header>
 );
};


export default Header;