import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({discription, smallImg, bigImg}) => {
    return(<Item>
        <Image src={smallImg} alt={discription} />
    </Item>)
}

ImageGalleryItem.propTypes = {
    discription: PropTypes.string.isRequired,
    smallImg: PropTypes.string.isRequired,
    bigImg: PropTypes.string.isRequired,
}