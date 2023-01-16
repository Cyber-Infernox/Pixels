import { useState } from "react";
// import { usePhotosContext } from "../Hooks/usePhotosContext";
import axios from "axios";

const PhotoForm = () => {
  // const { dispatch } = usePhotosContext();
  const [title, setTitle] = useState("");
  // const [error, setError] = useState(null);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // POST with photo

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("/api/gallery/", formData, config)
      .then((response) => {
        alert("!!Image Uploaded Successfully!!");
        console.log(formData);
      })
      .catch((err) => {
        console.log("err", err);
      });

    // POST without photo

    // const photo = { title };
    // const response = await fetch("/api/gallery", {
    //   method: "POST",
    //   body: JSON.stringify(photo),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const json = await response.json();

    // if (!response.ok) {
    //   setError(json.error);
    // }

    // if (response.ok) {
    //   setTitle("");
    //   setError(null);
    //   console.log("New photo added");
    //   console.log(json);
    //   dispatch({ type: "CREATE_PHOTO", payload: json });
    // }
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
      <label>Add Single Picture</label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        name="image"
      />
      {/* <label>Add Multiple Pictures</label>
      <input multiple onChange={(e) => setImage(e.target.files)} type="file" /> */}

      <button>Submit</button>
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

export default PhotoForm;
