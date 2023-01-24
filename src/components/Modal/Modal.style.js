import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
`;

export const ModalButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
`;

export const ImageBox = styled.div`
  width: calc(100% - 150px);
  height: calc(100% - 70px);
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
