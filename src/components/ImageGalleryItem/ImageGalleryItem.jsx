export const ImageGalleryItem = ({ webformatURL, tags, id, onClick }) => {
  return (
    <li className="ImageGalleryItem" id={id} onClick={onClick}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
