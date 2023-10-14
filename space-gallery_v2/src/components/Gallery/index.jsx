import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Image from "./Image";

const ContainerGallery = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ContainerImage = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({
  fotos = [],
  setTag,
  aoFotoSelecionada,
  aoAlternarFavorito,
}) => {
  return (
    <>
      <Tags setTag={setTag} />
      <ContainerGallery>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ContainerImage>
            {fotos.map((foto) => (
              <Image
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ContainerImage>
        </FluidSection>
        <Popular />
      </ContainerGallery>
    </>
  );
};

export default Gallery;
