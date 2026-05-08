// //  Handles:
// form
// validation
// submit
import { useState } from "react";


const AddEntryModal = ({ onClose, onAddEntry }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    imageUrl: "",
    content: "",
  });


  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      !formData.title ||
      !formData.date ||
      !formData.imageUrl ||
      !formData.content
    ) {
      setError("Please fill in all fields.");
      return;
    }


    const newEntry = {
      id: crypto.randomUUID(),
      title: formData.title,
      date: formData.date,
      imageUrl: formData.imageUrl,
      content: formData.content,
    };


    onAddEntry(newEntry);
    onClose();
  };


  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-2xl font-bold mb-4">
          Add Diary Entry
        </h2>


        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}


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


          <div className="modal-action">
            <button
              type="button"
              onClick={onClose}
              className="btn"
            >
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
