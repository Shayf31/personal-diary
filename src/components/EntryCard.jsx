// This component displays ONE diary entry card
//
// It receives TWO props:
//
// entry
// -> the diary entry object
//
// onViewEntry
// -> function that opens the detail modal
//Sends the clicked entry upward to App.jsx
const EntryCard = ({ entry, onViewEntry }) => {
 return (
   <div
     onClick={() => onViewEntry(entry)}
     className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl"
   >
     <figure>
       <img
         src={entry.imageUrl}
         alt={entry.title}
         className="w-full h-48 object-cover"
       />
     </figure>


     <div className="card-body">
       <h3 className="card-title">{entry.title}</h3>
       <p className="text-base-content/60">{entry.date}</p>
     </div>
   </div>
 );
};


export default EntryCard;