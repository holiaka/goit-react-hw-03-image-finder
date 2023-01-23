import PropTypes from 'prop-types';

export const ImageGalleryItem = ({discription, smallImg, bigImg}) => {
    <li>{bigImg}
        <img src={smallImg} alt={discription} />
    </li>
}

ImageGalleryItem.propTypes = {
    discription: PropTypes.string.isRequired,
    smallImg: PropTypes.string.isRequired,
    bigImg: PropTypes.string.isRequired,
}