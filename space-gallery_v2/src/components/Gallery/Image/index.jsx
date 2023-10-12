import styled from "styled-components";
import ButtonIcon from "../../ButtonIcon";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const favoriteIcon = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.id}></img>
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Footer>
          <h4>{foto.fonte}</h4>
          <ButtonIcon onClick={() => aoAlternarFavorito(foto)}>
            <img src={favoriteIcon} alt="Ícone de favorito" />
          </ButtonIcon>
          {!expandida && (
            <ButtonIcon
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.png" alt="Ícone de expandir" />
            </ButtonIcon>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};
export default Image;
