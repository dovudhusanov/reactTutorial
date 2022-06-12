import React from 'react';
import classes from './Modal.module.css';

function Modal({children, modal, setModal}) {

  const modalClasses = [classes.Modal]
  if(modal) {
    modalClasses.push(classes.active)
  }

  return ( 
    <div
        className={modalClasses.join(' ')}
        onClick={() => setModal(false)}
    >
        <div
            className={classes.ModalContent}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>
    </div>
   );
}

export default Modal;