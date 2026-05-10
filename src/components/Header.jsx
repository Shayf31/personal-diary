const Header = ({ onAddEntryClick }) => {
 return (
   <header className="navbar bg-base-100 rounded-box shadow mb-10">
     <div className="flex-1">
       <h1 className="text-3xl font-bold">
         Personal Diary
       </h1>
     </div>


     <div className="flex-none">
       <button
         onClick={onAddEntryClick}
         className="btn btn-primary"
       >
         Add Entry
       </button>
     </div>
   </header>
 );
};


export default Header;