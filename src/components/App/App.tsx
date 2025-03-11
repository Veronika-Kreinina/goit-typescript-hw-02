import "./App.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import { getPhotos } from "../../services/api";
import ImageModal from "../ImageModal/ImageModal";
import { ImagesState } from "./App.types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  // check type
  const [images, setImages] = useState<ImagesState[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setIsLoad(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        console.log(error);
        setIsError("Please try again");
      } finally {
        setIsLoad(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSubmit = (value: string): void => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsError("");
    setIsEmpty(false);
    setIsVisible(false);
  };
  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (urls: string, alt_description: string): void => {
    setModalOpen(true);
    setModalSrc(urls);
    setModalAlt(alt_description);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setModalSrc("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoad && <Loader />}
      {isError && <ErrorMessage />}
      {isEmpty && <text>Oops. Nothing for your search</text>}
      {isVisible && !isLoad && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoad} />
      )}
      <ImageModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
