import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "./Styles/Gallery.css";

const Gallery = ({ photo }) => {
  const [model, setModel] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(photo.image.data.data))
  );

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <CloseIcon onClick={() => setModel(false)} />
        <img
          id="image"
          className=""
          src={`data:image/png;base64,${base64String}`}
          alt="baabtra.com"
        />
      </div>
      <div>
        {/* <h1>Photo title: {photo.title}</h1> */}
        <div
          id="pics"
          className={isHovering ? "hover" : "noHover"}
          onClick={() => setModel(true)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={`data:image/png;base64,${base64String}`}
            alt="baabtra.com"
          />
          <OpenInFullIcon />
        </div>
        {/* <p>{photo.date}</p> */}
        {/* <p>{photo.createdAt}</p> */}
      </div>
    </>
  );
};

export default Gallery;
