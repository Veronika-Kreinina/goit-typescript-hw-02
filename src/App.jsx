import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import { getPhotos } from "./services/api";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState("");
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsError("");
    setIsEmpty(false);
    setIsVisible(false);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (urls, alt_description) => {
    setModalOpen(true);
    setModalSrc(urls);
    setModalAlt(alt_description);
  };

  const closeModal = () => {
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
