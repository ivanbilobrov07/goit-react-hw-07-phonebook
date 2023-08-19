import { Modal } from 'components/Modal';
import {
  Button,
  ButtonWrapper,
  DeleteButton,
  Text,
  Wrapper,
} from './DeleteModal.styled';

export const DeleteModal = ({ toDeleteName, onClose, agreeFunc }) => {
  // const dispatch = useDispatch();

  // const agreeDeleting = () => {
  //   dispatch(removeContact(toDeleteItem.id));
  // };

  return (
    <Modal onClose={onClose}>
      <Wrapper>
        <Text>Do you sure to delete contact "{toDeleteName}" </Text>
        <ButtonWrapper>
          <Button onClick={onClose} type="button">
            Cancel
          </Button>
          <DeleteButton onClick={agreeFunc} type="button">
            Delete
          </DeleteButton>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
};
