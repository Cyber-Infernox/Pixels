import { useState } from "react";
import { usePhotosContext } from "../Hooks/usePhotosContext";

const PhotoForm = () => {
  const { dispatch } = usePhotosContext();
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const photo = { title };

    const response = await fetch("/api/gallery", {
      method: "POST",
      body: JSON.stringify(photo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setError(null);
      console.log("New photo added");
      console.log(json);
      dispatch({ type: "CREATE_PHOTO", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new picture</h3>

      <label>Picture Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button>Add Picture</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default PhotoForm;
