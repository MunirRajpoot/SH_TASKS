"use client";
import React from 'react';
import styled from 'styled-components';

const Page = () => {
  return (
    <>
      <Container>
        <Heading>
          Find the video messaging plan that's right for you.
        </Heading>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.
        </Paragraph>
        <CardDiv>
          <Cards>
            <Icon1 src='/Assets/Icons/handshake.svg' />
            <HeadingCards>
              Lorem Ipsum
            </HeadingCards>
            <CardPara>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe qu
            </CardPara>
            <Price>&49</Price>
            <CardButton>Buy Now</CardButton>
          </Cards>

          <Cards>
            <Icon1 src='/Assets/Icons/users-alt.svg' />
            <HeadingCards>
              Lorem Ipsum
            </HeadingCards>
            <CardPara>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe qu
            </CardPara>
            <Price>&29</Price>
            <CardButton2>Buy Now</CardButton2>
          </Cards>

          <Cards>
            <Icon1 src='/Assets/Icons/building.svg' />
            <HeadingCards>
              Lorem Ipsum
            </HeadingCards>
            <CardPara>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe qu
            </CardPara>
            <CardButton3>Contact Sales</CardButton3>
          </Cards>
        </CardDiv>
      </Container>
    </>
  );
};

export default Page;

const Container = styled.div`
  height: 100vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const CardDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px; /* Add some gap between cards for better spacing */

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: aliceblue;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 10px auto; /* Center the cards and add some margin */

  @media (max-width: 768px) {
    width: 250px;
    height: 270px;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: auto;
    padding: 20px;
  }
`;

const Icon1 = styled.img`
  margin-top: 20px;
  height: 50px;
  width: 50px;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;

const HeadingCards = styled.h2`
  margin-top: 8px;
`;

const CardPara = styled.p`
  margin-top: 8px;
  text-align: center;
  color: black;
  font-size: small;
`;

const Price = styled.h1`
  margin-top: 8px;
`;

const CardButton = styled.button`
  margin-top: 8px;
  height: 35px;
  width: 130px;
  background-color: coral;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardButton2 = styled(CardButton)`
  background-color: deepskyblue;
`;

const CardButton3 = styled(CardButton)`
  background-color: darkslategrey;
  margin-top: 10px;
`;

const Heading = styled.h3`
  margin-top: 100px;
  color: #ffa200;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-top: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
