import React from 'react';
import classes from './Modal.module.css';

function Modal({children, modal, setModal}) {

  const modalClasses = [classes.Modal]
  if(modal) {
    modalClasses.push(classes.active)
  }

  return ( 
    <div className={[ classes.active].join(' ')}>
        <div className={classes.ModalContent}>
            {children}
        </div>
    </div>
   );
}

export default Modal;