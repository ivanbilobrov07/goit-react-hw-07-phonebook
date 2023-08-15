import { Modal } from 'components/Modal';
import { ModalContent } from './FormModal.styled';

export const FormModal = ({ onClose, children }) => {
  return (
    <Modal onClose={onClose}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};
