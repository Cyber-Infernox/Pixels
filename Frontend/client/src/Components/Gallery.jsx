const Gallery = ({ photo }) => {
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(photo.image.data.data))
  );

  return (
    <div>
      <h1>Photo title: {photo.title}</h1>
      <div>
        <img
          className=""
          src={`data:image/png;base64,${base64String}`}
          alt="baabtra.com"
        />
      </div>
      <p>{photo.date}</p>
      <p>{photo.createdAt}</p>
    </div>
  );
};

export default Gallery;
