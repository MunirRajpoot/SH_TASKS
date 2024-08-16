"use client"

import React from 'react'
import styled from 'styled-components'
const Page3 = () => {
    return (
        <>
            <Container>
                <Main>
                    <Heading>
                        CLEAN BLOG
                    </Heading>
                    <Para>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.
                    </Para>
                </Main>
                <Main2>
                    <Content1>
                        <ContentHeading>Man must explore, and this is exploration at its greatest</ContentHeading>
                        <Para1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.</Para1>
                        <Para2>Posted by Start Bootstrap on September 24, 2023</Para2>
                    </Content1>


                    <Content2>
                        <ContentHeading>Man must explore, and this is exploration at its greatest</ContentHeading>
                        <Para1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.</Para1>
                        <Para2>Posted by Start Bootstrap on September 24, 2023</Para2>
                    </Content2>

                    <Content3>
                        <ContentHeading>Man must explore, and this is exploration at its greatest</ContentHeading>
                        <Para1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.</Para1>
                        <Para2>Posted by Start Bootstrap on September 24, 2023</Para2>
                    </Content3>

                    <Content4>
                        <ContentHeading>Man must explore, and this is exploration at its greatest</ContentHeading>
                        <Para1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.</Para1>
                        <Para2>Posted by Start Bootstrap on September 24, 2023</Para2>
                    </Content4>

                    <Content5>
                        <ContentHeading>Man must explore, and this is exploration at its greatest</ContentHeading>
                        <Para1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime saepe quo.</Para1>
                        <Para2>Posted by Start Bootstrap on September 24, 2023</Para2>
                    </Content5>
                </Main2>

                <HorizontalLine/>
            </Container>
        </>
    )
}

export default Page3

const Container = styled.div`
/* background-color: aqua; */
`;

const Main = styled.div`
margin: 0;
height: 300px;
/* background-color: aliceblue; */
text-align: center;
`;

const Heading = styled.h1`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Para = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Main2 = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Content1 = styled.div`
text-align: center;
`;
const Content2 = styled.div`
margin-top: 30px;
text-align: center;
`;
const Content3 = styled.div`
margin-top: 30px;
text-align: center;
`;
const Content4 = styled.div`
margin-top: 30px;
text-align: center;
`;
const Content5 = styled.div`
margin-top: 30px;
text-align: center;
`;
const ContentHeading = styled.h1`
font-weight: bolder;
`;
const Para1 = styled.p`
font-size: large;
`;
const Para2 = styled.p`

`;

const HorizontalLine=styled.hr`
margin-top: 40px;
`;