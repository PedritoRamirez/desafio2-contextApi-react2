import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, miSeleccion } = useContext(PhotosContext);

  return (
      <div className="gallery grid-columns-5 p-3">
          {photos.map((element, i) => (
              <div className="photo" style={{backgroundImage:`url(${element.src.tiny})`}} key={i} onClick={() => miSeleccion(i)}>
                  <IconHeart filled={element.liked} />
              </div>
          ))}
      </div>
  );
};

export default Gallery;


