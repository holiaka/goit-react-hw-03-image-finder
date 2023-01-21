import PropTypes from 'prop-types';
import {ReactComponent as ReactSVG } from '../../image/svg/find-glass-magnifier-search-svgrepo-com.svg';
import {SearchbarWrapper, SearchbarForm, SearchbarButton, SearchbarInput} from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchbarForm onSubmit={onSubmit}>
        <SearchbarButton type="submit">
          <ReactSVG width={40} height={40} />
        </SearchbarButton>
        <SearchbarInput          
          type="text"
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
