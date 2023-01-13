const Gallery = ({ photo }) => {
  return (
    <div>
      <h1>Photo title: {photo.title}</h1>
      <p>{photo.date}</p>
      <p>{photo.createdAt}</p>
    </div>
  );
};

export default Gallery;
