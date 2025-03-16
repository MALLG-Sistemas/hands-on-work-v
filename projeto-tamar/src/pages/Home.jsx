import styled from "styled-components";
import Banner from "../components/Banner";

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <ContainerMain>
      <Banner
        image="/images/logo-mallg-sistemas.jpg"
        alt="Logo da Mallg Sistemas"
      />
    </ContainerMain>
  );
};

export default Home;
