// This component displays ONE diary entry card
//
// It receives a prop:
//
// entry
// -> the diary entry object
//
//Sends the clicked entry upward to App.jsx
const EntryCard = ({ entry }) => {
 return (
   <div
     className="card bg-base-100 shadow-xl transition duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
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
       <p className="break-words overflow-hidden">
  {entry.content}
</p>
     </div>
   </div>
 );
};


export default EntryCard;