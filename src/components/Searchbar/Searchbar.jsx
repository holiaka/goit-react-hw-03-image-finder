import PropTypes from 'prop-types';
import {ReactComponent as ReactSVG } from '../../image/svg/icons8-search.svg';
import {SearchbarWrapper, SearchbarForm, SearchbarButton, SearchbarInput} from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchbarForm onSubmit={onSubmit}>
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
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
