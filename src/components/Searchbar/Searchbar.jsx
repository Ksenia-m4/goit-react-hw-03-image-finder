import { Component } from "react";
import Notiflix from "notiflix";
import PropTypes from "prop-types";

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./Searchbar.styled";

export class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleSubmit = (e) => {
    const { searchQuery } = this.state;
    e.preventDefault();

    if (searchQuery === "") {
      Notiflix.Notify.failure("Please enter a search query.");
      return;
    }

    this.props.onSubmit(searchQuery);

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
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchQuery}
          />

          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
