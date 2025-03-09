import s from "./ImageCard.module.css";

const ImageCard = ({ openModal, alt, smallUrl, regularUrl }) => {
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
