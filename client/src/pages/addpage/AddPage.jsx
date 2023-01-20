import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addPage";

const AddPage = () => {
  const [page, setPage] = useState();
  const handleChange = (e) => {
    setPage({ ...page, [e.target.title]: e.target.value });
  };
  const handleAdd = () => {};
  return (
    <div className="addPage">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="write the title"
          onChange={handleChange}
        />
        <label htmlFor="image">Icon</label>
        <input
          type="text"
          name="image"
          placeholder="Write the image link"
          onChange={handleChange}
        />
        <label htmlFor="color">Color</label>
        <input
          type="color"
          name="color"
          placeholder="Choose the color"
          onChange={handleChange}
        />
        <label htmlFor="link">Link</label>
        <input
          type="url"
          name="link"
          placeholder="Enter the link"
          onChange={handleChange}
        />
        <button type="submit" value="Submit" onClick={handleAdd}>
          Add Page
        </button>
      </form>
    </div>
  );
};

export default AddPage;
