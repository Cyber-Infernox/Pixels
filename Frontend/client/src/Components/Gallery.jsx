import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Styles/Gallery.css";

const Gallery = ({ photo }) => {
  const [model, setModel] = useState(false);

  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(photo.image.data.data))
  );

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <CloseIcon onClick={() => setModel(false)} />
        <img
          id="image"
          className="mb-2"
          src={`data:image/png;base64,${base64String}`}
          alt="baabtra.com"
        />
      </div>
      <div>
        {/* <h1>Photo title: {photo.title}</h1> */}
        <div id="pics" className="w-full" onClick={() => setModel(true)}>
          <img
            className="mb-2"
            src={`data:image/png;base64,${base64String}`}
            alt="baabtra.com"
          />
        </div>
        {/* <p>{photo.date}</p> */}
        {/* <p>{photo.createdAt}</p> */}
      </div>
    </>
  );
};

export default Gallery;
