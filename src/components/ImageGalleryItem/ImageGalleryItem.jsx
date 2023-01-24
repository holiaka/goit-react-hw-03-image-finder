import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {    
    showModal: false,
  };

  onClickPhoto = () => {    
    this.setState({     
      showModal: true,
    });   
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { discription, smallImg, bigImg, id } = this.props;
    return (
      <>
        <Item id={id} onClick={this.onClickPhoto}>
          <Image src={smallImg} alt={discription} />
        </Item>
        {this.state.showModal && (
          <Modal
            bigImg={bigImg}
            discription={discription}
            onCloseModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  discription: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
};
