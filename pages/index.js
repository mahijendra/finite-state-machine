
import NavBar from "../components/NavBar";
import styled from 'styled-components'
import Content from "../components/Content";
import PriceCard from "../components/PriceCard";
import Faq from "../components/Faq";

const Wrapper = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  
`;

const SidebarLeftDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  border: 2px solid teal;
`;

const SidebarRightDiv = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border: 2px solid teal;
`;

const MainContainerDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  border: 2px solid darkblue;
  margin-top: 50px ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  overflow: hidden;
  scroll-behavior: smooth;
  
`;


export default function Home() {
    return (
        <Wrapper>
            <SidebarLeftDiv></SidebarLeftDiv>
            <MainContainerDiv>
                <NavBar/>
                <Content />
                <PriceCard />
                <Faq />
            </MainContainerDiv>
            <SidebarRightDiv></SidebarRightDiv>

        </Wrapper>
    )
}
