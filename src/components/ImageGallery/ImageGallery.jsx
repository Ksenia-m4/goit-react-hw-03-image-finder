import { Component } from "react";
import Notiflix from "notiflix";

import getImages from "./../../services/getImages";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";

export class ImageGallery extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
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
      });
  };

  handleClick = () => {
    console.log("Клик сработал");
    this.fetchImages();
  };

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.state.images.map(({ webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={webformatURL}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              ></ImageGalleryItem>
            );
          })}
        </ul>
        {this.state.images.length !== 0 && (
          <Button className="Button" onClick={this.handleClick}></Button>
        )}
      </>
    );
  }
}
