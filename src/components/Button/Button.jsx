import PropTypes from 'prop-types';
import { ClickButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ClickButton type="button" onClick={onClick}>
      Load more
    </ClickButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
