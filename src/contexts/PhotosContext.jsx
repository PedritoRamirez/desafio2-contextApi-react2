import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

// eslint-disable-next-line react/prop-types
export default function PhotosProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [fotosFavoritas, setFotosFavoritas] = useState([]);

  const getPhotos = async () => {
    const response = await fetch("/photos.json");
    const { photos: photosdb } = await response.json();
    setPhotos(photosdb);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const miSeleccion = (index) => {
    const photosSelec = photos.map((photo, i) =>
      i === index ? { ...photo, liked: !photo.liked } : photo
    );
    setPhotos(photosSelec);

    if (photosSelec[index].liked) {
      setFotosFavoritas((prevfotosFavoritas) => [
        ...prevfotosFavoritas,
        photosSelec[index],
      ]);
    } else {
      setFotosFavoritas((prevfotosFavoritas) =>
        prevfotosFavoritas.filter((photo) => photo.id !== photosSelec[index].id)
      );
    }
  };

  return (
    <PhotosContext.Provider
      value={{ photos, setPhotos, fotosFavoritas, miSeleccion }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

