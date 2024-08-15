"use client"
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import styled from 'styled-components'
const Page = () => {

    return (
        <>

            {/* <Container>
                <InputDiv>
                    <Label>
                        Enter Name:
                    </Label>
                    <Input type='text' placeholder='Enter User Name'>
                    </Input>
                    <Label>
                        Enter Email:
                    </Label>
                    <Input type='email' placeholder='Enter Email'>
                    </Input>
                    <Label>
                        Enter Password:
                    </Label>
                    <Input type='password' placeholder='Enter Password'>
                    </Input>
                </InputDiv>
            </Container> */}

        </>
    )
}

export default Page

const Container = styled.div`
height: 400px;
background-color: aliceblue;
display: flex;
flex-direction: column;
width: 500px;
`;

const InputDiv = styled.div`
display: flex;
flex-direction: column;

`;

const Label = styled.label`

font-weight: bold;
`;
const Input = styled.input`
height: 40px;
`;
