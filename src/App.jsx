import { Component } from "react";

import { Searchbar } from "./components/Searchbar/Searchbar.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";

import "./App.css";

class App extends Component {
  state = {
    searchQuery: "",
  };

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}

export default App;
