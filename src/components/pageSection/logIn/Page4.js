"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
const Page4 = () => {

    const router=useRouter()
    const [user, setUser] = useState([
        {
            email: "",
            password: "",
        }
    ])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            console.log("Login User", user);

        } catch (error) {
            console.log("Login User Error", error);

        }

        setUser({
            email:"",
            password:"",
        })
    }
    return (
        <>
            <LoginPage>
                <Main onSubmit={submitHandler}>
                    <Heading>LOGIN</Heading>
                    <InputDiv>
                        <Input onChange={handleChange} value={user.email} name="email" type="text" placeholder="Enter your email" />
                        <Input onChange={handleChange} value={user.password} name="password" type="password" placeholder="Enter your password" />



                    </InputDiv>
                    <CheckBox>
                        <CheckInput type="checkbox" />
                        <Label>Remember me</Label>
                    </CheckBox>

                    <ButtonDiv>
                        <Button type="submit">LOGIN</Button>
                    </ButtonDiv>

                    <SignUpLink>
                        <Para>Not a Member?
                        </Para>
                        <Link onClick={()=>router.push('')}>SignUp Now</Link>
                    </SignUpLink>
                </Main>
            </LoginPage>
        </>
    );
};

export default Page4;

const LoginPage = styled.div`
background: linear-gradient(to right, #ff7e5f, #feb47b);
display: flex;
justify-content: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
height: 100vh;
`;

const Main = styled.form`
display: flex;
flex-direction: column;

background-color: whitesmoke;
margin-top: 80px;
margin-bottom: 40px;
  /* height: 500px; */
  width: 400px;
`;
const Heading = styled.h1`
margin-top: 40px;
text-align: center;
`;

const InputDiv = styled.div`
margin-top: 20px;
display: flex;
gap: 20px;
align-items: center;
flex-direction: column;
`;

const Input = styled.input`
border: none;
outline: none;
background-color: lightgrey;
padding-left: 8px;
height: 40px;
width: 70%;
`;

const Image = styled.img`

`;

const CheckBox = styled.div`
margin-top: 15px;
display: flex;
gap: 4px;
margin-left: 60px;


`;

const CheckInput = styled.input`
border: 1px solid #feb47b;
outline-color: #feb47b;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Label = styled.label`

`;
const ButtonDiv = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
`;
const Button = styled.button`
background: linear-gradient(to right, #ff7e5f, #feb47b);
color: white;
font-weight: bold;
border: none;
outline:none;
/* font-size: large; */
height: 40px;
width: 70%;
`;

const Para = styled.p`
margin-top: 10px;
text-align: center;
`;
const SignUpLink = styled.div`
display: flex;
justify-content: center;
gap: 5px;
margin-top: 10px;
`;
const Link = styled.a`
margin-top: 9px;
text-decoration: none;
color:#ff7e5f;
`;