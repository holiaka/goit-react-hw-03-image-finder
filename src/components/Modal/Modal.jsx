import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as ReactSVG2 } from '../../image/svg/circle_close_icon.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ModalOverlay, ImageBox, ModalButton, ModalImg } from './Modal.style';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  state = {
    modalSppiner: false,
  };

  handleEsc = () => {
    this.props.onCloseModal();
  };

  handleBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onCloseModal();
    }
  };

  testImage = (URL) =>{
    console.log(URL)
    let tester=new Image();
    tester.onerror=this.imageNotFound;
    tester.src=URL;
    return URL;
}

  imageNotFound = () => {
    this.props.onCloseModal();
    this.setState({ modalSppiner: false });    
     Notify.failure('That image was not found!!! Probably problems with the Internet connection!!!');
}

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
    this.setState({ modalSppiner: true });
    window.setTimeout(() => this.setState({ modalSppiner: false }), 1000);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  render() {
    const { bigImg, discription, onCloseModal } = this.props;

    return createPortal(
      <>
        <ModalOverlay onClick={this.handleBackdrop}>
          <ModalButton type="button" onClick={onCloseModal}>
            <ReactSVG2 width={50} height={50} />
          </ModalButton>
          <ImageBox>
            <ModalImg onerror="src='../../image/no_internet.webp'" src={this.testImage(bigImg)} alt={ discription } />
          </ImageBox>
        </ModalOverlay>
        {this.state.modalSppiner && <Loader />}
      </>,
      modalRoot
    );
  }
}
