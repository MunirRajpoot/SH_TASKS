"use client";

import React from "react";
import styled from "styled-components";

const Page = () => {
  return (
    <>
      <Container>
        <TextSec>
          <Heading>
            The best way

            to showcase
            <Br /> your project
          </Heading>
          <Para>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            saepe quo.
          </Para>

          <ButtonSec>
            <Button1>Try For Free</Button1>
            <Button2>See how it works</Button2>
          </ButtonSec>
        </TextSec>
        <Image1 src="/Assets/Image1.svg" />
      </Container>
    </>
  );
};

export default Page;

const Container = styled.div`
  height: 100vh;
  display: flex;
  /* flex-wrap: wrap; */
  padding: 3rem;
  justify-content: space-between;
  align-items: center;

  @media  (max-width: 1024px) {
    height: auto;
    /* flex-wrap: wrap; */
  }
  @media  (max-width: 750px) {
    /* height: auto; */
    flex-wrap: wrap;
  }



  
`;

const TextSec = styled.div`
  /* margin-left: 70px; */
  /* margin-top: 20px; */

  @media (min-width: 600px) and (max-width: 1024px) {
    margin-left: 0;
    margin-top: 40px;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-weight: bolder;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Br = styled.br`
@media (max-width:800px) {
    display: none
}

`;

const Para = styled.p`
  margin-top: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  @media (min-width: 600px) and (max-width: 1024px) {
    margin-top: 10px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    margin-top: 8px;
    font-size: 14px;
  }
`;

const Image1 = styled.img`
  width: 450px;
  height: 450px;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 350px;
    height: 350px;
    margin-top: 20px;
  }

  @media (max-width: 750px) {
    width: 320px;
    height: 320px;
    margin-top: 10px;
    margin: 10px auto 0;
}
`;

const ButtonSec = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 15px;

  @media (min-width: 499px) and (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
  }

  @media (max-width: 500px) {
   
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  }
`;

const Button1 = styled.button`
  background-color: #ffa200;
  cursor: pointer;
  color: white;
  height: 40px;
  width: 120px;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  &:hover,
  &:focus {
    background-color: #ff9500;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
`;

const Button2 = styled.button`
  height: 40px;
  width: 135px;
  background-color: transparent;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: 0.5px solid black;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    color: #ffa200;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
`;
