import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';


const modalRoot = document.getElementById('modal-root');
console.log(modalRoot)

export class Modal extends Component {
  

render() {
  const { bigImg, discription } = this.props;

    return createPortal(<div>
      <div>
        <img src={bigImg} alt={discription} />
      </div>
    </div>, modalRoot)
  }
}


    


