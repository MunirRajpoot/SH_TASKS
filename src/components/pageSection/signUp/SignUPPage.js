"use client";
import ROUTES from "@/utils/ROUTES";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
import Link from "next/link"; // Import Link from next/link

const SignUpPage = () => {
  const router = useRouter();
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
      router.push(ROUTES.LOGIN_USER)
    } catch (error) {
      console.log("Error:", error);
      router.push(ROUTES.SIGNUP_USER)
    }

    setUsers({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <SignUpPageDiv>
      <Main onSubmit={submitHandler}>
        <Heading>SIGNUP</Heading>
        <InputDiv>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            value={users.firstName}
            name="firstName"
            required
          />
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            value={users.lastName}
            name="lastName"
            required
          />
          <Input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            value={users.email}
            name="email"
            required
          />
          <Input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={users.password}
            name="password"
            required
          />
        </InputDiv>

        <ButtonDiv>
          <Button type="submit">SIGNUP</Button>
        </ButtonDiv>

        <SignUpLink>
          <Para>Already a Member?</Para>
          {/* Use Next.js Link for client-side navigation */}
          <LinkLog href={ROUTES.LOGIN_USER} passHref>
            LogIn
          </LinkLog>
        </SignUpLink>
      </Main>
    </SignUpPageDiv>
  );
};

export default SignUpPage;

const SignUpPageDiv = styled.div`
background-image: url(/Assets/Backroundimage.jpg);
 background-size: cover; /* Ensure the image covers the entire div */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  
  display: flex;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", "sans-serif";
  height: 100vh;
  z-index: 1;
`;

const Main = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 20px;
  width: 400px;
  z-index: 2;
  backdrop-filter: blur(8px); /* Apply a blur effect to the background */
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background for the form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

// Styled component for the link
const LinkLog = styled.a`
  margin-top: 9px;
  text-decoration: none;
  color: #ff7e5f;
  cursor: pointer;
`;
