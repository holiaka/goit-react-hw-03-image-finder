import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ReactComponent as ReactSVG2 } from '../../image/svg/circle_close_icon.svg';
import { ModalOverlay, ImageBox, ModalButton, ModalImg } from './Modal.style';

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

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);    
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  render() {
    const { bigImg, switchModal } = this.props;

    return createPortal(
      <>
        <ModalOverlay onClick={this.handleBackdrop}>
          <ModalButton type="button" onClick={switchModal}>
            <ReactSVG2 width={50} height={50} />
          </ModalButton>
          <ImageBox>
            <ModalImg
              onerror="src='../../image/no_internet.webp'"
              src={bigImg}
              alt="There should have been a big picture here!!!"
            />
          </ImageBox>
        </ModalOverlay>
      </>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  switchModal: PropTypes.func.isRequired  
}