import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { alt, largeImageURL } = this.props.children;

    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
