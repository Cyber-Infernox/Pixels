import { PhotosContext } from "../Context/PhotoContext";
import { useContext } from "react";

export const usePhotosContext = () => {
  const context = useContext(PhotosContext);

  if (!context) {
    throw Error("usePhotoContext must be used inside an PhotosContextProvider");
  }

  return context;
};
