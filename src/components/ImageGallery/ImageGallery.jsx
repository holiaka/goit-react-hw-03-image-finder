import PropTypes from 'prop-types';
import {Gallery} from './ImageGallery.styled'

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageColection }) => {
  return (
    <Gallery>
      {imageColection.map(({ id, disc, smallImg, bigImg }) => {
        console.log(id, disc, smallImg, bigImg)
        return (
          <ImageGalleryItem
            key={id}
            discription={disc}
            smallImg={smallImg}
            bigImg={bigImg}
          />
        )
      }
      )}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  imageColection: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
