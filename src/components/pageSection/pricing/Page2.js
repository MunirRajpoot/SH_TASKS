"use client"
import React from 'react'
import styled from 'styled-components'
const page = () => {
  return (
    <>
      {/* Pricing */}
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
  )
}

export default page;


const Container = styled.div`

`;
const CardDiv = styled.div`
margin-top: 12px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;
const Heading = styled.h3`
margin-top: 20px;
color: cornflowerblue;
text-align: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Paragraph = styled.p`
text-align: center;
margin-top: 12px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px;
height: 300px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
background-color: aliceblue;

`;
const Icon1 = styled.img`
margin-top: 20px;
height: 50px;
width: 50px;
`;
const HeadingCards = styled.h2`
margin-top: 8px;
`;
const CardPara = styled.p`
margin-top: 8px;
text-align: center;
color: black;
font-size: small;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Price = styled.h1`
margin-top: 8px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const CardButton = styled.button`
margin-top: 8px;
height: 35px;
width: 130px;
background-color: coral;
outline: none;
border: none;
color:white;
font-weight: bold;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const CardButton2 = styled.button`
margin-top: 8px;
height: 35px;
width: 130px;
background-color: deepskyblue;
outline: none;
border: none;
color:white;
font-weight: bold;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const CardButton3 = styled.button`
margin-top: 10px;
height: 35px;
width: 130px;
background-color: darkslategrey;
outline: none;
border: none;
color:white;
font-weight: bold;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

