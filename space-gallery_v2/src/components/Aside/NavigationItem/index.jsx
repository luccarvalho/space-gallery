import styled from "styled-components";

const ItemListEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#7b78e5" : "#d9d9d9")};
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavigationItem = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListEstilizado>
  );
};

export default NavigationItem;
