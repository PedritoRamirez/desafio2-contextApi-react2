import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { fotosFavoritas } = useContext(PhotosContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {fotosFavoritas.map((element, i) => (
          <div
            className="photo"
            style={{ backgroundImage: `url(${element.src.tiny})` }}
            key={i}
          >
            <IconHeart filled={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
