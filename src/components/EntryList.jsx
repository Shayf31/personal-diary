import EntryCard from "./EntryCard";

// Responsible for displaying ALL diary entries
//
// Receives TWO props:
//
// entries
// -> array of diary entry objects
//
// onViewEntry
// -> function used to open the detail modal
const EntryList = ({ entries }) => {
 return (
   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   
     {/* .map() loops through EVERY entry in "entries" array */}
     {/* For EACH entry -> create ONE EntryCard */}
     {/* Pass click handler - send back to app jsx */}
     {entries.map((entry) => (
       <EntryCard
         key={entry.title}
         entry={entry}
       />
     ))}
   </section>
 );
};


export default EntryList;