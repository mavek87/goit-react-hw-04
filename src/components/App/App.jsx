import { forwardRef, useEffect, useRef, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../utils/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (query) {
      const fetchImages = async () => {
        try {
          setIsLoading(true);
          const fetchedImages = await getImages(page, query);
          setImages((currImages) => {
            return [...currImages, ...fetchedImages.results];
          });
          setTotalPages(fetchedImages.total_pages);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchImages();
    }
  }, [page, query]);

  const searchImages = (newQuery) => {
    if (query !== newQuery) {
      setQuery((oldQuery) => newQuery);
      setPage(1);
      setImages([]);
    }
  };

  const loadMore = () => {
    setPage((currPage) => currPage + 1);
  };

  const openModal = (imageId) => {
    setIsModalOpen(true);
    const imageToShow = images.find((image) => imageId === image.id);
    setModalImage((prevImage) => imageToShow);
  };

  const closeModal = (e) => {
    document.body.classList.remove("ReactModal__Body--open");
    setIsModalOpen(false);
  };

  const loadMoreBtnRef = useRef(null);
  useEffect(() => {
    if (loadMoreBtnRef.current !== null) {
      loadMoreBtnRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [isLoading]);

  return (
    <>
      <SearchBar searchImages={searchImages} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn ref={loadMoreBtnRef} loadMore={loadMore} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isModalOpen && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          image={modalImage}
        />
      )}
    </>
  );
}

export default App;
