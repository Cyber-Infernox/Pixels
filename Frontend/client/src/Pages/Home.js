import { useEffect } from "react";
import Gallery from "../Components/Gallery";
import PhotoForm from "../Components/PhotoForm";
import { usePhotosContext } from "../Hooks/usePhotosContext";

const Home = () => {
  const { photos, dispatch } = usePhotosContext();

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("/api/gallery");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchPhotos();
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Home</h1>
        {photos &&
          photos.map((photo) => <Gallery key={photo.id} photos={photos} />)}
      </div>
      <div>
        <PhotoForm />
      </div>
    </div>
  );
};

export default Home;
