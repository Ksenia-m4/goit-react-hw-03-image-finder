import { Component } from "react";

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import getImages from "./../../services/getImages";

export class ImageGallery extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      getImages(this.props.searchQuery).then((resp) => {
        console.log(resp);
        this.setState({ images: resp.hits });
      });
    }
  }

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}
