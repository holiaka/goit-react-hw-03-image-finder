import PropTypes from 'prop-types';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ReactComponent as ReactSVG } from '../../image/svg/icons8-search.svg';
import {
  SearchbarWrapper,
  SearchbarForm,
  SearchbarButton,
  SearchbarInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  
  queryProcessing = evt => {
    const { onSubmit, state } = this.props;

    evt.preventDefault();
    const { value } = evt.target.elements.query;
    const transfValue = value.trim();

    if (transfValue === '') {
      Notify.warning('Please enter a request!!');
      onSubmit({
        photoArr: [],
        btnActive: false,
      });
    } else if (state.query !== transfValue) {
      onSubmit({
        query: transfValue,
        photoArr: [],
        page: 1,
        totalPages: null,
      });
    }
    evt.target.elements.query.value = '';
  };

  render() {
    return (
      <SearchbarWrapper>
        <SearchbarForm onSubmit={this.queryProcessing}>
          <SearchbarButton type="submit">
            <ReactSVG width={25} height={25} />
          </SearchbarButton>
          <SearchbarInput
            type="text"
            name="query"
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
          />
        </SearchbarForm>
      </SearchbarWrapper>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
