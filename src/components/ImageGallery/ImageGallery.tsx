import { ImagesState } from "../App/App.types";
import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
interface ImageGalleryInterface {
  images: ImagesState[];
  openModal: (urls: string, alt_description: string) => void;
}

const ImageGallery: React.FC<ImageGalleryInterface> = ({
  images,
  openModal,
}) => {
  return (
    <ul className={s.ul}>
      {images.map(({ alt_description, id, urls: { small, regular } }) => (
        <li key={id}>
          <ImageCard
            openModal={openModal}
            alt={alt_description}
            smallUrl={small}
            regularUrl={regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
