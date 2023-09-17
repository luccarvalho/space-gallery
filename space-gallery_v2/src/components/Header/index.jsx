import styled from "styled-components";
import SearchField from "../SearchField";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="logo da Space Gallery" />
      <SearchField />
    </HeaderEstilizado>
  );
};

export default Header;
