import styled from 'styled-components'

const FaqWrapper = styled.div`
  width: 100%;
  height: 800px;
  border: 2px solid blue;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: column;
`;

const FaqQuestionDiv = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid violet;
`;

const FaqAnswerDiv = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid violet;
`;

const QaContainer = styled.div`
  width: 100%;
  height: 150px;

`;

function Faq() {
    return (
        <FaqWrapper>
            <QaContainer>
                <FaqQuestionDiv>
                    What does prioritized support mean?
                </FaqQuestionDiv>
                <FaqAnswerDiv>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </FaqAnswerDiv>
            </QaContainer>

            <QaContainer>
                <FaqQuestionDiv>
                    What does prioritized support mean?
                </FaqQuestionDiv>
                <FaqAnswerDiv>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </FaqAnswerDiv>
            </QaContainer>

            <QaContainer>
                <FaqQuestionDiv>
                    What does prioritized support mean?
                </FaqQuestionDiv>
                <FaqAnswerDiv>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </FaqAnswerDiv>
            </QaContainer>

            <QaContainer>
                <FaqQuestionDiv>
                    What does prioritized support mean?
                </FaqQuestionDiv>
                <FaqAnswerDiv>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </FaqAnswerDiv>
            </QaContainer>

            <QaContainer>
                <FaqQuestionDiv>
                    What does prioritized support mean?
                </FaqQuestionDiv>
                <FaqAnswerDiv>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </FaqAnswerDiv>
            </QaContainer>
        </FaqWrapper>
    )
}

export default Faq
