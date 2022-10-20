import { Flex, Spacer, Typography } from "../../styles/globalStyle";
import { CloseModal, ModalStyled } from "./styles";

export const Modal = ({ open, handleOpenModal, titleModal, messageModal }) => {
  return (
    <ModalStyled open={open}>
      <Flex direction="column">
        <Typography primary>{titleModal}</Typography>
        <Spacer margin="8px" />
        <CloseModal onClick={() => handleOpenModal()}>X</CloseModal>
        <Typography primary>{messageModal}</Typography>
      </Flex>
    </ModalStyled>
  );
};
