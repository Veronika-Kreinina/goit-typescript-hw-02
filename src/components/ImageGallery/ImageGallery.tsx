import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
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
