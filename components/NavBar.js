import styled from 'styled-components'


const NavbarWrapperDiv = styled.div`
  width: 100%;
  height: 80px;
 border: 2px solid teal;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 500px;
  height: 80px;
  /*background: #0070f3;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoParentDiv = styled.div`
  width: 100px;
  height: 70px;
  /*background: green;*/
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SvgWrapper = styled.div`
  width: 100px;
  height: 70px;
  /*background: black;*/
  display: flex;
  align-items: center;
  justify-content: center;

`;

const LogoText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 19px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;
 
`;


const NavbarButtonWrapper = styled.div`
  /*background: lightslategray;*/
  display: flex;
  align-items: center;
  height: 70px;
  width: 150px;
  justify-content: center;
`;

const ButtonParent = styled.div`
  width: 550px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /*background: aqua;*/
`;

const GetStartedButtonDiv = styled.div`
  width: 130px;
  height: 50px;
  background: rgb(111, 68, 136);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border: none;
  outline: none;
  overflow: auto;
  cursor: pointer;
`

const GetStartedText = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  color: white;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;
`;

function NavBar() {
    return (
        <NavbarWrapperDiv>
            <LogoWrapper>
                <SvgWrapper>LOGO</SvgWrapper>
                <LogoParentDiv>
                    <LogoText>
                       INSTATE
                    </LogoText>
                </LogoParentDiv>
            </LogoWrapper>


            {/* GET STARTED BUTTON*/}
            <ButtonParent>
                <NavbarButtonWrapper>
                    <GetStartedButtonDiv>
                        <GetStartedText>Get Started</GetStartedText>
                    </GetStartedButtonDiv>
                </NavbarButtonWrapper>
            </ButtonParent>
        </NavbarWrapperDiv>
    )
}

export default NavBar
