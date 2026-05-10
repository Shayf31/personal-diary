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