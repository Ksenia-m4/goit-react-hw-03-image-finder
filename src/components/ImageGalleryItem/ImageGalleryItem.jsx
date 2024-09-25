import PropTypes from "prop-types";

export const ImageGalleryItem = ({ webformatURL, tags, id, onClick }) => {
  return (
    <li className="ImageGalleryItem" id={id} onClick={onClick}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,

  // searchQuery: PropTypes.string.isRequired,
};
