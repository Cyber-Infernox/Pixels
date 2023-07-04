import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";

import { usePhotosContext } from "../../Hooks/usePhotosContext";
import "./Gallery.css";

const Gallery = ({ photo }) => {
  const { dispatch } = usePhotosContext();
  const [model, setModel] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleDelete = async () => {
    const response = await fetch("/api/gallery/" + photo._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PHOTO", payload: json });
    }
  };

  function Uint16ToString(u8a) {
    const CHUNK_SZ = 0x8000;
    const c = [];
    for (let i = 0; i < u8a.length; i += CHUNK_SZ) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)));
    }
    return c.join("");
  }

  const array = new Uint16Array(photo.image.data.data);
  const base64String = btoa(Uint16ToString(array));

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
              <FavoriteBorderIcon
                className="mr-14"
                sx={{ color: "white" }}
                // onClick={handleDelete}
              />
              <DeleteIcon sx={{ color: "white" }} onClick={handleDelete} />
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
