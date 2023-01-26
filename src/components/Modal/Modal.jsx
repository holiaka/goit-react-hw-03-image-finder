import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ReactComponent as ReactSVG2 } from '../../image/svg/circle_close_icon.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ModalOverlay, ImageBox, ModalButton, ModalImg } from './Modal.style';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {

  handleEsc = (evt) => {
    this.props.switchModal(evt);
  };

  handleBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.switchModal(evt);
    }
  };

  testImage = URL => {
    let tester = new Image();
    tester.onerror = this.imageNotFound;
    tester.src = URL;
    return URL;
  };

  imageNotFound = () => {
    this.props.switchModal();    
    Notify.failure(
      'That image was not found!!! Probably problems with the Internet connection!!!'
    );
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);    
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  render() {
    const { bigImg, discription, isLoading, switchModal } = this.props;

    return createPortal(
      <>
        <ModalOverlay onClick={this.handleBackdrop}>
          <ModalButton type="button" onClick={switchModal}>
            <ReactSVG2 width={50} height={50} />
          </ModalButton>
          <ImageBox>
            <ModalImg
              onerror="src='../../image/no_internet.webp'"
              src={this.testImage(bigImg)}
              alt={discription}
            />
          </ImageBox>
        </ModalOverlay>
        {isLoading && <Loader />}
      </>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  switchModal: PropTypes.func.isRequired  
}