// //  Handles:
// form
// validation
// submit
import { useState } from "react";


// This component receives an onClose prop from App.jsx
const AddEntryModal = ({ onClose }) => {
 // useState stores all form input values in ONE object
 const [formData, setFormData] = useState({
   // Initial values start empty
   title: "",
   date: "",
   imageUrl: "",
   content: "",
 });


 // Stores validation error message
 const [error, setError] = useState("");


 // Runs every time user types into an input
 const handleChange = (e) => {
   // Extract name + value from input
   const { name, value } = e.target;


   // Update formData state
   setFormData({
     // Copy existing values
     ...formData,


     // Update only the changed field
     [name]: value,
   });
 };


 // Runs when form is submitted
 const handleSubmit = (e) => {
   // Prevent page refresh
   e.preventDefault();

    // Simple validation
   if (
     !formData.title ||
     !formData.date ||
     !formData.imageUrl ||
     !formData.content
   ) {
     // Show DaisyUI alert
     setError("Please fill in all fields.");


     return;
   }


   // Clear error if successful
   setError("");


     // For now just log data
   console.log(formData);


   // Close modal
   onClose();
 };


 return (
   // DaisyUI modal
   <div className="modal modal-open">
     {/* Modal container */}
     <div className="modal-box">
       {/* Modal title */}
       <h2 className="text-2xl font-bold mb-4">Add Diary Entry</h2>


       {/* DaisyUI alert */}
       {error && (
         <div className="alert alert-error mb-4">
           <span>{error}</span>
         </div>
       )}


       {/* Form */}
       <form onSubmit={handleSubmit} className="space-y-4">
         {/* TITLE INPUT */}
         <input
           name="title"
           type="text"
           placeholder="Title"
           value={formData.title}
           onChange={handleChange}
           // DaisyUI input
           className="input input-bordered w-full"
         />


         {/* DATE INPUT */}
         <input
           name="date"
           type="date"
           value={formData.date}
           onChange={handleChange}
           className="input input-bordered w-full"
         />


         {/* IMAGE URL INPUT */}
         <input
           name="imageUrl"
           type="text"
           placeholder="Image URL"
           value={formData.imageUrl}
           onChange={handleChange}
           className="input input-bordered w-full"
         />


         {/* CONTENT TEXTAREA */}
         <textarea
           name="content"
           placeholder="Content"
           value={formData.content}
           onChange={handleChange}
           // DaisyUI textarea
           className="textarea textarea-bordered w-full"
         ></textarea>


         {/* Modal action buttons */}
         <div className="modal-action">
           {/* Cancel button */}
           <button
             type="button"
             onClick={onClose}
             // DaisyUI button
             className="btn"
           >
             Cancel
           </button>


           {/* Save button */}
           <button
             type="submit"
             // DaisyUI primary button
             className="btn btn-primary"
           >
             Save Entry
           </button>
         </div>
       </form>
     </div>
   </div>
 );
};


export default AddEntryModal;