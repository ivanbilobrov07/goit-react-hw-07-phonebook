import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 150px;
  max-width: 300px;
  width: 100%;
  padding: 12px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Text = styled.h3`
  max-width: 200px;
  margin: 0 auto 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const Button = styled.button`
  display: block;
  padding: 8px 20px;
  background-color: gray;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  background-color: ${props => props.theme.colors.success};
`;
