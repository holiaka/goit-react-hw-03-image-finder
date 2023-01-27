import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
  render() {
    const { state, switchModal } = this.props;

    return (
      <Gallery>
        {state.photoArr.map(({ disc, smallImg, bigImg }, idx) => {
          return (
            <ImageGalleryItem onClick={switchModal}
              key={idx}
              id={idx}
              discription={disc}
              smallImg={smallImg}
              bigImg={bigImg}
              showModal={state.showModal}
              isLoading={state.isLoading}
              switchModal={switchModal}
              srcSelectPhoto={state.srcSelectPhoto}
            />
          )
        }
        )}
      </Gallery>
    );
  }
};

ImageGallery.propTypes = {
  state: PropTypes.object.isRequired,
  switchModal: PropTypes.func.isRequired
};
