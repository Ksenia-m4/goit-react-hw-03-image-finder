import { Component } from "react";
import Notiflix from "notiflix";
import PropTypes from "prop-types";

import getImages from "./../../services/getImages";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";

export class ImageGallery extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
    showModal: false,
    selectedImage: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      // Если новый запрос, сбрасываем страницу и изображения
      this.setState(
        { images: [], page: 1, searchQuery: this.props.searchQuery },
        this.fetchImages
      );
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    getImages(searchQuery, page)
      .then((resp) => {
        if (resp.length === 0) {
          Notiflix.Notify.failure(
            "Sorry, there are no images matching your search query. Please try again."
          );
          return;
        }

        this.setState((prevState) => ({
          images: [...prevState.images, ...resp],
          page: prevState.page + 1,
        }));
      })
      .catch(() => {
        Notiflix.Notify.failure(
          "Failed to load images. Please try again later."
        );
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    this.fetchImages();
  };

  openModal = (largeImageURL, alt) => {
    this.setState({ showModal: true, selectedImage: { largeImageURL, alt } });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, showModal, isLoading, selectedImage } = this.state;

    return (
      <>
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ul className="ImageGallery">
            {images.map(({ webformatURL, largeImageURL, tags, id }) => {
              return (
                <ImageGalleryItem
                  key={webformatURL}
                  webformatURL={webformatURL}
                  tags={tags}
                  id={id}
                  onClick={() => this.openModal(largeImageURL, tags)}
                ></ImageGalleryItem>
              );
            })}
          </ul>
        )}

        {showModal && <Modal onClose={this.closeModal}>{selectedImage}</Modal>}

        {images.length !== 0 && <Button onClick={this.onLoadMore}></Button>}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
