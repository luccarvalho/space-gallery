import styled from "styled-components";
import github from "/icones/github.svg";
import linkedin from "/icones/linkedin.svg";

const FooterEstilizado = styled.footer`
  background-color: #04244f;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-top: 30px;
  /* position: fixed; */
  bottom: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0px -2px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <div>
        <a
          href="https://github.com/luccarvalho"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do github" />
        </a>
        <a
          href="http://www.linkedin.com/in/lucasalexandrecarvalho"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do linkedin" />
        </a>
      </div>
      <p>&copy; Desenvolvido por Lucas Carvalho</p>
    </FooterEstilizado>
  );
};

export default Footer;
