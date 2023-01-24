import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
    state = {
        photoIdx: null,
        showModal: false
  }

  onClickPhoto = (evt) => {
    const { id } = evt.currentTarget;
      this.setState({
          photoIdx: id,
          showModal: true
      });
    console.log(this.state);
  }
    
    componentDidUpdate(_, prevState) { 

    }
    
  render() {
    const { discription, smallImg, bigImg, id} =
      this.props;
    return (
      <>
        <Item id={id} onClick={this.onClickPhoto}>
          <Image
            src={smallImg}
            alt={discription}            
          />
        </Item>       
            {this.state.showModal===id && <Modal bigImg={bigImg} discription={discription} />}        
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  discription: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
};
