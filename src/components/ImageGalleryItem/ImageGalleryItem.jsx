import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  
  render() {
    const { discription, smallImg, bigImg, id, showModal, isLoading, switchModal, srcSelectPhoto } = this.props;
    return (
      <>
        <Item id={id} onClick={switchModal}>
          <Image src={smallImg} alt={discription} />
        </Item>
        {showModal && srcSelectPhoto===smallImg && (
          <Modal
            bigImg={bigImg}
            discription={discription}    
            isLoading={isLoading}
            switchModal={switchModal}

          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  discription: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  switchModal: PropTypes.func.isRequired,
  srcSelectPhoto: PropTypes.string.isRequired
};
