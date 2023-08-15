import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose = () => {} }) => {
  useEffect(() => {
    const handleEscapeClick = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapeClick);
    return () => {
      window.removeEventListener('keydown', handleEscapeClick);
    };
  }, [onClose]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>{children}</ModalBackdrop>,
    modalRoot
  );
};
