import { useEffect } from "react";

import { usePhotosContext } from "../../Hooks/usePhotosContext";
import Gallery from "../../Components/Gallery/Gallery";
import "./Home.css";

function Home() {
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
      <h1 id="head" className="text-center font-bold pt-16 pb-10 text-3xl">
        Pixels
      </h1>
      <div id="Gallery" className="">
        {photos &&
          photos.map((photo) => <Gallery key={photo._id} photo={photo} />)}
      </div>
    </div>
  );
}

export default Home;
