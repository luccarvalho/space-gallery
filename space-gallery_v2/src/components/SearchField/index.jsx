import styled from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const SearchField = ({ setFiltro }) => {
  return (
    <ContainerEstilizado>
      <SearchEstilizado
        onChange={(evento) => {
          setFiltro(evento.target.value);
        }}
        type="text"
        placeholder="O que você procura?"
      />
      <SearchIcon src={search} alt="ícone de lupa de pesquisa" />
    </ContainerEstilizado>
  );
};

export default SearchField;
