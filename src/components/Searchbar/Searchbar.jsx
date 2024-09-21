// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. Создает DOM-элемент следующей структуры.

import { Component } from "react";

export class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.handleResetForm();
  };

  handleResetForm = () => {
    this.setState({ searchQuery: "" });
  };

  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchQuery: value,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchQuery}
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
