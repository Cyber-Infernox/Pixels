import { useEffect } from "react";
import Gallery from "../Components/Gallery";
import { usePhotosContext } from "../Hooks/usePhotosContext";
import "./Styles/Home.css";

const Home = () => {
  const { photos, dispatch } = usePhotosContext();

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("/api/gallery/");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PHOTOS", payload: json });
      }
    };

    fetchPhotos();
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <div id="Gallery" className="">
        {photos &&
          photos.map((photo) => <Gallery key={photo._id} photo={photo} />)}
      </div>
    </div>
  );
};

export default Home;
