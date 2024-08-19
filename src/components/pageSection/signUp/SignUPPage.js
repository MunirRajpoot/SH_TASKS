"use client";
import ROUTES from "@/utils/ROUTES";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import styled from "styled-components";

const SignUPPage = () => {

  const router=useRouter()
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });





  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  // Submit handler function
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      console.log("Submitted Data:", users); // Log the form data here
    } catch (error) {
      console.log("Error:", error);
    }

    setUsers({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <SignUpPage>
        <Main onSubmit={submitHandler}>
          <Heading>SIGNUP</Heading>
          <InputDiv>
            <Input
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              value={users.firstName}
              name="firstName"
            />
            <Input
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              value={users.lastName}
              name="lastName"
            />
            <Input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              value={users.email}
              name="email"
            />
            <Input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              value={users.password}
              name="password"
            />
          </InputDiv>

          <ButtonDiv>

            <Button type="submit">SIGNUP</Button>
          </ButtonDiv>

          <SignUpLink>
            <Para>Already a Member?</Para>
            <Link onClick={router.push(ROUTES.LOGIN_USER)}>LogIn</Link>
          </SignUpLink>
        </Main>
      </SignUpPage>
    </>
  );
};

export default SignUPPage;

const SignUpPage = styled.div`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  display: flex;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  height: 100vh;
`;

const Main = styled.form`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  margin-top: 80px;
  margin-bottom: 20px;
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
  outline: none;
  height: 40px;
  width: 70%;
  cursor: pointer;
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
  color: #ff7e5f;
`;
