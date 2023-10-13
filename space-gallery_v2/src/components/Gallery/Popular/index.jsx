import styled from "styled-components";
import Title from "../../Title";
import fotos from "./fotos-populares.json";

const PhotoColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 20px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Popular = () => {
  return (
    <section>
      <Title $alinhamento="center">Populares</Title>
      <PhotoColumn>
        {fotos.map((foto) => (
          <Image key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </PhotoColumn>
      <Button>Ver mais</Button>
    </section>
  );
};

export default Popular;
