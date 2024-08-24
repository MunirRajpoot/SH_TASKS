"use client"

import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <FooterSec>
                <MainFooterDiv>
                    <ContentFooter>
                        <Heading>Lorem Ipsum</Heading>
                        <FooterPara>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.</FooterPara>
                    </ContentFooter>
                    <EmailSec>
                        <EmailDes>Lorem ipsum dolor, sit amet consectetuc lorem.</EmailDes>
                        <InputDiv>
                            <Input type='text' placeholder='Your Email' required />
                            <Button type='submit'>Subscribe</Button>
                        </InputDiv>
                    </EmailSec>
                    <LinkSec>
                        <HeadingLink>FOLLOW US</HeadingLink>
                        <Links>
                            <Link1>
                                <Image1 src='/Assets/Icons/instagram.svg' />
                            </Link1>
                            <Link2>
                                <Image2 src='/Assets/Icons/facebook.svg' />
                            </Link2>
                            <Link3>
                                <Image3 src='/Assets/Icons/twitter.svg' />
                            </Link3>
                        </Links>
                    </LinkSec>
                    <ContactSec>
                        <ContactHead>CALL US</ContactHead>
                        <Contact>+923123456678</Contact>
                    </ContactSec>
                </MainFooterDiv>
                <HorizontalLine />
                <CopyRightDiv>
                    <CopyRight>
                        @2024 Lorem. Lorem ipsum dolor, sit amet consectetuc lorem.
                    </CopyRight>
                    <PrivacyPolicy href='#'>Privacy Policy</PrivacyPolicy>
                    <TermsCondition href='#'>Terms And Condition</TermsCondition>
                </CopyRightDiv>
            </FooterSec>
        </>
    )
}

export default Footer;

const FooterSec = styled.footer`
background-color: #212529;
color: white;
padding: 20px;
width: 100%;
box-sizing: border-box;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

@media (max-width: 1024px) {
  height: auto;
  padding: 15px;
}

@media (max-width: 600px) {
  padding: 10px;
  text-align: center;
}

@media (max-width: 370px) {
  padding: 10px;
  width: 100%;
}
`;

const MainFooterDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;

@media (max-width: 1024px) {
  flex-direction: column;
  align-items: center;
}

@media (max-width: 370px) {
  width: 100%;
}
`;

const ContentFooter = styled.div`
margin-top: 30px;
text-align: center;
`;

const Heading = styled.h1`
font-weight: bold;
font-size: 24px;

@media (max-width: 600px) {
  font-size: 18px;
}
`;

const FooterPara = styled.p`
font-size: 16px;

@media (max-width: 600px) {
  font-size: 14px;
}
`;

const EmailSec = styled.div`
margin-top: 40px;
text-align: center;

@media (max-width: 600px) {
  margin-top: 20px;
}
`;

const EmailDes = styled.p`
font-size: 16px;

@media (max-width: 600px) {
  font-size: 14px;
}
`;

const InputDiv = styled.form`
margin-top: 10px;
display: flex;
flex-wrap: wrap;
gap: 5px;
justify-content: center;
`;

const Input = styled.input`
padding-left: 5px;
outline: none;
border:1px solid whitesmoke;
width: 200px;

@media (max-width: 600px) {
  width: 150px;
}
`;

const Button = styled.button`
width: 120px;
height: 35px;
background-color: #ffa200;
font-weight: bold;
color: white;
border: none;
cursor: pointer;

&:hover {
    background-color: #ff8c00;
}

@media (max-width: 600px) {
  width: 100px;
  height: 30px;
}
`;

const LinkSec = styled.div`
margin-top: 40px;
text-align: center;

@media (max-width: 600px) {
  margin-top: 20px;
}
`;

const Links = styled.div`
display: flex;
gap: 8px;
margin-top: 10px;
justify-content: center;
`;

const HeadingLink = styled.h5`
font-size: 18px;

@media (max-width: 600px) {
  font-size: 16px;
}
`;

const Link1 = styled.div`
`;

const Image1 = styled.img`
height: 25px;
width: 25px;
filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(108%) contrast(101%);
cursor: pointer;    
`;

const Link2 = styled.div`
`;

const Image2 = styled.img`
height: 25px;
width: 25px;
filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(108%) contrast(101%);
cursor: pointer;
`;

const Link3 = styled.div`
`;

const Image3 = styled.img`
height: 25px;
width: 25px;
filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(108%) contrast(101%);
cursor: pointer;
`;

const ContactSec = styled.div`
margin-top: 40px;
text-align: center;

@media (max-width: 600px) {
  margin-top: 20px;
}
`;

const ContactHead = styled.h5`
font-size: 18px;

@media (max-width: 600px) {
  font-size: 16px;
}
`;

const Contact = styled.p`
margin-top: 6px;
font-size: 16px;

@media (max-width: 600px) {
  font-size: 14px;
}
`;

const HorizontalLine = styled.hr`
margin-top: 30px;

@media (max-width: 600px) {
  margin-top: 20px;
}
`;

const CopyRightDiv = styled.div`
margin-top: 8px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
text-align: center;
width: 100%;

@media (max-width: 600px) {
  flex-direction: column;
}
`;

const CopyRight = styled.p`
font-size: 14px;

@media (max-width: 600px) {
  font-size: 12px;
}
`;

const TermsCondition = styled.a`
color: white;
text-decoration: none;
font-size: 14px;

@media (max-width: 600px) {
  font-size: 12px;
}
`;

const PrivacyPolicy = styled.a`
color: white;
text-decoration: none;
font-size: 14px;

@media (max-width: 600px) {
  font-size: 12px;
}
`;
