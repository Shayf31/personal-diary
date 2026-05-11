
import { useState } from "react";

// Receives TWO props from App.jsx:
//
// onClose
// -> closes the modal
//
// onAddEntry
// -> sends new entry data back to App.jsx

const AddEntryModal = ({ onClose, onAddEntry }) => {
   // Stores ALL form input values
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    imageUrl: "",
    content: "",
  });

  // Stores validation error messages
  const [error, setError] = useState("");

  // HANDLE INPUT CHANGES
 // ---------------------------------------------------
 // Runs every time user types into an input
  const handleChange = (e) => {

    // Extract input name + value
    const { name, value } = e.target;

    // Update formData state
// Copy ALL existing form values
     // Without this,
     // other fields would disappear
// Update ONLY the field that changed
     // Example:
     // title: "Beach Day"

    //  Whichever input changed, update that matching field in formData.
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Runs when user submits the form + prevent def refresh
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if ANY field is empty
    if (
      !formData.title ||
      !formData.date ||
      !formData.imageUrl ||
      !formData.content
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // ---------------------------------------------------
   // CREATE NEW ENTRY OBJECT
   // ---------------------------------------------------

   // Build a new diary entry object
   // Generate unique ID
    const newEntry = {
  title: formData.title,
  date: formData.date,
  imageUrl: formData.imageUrl,
  content: formData.content,
};

    // ---------------------------------------------------
   // SEND ENTRY TO APP.JSX
   // ---------------------------------------------------


   // Calls function passed from App.jsx
   //
   // Sends newEntry UP to parent component

    const wasAdded = onAddEntry(newEntry);

    //close modal if successful
    if (wasAdded) {
      onClose();
    }
  };

  // DAISY UI Modal
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-2xl font-bold mb-4">Add Diary Entry</h2>
{/* IF error exists -> show alert */}
        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}

{/* When submitted: handleSubmit runs*/}
{/*  // handleChange Updates state on change*/}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <input
            name="imageUrl"
            type="text"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          ></textarea>

 {/* MODAL ACTION BUTTONS - CANCEL then SUBMIT(Clicking this Triggers handleSubmit*/}
          <div className="modal-action">
            <button type="button" onClick={onClose} className="btn">
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
