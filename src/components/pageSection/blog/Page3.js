"use client"

import React from 'react'
import styled from 'styled-components'
const Page3 = () => {
    return (
        <>
            <Container>
                <Main>
                    <Heading>Blog Page</Heading>
                </Main>

            </Container>
        </>
    )
}

export default Page3

const Container = styled.div`
margin: 0;
padding: 0;
display: flex;
align-items: center;
background-color: aqua;

`;

const Main = styled.div`
height: 400px;
width:100%;
/* background: linear-gradient(to right, #dc2f02, #f9844a); */

`;

const Heading = styled.h1`
/* margin-top: 60px; */
background-color: antiquewhite;

color: white;
text-align: center;
`;

