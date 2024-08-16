"use client"

import React from 'react'
import styled from 'styled-components'


const Page = () => {

    return (
        <>
            <Container>
                <TextSec>
                    <Heading>
                        The best way
                        <Br />
                        to showcase
                        <Br /> your project
                    </Heading>
                    <Para>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.
                    </Para>

                    <ButtonSec>
                        <Button1>
                            Try For Free
                        </Button1>
                        <Button2>
                            See how it works
                        </Button2>

                    </ButtonSec>
                </TextSec>
                <Image1 src='/Assets/Image1.svg' />


            </Container>

        </>
    )
}

export default Page

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;


`;
const TextSec = styled.div`
margin-left: 70px;
margin-top: 110px;



`;
const Heading = styled.h1`
font-weight: bolder;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Br = styled.br`
`;
const Para = styled.p`
margin-top: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`;
const Image1 = styled.img`
    width: 450px;
    height: 450px;
`;

const ButtonSec = styled.div`
margin-top: 12px;
display: flex;
gap: 15px;
`;
const Button1 = styled.button`
background-color: dodgerblue;
color:white;
height: 40px;
width: 120px;
font-weight: bold;
border: none;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

&:hover {
    background-color: #7aa9dc;
  }
`;
const Button2 = styled.button`
height: 40px;
width: 135px;
background-color: transparent;
font-weight: bold;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
border: 0.5px solid black;
&:hover {
    background-color: dodgerblue;
     color: white;
     
  }
`;


