import s from "./ImageCard.module.css";

interface ImageCardInterface {
  openModal: (urls: string, alt_description: string) => void;
  alt: string;
  smallUrl: string;
  regularUrl: string;
}

const ImageCard: React.FC<ImageCardInterface> = ({
  openModal,
  alt,
  smallUrl,
  regularUrl,
}) => {
  return (
    <div className={s.wrapper}>
      <img
        onClick={() => openModal(regularUrl, alt)}
        src={smallUrl}
        alt={alt}
        title={alt}
        className={s.item}
      />
    </div>
  );
};

export default ImageCard;
