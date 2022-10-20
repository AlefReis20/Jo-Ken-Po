import styled from 'styled-components';

export const ModalStyled = styled.div`
  width: 80%;
  position: absolute;
  top: ${(props) => (props.open ? '5%' : '100%')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  padding: 16px;
  background-color: #ececec;
  border-radius: 12px;
  transition: 0.7s ease;
  z-index: 2;
  text-align: center;
`;
export const CloseModal = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 2%;
  top: 2%;

  background-color: #1a1a1a;
  border-radius: 50%;

  color: #ececec;

  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
`;
