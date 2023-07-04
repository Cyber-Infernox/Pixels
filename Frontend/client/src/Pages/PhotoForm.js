import { useState } from "react";
import axios from "axios";

// import { usePhotosContext } from "../Hooks/usePhotosContext";

function PhotoForm() {
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
      .then(() => {
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
      <div className="flex justify-center items-center h-96">
        <div className="flex flex-col justify-center items-center rounded-xl bg-cyan-200 px-10 py-5">
          <div className="text-xl text-left font-bold w-full pl-5 mb-7 pt-4">
            <h3>Add a new picture</h3>
          </div>
          <div className="flex items-center w-full pl-5 mb-5">
            <label className="pr-4">Picture Title</label>
            <input
              className="w-64 pr-5 h-8 rounded-lg border-2 border-black px-2 bg-slate-200 hover:bg-white"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="flex items-center w-full pl-5 mb-10">
            <label className="pr-4">Add Single Picture</label>
            <input
              className="pr-5"
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="image"
            />
          </div>
          {/* <label>Add Multiple Pictures</label>
      <input multiple onChange={(e) => setImage(e.target.files)} type="file" /> */}

          <button className="bg-gray-300 hover:bg-gray-500 hover:text-cyan-50 py-2 px-4 rounded-xl mb-3 text-lg">
            Submit
          </button>
          {/* {error && <div>{error}</div>} */}
        </div>
      </div>
    </form>
  );
}

export default PhotoForm;
