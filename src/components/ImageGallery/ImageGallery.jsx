import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
  render(){
    const{imageColection} = this.props;

    return (
    <Gallery>
      {imageColection.map(({disc, smallImg, bigImg }, idx) => {        
        return (
          <ImageGalleryItem
            key={idx}
            id={idx}
            discription={disc}
            smallImg={smallImg}
            bigImg={bigImg}
          />
        )
      }
      )}
    </Gallery>
  );
  }
  
};

ImageGallery.propTypes = {
  imageColection: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};
