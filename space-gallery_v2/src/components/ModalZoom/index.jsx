import styled from "styled-components";
import Image from "../Gallery/Image";
import ButtonIcon from "../ButtonIcon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Image foto={foto} expandida={true} />
            <form method="dialog">
              <ButtonIcon formMethod="dialog">
                <img src="/icones/fechar.png" alt="Ícone de fechar" />
              </ButtonIcon>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
