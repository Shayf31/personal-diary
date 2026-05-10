import EntryCard from "./EntryCard";


const EntryList = ({ entries, onViewEntry }) => {
 return (
   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {entries.map((entry) => (
       <EntryCard
         key={entry.id}
         entry={entry}
         onViewEntry={onViewEntry}
       />
     ))}
   </section>
 );
};


export default EntryList;