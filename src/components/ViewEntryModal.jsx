const ViewEntryModal = ({ entry, onClose }) => {
 return (
   <div className="modal modal-open">
     <div className="modal-box">
       <h2 className="text-2xl font-bold mb-2">
         {entry.title}
       </h2>


       <p className="text-base-content/60 mb-4">
         {entry.date}
       </p>


       <img
         src={entry.imageUrl}
         alt={entry.title}
         className="w-full h-64 object-cover rounded-box mb-4"
       />


       <p className="whitespace-pre-wrap">
         {entry.content}
       </p>


       <div className="modal-action">
         <button
           onClick={onClose}
           className="btn"
         >
           Close
         </button>
       </div>
     </div>
   </div>
 );
};


export default ViewEntryModal;