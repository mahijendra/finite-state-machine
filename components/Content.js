import styled from 'styled-components'

const ContentWrapper = styled.div`
  border: 2px solid green;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const ContentUpDiv = styled.div`
  height: 300px;
  /*border: 2px solid black;*/
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const ContentHeading = styled.div`
  height: 100px;
  width: 400px;
  /* background: teal;*/
  margin-top: 20px;
`;

const ContentHeadingText = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: Bold;
  color: black;
  font-size: 35px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;
`;

const ContentDescription = styled.div`
  width: 100%;
  height: 150px;

`;

const ContentDescriptionText = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  color: black;
  font-size: 20px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;
`;


const ContentBottomDiv = styled.div`
  width: 100%;
  height: 200px;
  /* border: 2px solid blue;*/
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

`;

const PriceTitleDiv = styled.div`
  width: 150px;
  height: 50px;
  /*background: #0070f3;*/
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;

const PriceTitleText = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: Bold;
  color: black;
  font-size: 20px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;
`;

const PriceDescriptionDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;

`;

const PriceDescriptionText = styled.div`

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  color: black;
  font-size: 20px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;
`;


function Content() {
    return (
        <ContentWrapper>

            {/*CONTENT WRAPPER STARTS*/}
            <ContentUpDiv>
                <ContentHeading>
                    <ContentHeadingText>
                        Unlock the power of programmatic videos
                    </ContentHeadingText>
                </ContentHeading>

                <ContentDescription>
                    <ContentDescriptionText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                        was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </ContentDescriptionText>
                </ContentDescription>
            </ContentUpDiv>

            {/*CONTENT WRAPPER ENDS*/}

            {/*PRICE WRAPPER STARTS*/}

            <ContentBottomDiv>
                <PriceTitleDiv>
                    <PriceTitleText>
                        PRICING
                    </PriceTitleText>
                </PriceTitleDiv>

                <PriceDescriptionDiv>
                    <PriceDescriptionText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </PriceDescriptionText>
                </PriceDescriptionDiv>

            </ContentBottomDiv>
            {/*PRICE WRAPPER ENDS*/}
        </ContentWrapper>
    )
}

export default Content
