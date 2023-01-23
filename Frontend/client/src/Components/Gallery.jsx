import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DeleteIcon from "@mui/icons-material/Delete";
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
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            className=""
            src={`data:image/png;base64,${base64String}`}
            alt="baabtra.com"
          />
          <div className="absolute inset-0 hover:bg-gray-900 hover:bg-opacity-75 transition ease-in-out duration-700">
            <div
              id="svge"
              className={
                isHovering
                  ? "flex h-full items-center justify-center relative"
                  : "hidden"
              }
            >
              <OpenInFullIcon
                className="mr-14"
                sx={{ color: "white" }}
                onClick={() => setModel(true)}
              />
              <DeleteIcon sx={{ color: "white" }} />
            </div>
          </div>
        </div>
        {/* <p>{photo.date}</p> */}
        {/* <p>{photo.createdAt}</p> */}
      </div>
    </>
  );
};

export default Gallery;
