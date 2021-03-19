import styled from 'styled-components'
/*import '../styles/PriceCard.css';*/

const PriceWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
 /* border: 2px solid yellow;*/
`;

const PriceButtonsWrapper = styled.div`
  width: 100%;
  height: 80px;
/*  border: 2px solid teal;*/
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const MonthlyPriceButton = styled.div`
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
`;

const MonthlyPriceButtonText = styled.div`
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

const YearlyPriceButton = styled.div`
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
`;

const YearlyPriceButtonText = styled.div`
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

const PriceCardWrapper = styled.div`
  width: 100%;
  height: 600px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const PriceCardContainer = styled.div`
  width: 350px;
  height: 600px;
  border: 2px solid blue;

`;

const PriceCardContainerFree = styled.div`
  width: 350px;
  height: 600px;
  border: 2px solid blue;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

`;

const FreeCardUpperTextWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;

const FreeCardUpperText = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  color: black;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.04em;
  /*color: #FFFFFF;*/
  margin: 0px;

`;

const LineBreakFreeCard = styled.hr`
  width: 100%;
  height: 0px;
  left: 115px;
  top: 52px;
  border: 0.5px solid rgba(0, 0, 0, 0.65);
  padding-bottom: 10px;
  margin: 0px;
`;

function PriceCard() {
    return (
        <PriceWrapper>

            {/*PRICE BUTTONS (MONTHLY & YEARLY) STARTS*/}
            <PriceButtonsWrapper>
                <MonthlyPriceButton>
                    <MonthlyPriceButtonText>
                        Monthly
                    </MonthlyPriceButtonText>
                </MonthlyPriceButton>
                <YearlyPriceButton>
                    <YearlyPriceButtonText>
                        Yearly
                    </YearlyPriceButtonText>
                </YearlyPriceButton>
            </PriceButtonsWrapper>
            {/*PRICE BUTTONS (MONTHLY & YEARLY) STARTS*/}

            <PriceCardWrapper>
                <div className="promos">
                    <div className="promo">
                        <div className="deal">
                            <span>Premium</span>
                            <span>This is really a good deal!</span>
                        </div>
                        <span className="price">$79</span>
                        <ul className="features">
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>And more...</li>
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                        </ul>
                        <button>Sign up</button>
                    </div>
                    <div className="promo scale">
                        <div className="deal">
                            <span>Plus</span>
                            <span>This is really a good deal!</span>
                        </div>
                        <span className="price">$89</span>
                        <ul className="features">
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>And more...</li>
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>Some great feature</li>
                            <li>Another super feature</li>

                        </ul>
                        <button>Sign up</button>
                    </div>
                    <div className="promo">
                        <div className="deal">
                            <span>Basic</span>
                            <span>Basic membership</span>
                        </div>
                        <span className="price">$69</span>
                        <ul className="features">
                            <li>Choose the one on the left</li>
                            <li>We need moneyy</li>
                            <li>And more...</li>
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                            <li>Some great feature</li>
                            <li>Another super feature</li>
                        </ul>
                        <button>Sign up</button>
                    </div>
                </div>
            </PriceCardWrapper>

        </PriceWrapper>
    )
}

export default PriceCard
