import { Component } from "react";

import { Searchbar } from "./components/Searchbar/Searchbar.jsx";

import getImages from "./services/getImages.js";

import "./App.css";

class App extends Component {
  state = {};

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      getImages(this.state.searchQuery).then((resp) => {
        console.log(resp);
      });
    }
  }

  handleSearch = (searchQuery) => {
    console.log(searchQuery);
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
      </>
    );
  }
}

export default App;
