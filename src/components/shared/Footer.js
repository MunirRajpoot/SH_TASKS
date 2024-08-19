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
                            <Input type='text' placeholder='Your Email' />
                            <Button>Subscribe</Button>
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
                        @2024Lorem. Lorem ipsum dolor, sit amet consectetuc lorem.
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
/* margin-top: 30px; */
background-color: dodgerblue;
color: aliceblue;
height: 220px;
`;
const MainFooterDiv = styled.div`
/* margin-top: 20px; */
display: flex;
flex-wrap: wrap;
justify-content:space-around;
`;
const ContentFooter = styled.div`
margin-top: 30px;

/* margin-left: 30px; */
`;
const Heading = styled.h1`
font-weight: bold;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const FooterPara = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`;
const EmailSec = styled.div`
margin-top: 80px;
`;
const EmailDes = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const InputDiv = styled.div`
margin-top: 10px;
display: flex;
flex-wrap: wrap;
gap: 5px;
`;
const Input = styled.input`
padding-left: 5px;
outline: none;
border:none ;
width: 200px;
`;
const Button = styled.button`
width: 120px;
height: 35px;
background-color: coral;
font-weight: bold;
color: white;
border: none;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const LinkSec = styled.div`
margin-top: 83px;

`;
const Links = styled.div`
display: flex;
gap: 8px;
margin-top: 10px;
`;
const HeadingLink = styled.h5`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Link1 = styled.div`

`;
const Image1 = styled.img`
height: 25px;
width: 25px;
`;
const Link2 = styled.div`

`;
const Image2 = styled.img`
height: 25px;
width: 25px;
`;
const Link3 = styled.div`

`;
const Image3 = styled.img`
height: 25px;
width: 25px;
`;

const ContactSec = styled.div`
margin-top: 83px;
`;

const ContactHead = styled.h5`

`;
const Contact = styled.p`
margin-top: 6px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const HorizontalLine = styled.hr`
margin-top: 30px;
`;

const CopyRightDiv = styled.div`
margin-top: 8px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;


const CopyRight = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const TermsCondition = styled.a`
color: white;
text-decoration: none;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const PrivacyPolicy = styled.a`
color: white;
text-decoration: none;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;