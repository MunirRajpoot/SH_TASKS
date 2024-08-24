"use client";
import { useState } from "react";
import * as React from "react";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Pagination from '@mui/material/Pagination';

const Page3 = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [
    {
      id: 1,
      title: "Is Instagram Threads Feature Dead? An Analysis in 2024",
      img: "/Assets/Blog/image1.jpg",
      description: "Against the rapidly changing backdrop of the social media environment, you would have expected the ‘Threads’ feature by Instagram to create a massive uproar. As you go through the digital space in 2024, one question must have crossed your mind: is Threads dead? This post analyzes the present condition of the Instagram messaging platform based…",
    },

    {
      id: 2,
      title: "Can Any App Truly Replace TikTok? Examining the Leading TikTok Alternatives",
      img: "/Assets/Blog/image2.jpg",
      description: "TikTok Alternative – TikTok has been a cultural phenomenon in the ever-evolving land of social media. However, with rising concerns about data privacy and geopolitics, you may look for alternatives. What attracted millions to TikTok was the unique blend of short-form video and going viral. With the increase in competition from TikTok, this void will be…",
    },
    {
      id: 3,
      title: "M2 vs M3 Chip: A Comparison of Performance",
      img: "/Assets/Blog/image3.jpg",
      description: "M2 vs M3 Chip : Want to upgrade your Apple device? You may find yourself weighing the merits of the M2 and M3 chips. These are the state-of-the-art processors from Apple, but what both of them can do in terms of performance is a whole different ballpark. But how do they stack up against each…",
    },

    {
      id: 4,
      title: "Rumors About the iPhone 17 Slim Design & Upgrades",
      img: "/Assets/Blog/image4.jpg",
      description: "With the next line of smartphone development, it is rumored that Apple will develop an extremely slim iPhone 17. Industry insiders and tech fans speculate how Apple will achieve such thinness while keeping the device functional. Though Apple is characteristically tight-lipped, leaks and expert analysis give an exciting view of what you may find in…",
    },
    {
      id: 5,
      title: "Canon EOS R5 Mark II: An Overview of Features",
      img: "/Assets/Blog/image5.jpg",
      description: "If you are a professional photographer, you are always searching for state-of-the-art gadgets that give way to letting your creativity shine through. The Canon R5 Mark II, a powerhouse camera, build upon its predecessor’s success with innovative features and upgraded capabilities. This next-generation model in Canon’s mirrorless lineup offers an unrivaled promise of revolutionizing your…",
    },
    {
      id: 6,
      title: "Pixel Tablet vs Samsung A9: A Side-by-Side Comparison",
      img: "/Assets/Blog/image6.jpg",
      description: "You are in the market for a tablet, one thought instantly comes across two direct competitors on almost any given list of devices available today: the Pixel Tablet and the Samsung A9. Each of these devices stands out for its extreme advancement toward reaching a point where it could let one bring his digital life…",
    },
    {
      id: 7,
      title: "The Wise Phone 2: Specs, Features, and More",
      img: "/Assets/Blog/image7.jpg",
      description: "Hi Techeez, Are you ready to meet the next evolution of mindful technology? Here comes Wise Phone 2, promising to revolutionize your relationship with your mobile device. This cutting-edge smartphone puts equal emphasis on digital wellbeing and powerful performance. The Wise Phone 2, with its innovative features and thoughtfully designed devices, aims to enable you…",
    },
    {
      id: 8,
      title: "A Guide to Using RCS on iPhone Devices",
      img: "/Assets/Blog/image8.jpg",
      description: "You must have encountered RCS, the next generation of messaging standards designed to replace SMS and MMS. However, do you know how to use RCS on your iPhone? Ultra-modern technology includes advanced messaging features like read receipts, typing indicators, and high-quality media sharing. In this article, We will walk you through enabling RCS on your…",
    },
    {
      id: 9,
      title: "Fragpunk Release Date: Details of the Upcoming Shooter Game",
      img: "/Assets/Blog/image9.jpg",
      description: "Fragpunk Release Date – You must have been waiting for Fragpunk, the world’s most-awaited shooter developed by Midnight Studios. Well, all the waiting will end since this game’s release date has been announced. Get ready to be thrown into a dark cyberpunk world where every decision will have its consequences. Next-gen graphics and next-level multiplayer…",
    },
    {
      id: 10,
      title: "A Guide to Using RCS on iPhone Devices",
      img: "/Assets/Blog/image8.jpg",
      description: "You must have encountered RCS, the next generation of messaging standards designed to replace SMS and MMS. However, do you know how to use RCS on your iPhone? Ultra-modern technology includes advanced messaging features like read receipts, typing indicators, and high-quality media sharing. In this article, We will walk you through enabling RCS on your…",
    },
    {
      id: 11,
      title: "Fragpunk Release Date: Details of the Upcoming Shooter Game",
      img: "/Assets/Blog/image9.jpg",
      description: "Fragpunk Release Date – You must have been waiting for Fragpunk, the world’s most-awaited shooter developed by Midnight Studios. Well, all the waiting will end since this game’s release date has been announced. Get ready to be thrown into a dark cyberpunk world where every decision will have its consequences. Next-gen graphics and next-level multiplayer…",
    },
  ];

  const cardsPerPage = 3;
  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleReadMoreClick = (card) => {
    setSelectedCard(card);
  };

  const previousPage = () => {
    setSelectedCard(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffa200',
      },
    },
  });

  return (
    <>
      <Container>
        {selectedCard ? (
          <ReadMoreSec>
            <ReviewButton>Reviews</ReviewButton>
            <HeadingDiv>
              <HeadingReadMore>{selectedCard.title}</HeadingReadMore>
              <HideLinkSection>
                <HideAuthorLink>
                  <HideAuthorIcon src="/Assets/BlogIcons/Author.png" />
                  <HideAuthLink href="#">Author</HideAuthLink>
                </HideAuthorLink>
                <HideClockLink>
                  <HideClockIcon src="/Assets/BlogIcons/clock.svg" />
                  <HideCLink href="#">7 Hours Ago</HideCLink>
                </HideClockLink>
                <HideCommentLink>
                  <HideCommentIcon src="/Assets/BlogIcons/comment.svg" />
                  <HideComLink href="#">Message</HideComLink>
                </HideCommentLink>
              </HideLinkSection>
            </HeadingDiv>
            <ReadImgDiv>
              <HideSecImg src={selectedCard.img} />
            </ReadImgDiv>
            <DescriptionDiv>
              <DesHeading>{selectedCard.title}</DesHeading>
              <DesPara>{selectedCard.description}</DesPara>
            </DescriptionDiv>
            <BackButtonDiv>
              <BackButton onClick={previousPage}>Previous Page</BackButton>
            </BackButtonDiv>
          </ReadMoreSec>
        ) : (
          <>
            <CardSection>
              {currentCards.map((item) => (
                <StyledCard key={item.id}>
                  <CardActionArea>
                    <StyledCardMedia
                      component="img"
                      height="250"
                      image={item.img}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <LinkSection>
                        <AuthorLink>
                          <AuthorIcon src="/Assets/BlogIcons/Author.png" />
                          <AuthLink href="#">Author</AuthLink>
                        </AuthorLink>
                        <ClockLink>
                          <ClockIcon src="/Assets/BlogIcons/clock.svg" />
                          <CLink href="#">7 Hours Ago</CLink>
                        </ClockLink>
                        <CommentLink>
                          <CommentIcon src="/Assets/BlogIcons/comment.svg" />
                          <ComLink href="#">Message</ComLink>
                        </CommentLink>
                      </LinkSection>
                      <Typography variant="body1" color="text.secondary" sx={{ marginTop: "10px" }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <ReadMoreButton onClick={() => handleReadMoreClick(item)}>
                    Read More
                  </ReadMoreButton>
                </StyledCard>
              ))}
            </CardSection>
            <ThemeProvider theme={theme}>
              <StyledStack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  shape="rounded"
                />
              </StyledStack>
            </ThemeProvider>
          </>
        )}
      </Container>
    </>
  );
};

export default Page3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const LinkSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  /* color: black; */
`;

const AuthorLink = styled.div`
color: black;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const ClockLink = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const CommentLink = styled.div`
  display: flex;
  align-items: center;
`;

const ReadMoreButton = styled.button`
  background-color: #ffa200;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  width: 100%; /* Full width to prevent layout issues */
  margin-top: auto; /* Move it to the bottom of the card */
  &:hover {
    background-color: #ff8c00;
  }
`;

const StyledStack = styled(Stack)`
  margin-top: 16px;
`;

// Styles for the "Read More" section
const ReadMoreSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ReviewButton = styled.button`
  padding: 10px 20px;
  background-color: #ffa200;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 20px; /* Space between the button and content */
  &:hover {
    background-color: #ff8c00;
  }
`;

const HeadingDiv = styled.div`
  text-align: center;
`;

const HeadingReadMore = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const HideLinkSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HideAuthorLink = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const HideAuthorIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HideAuthLink = styled.a`
  margin-left: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const HideClockLink = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const HideClockIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HideCLink = styled.a`
  margin-left: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const HideCommentLink = styled.div`
  display: flex;
  align-items: center;
`;

const HideCommentIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HideComLink = styled.a`
  margin-left: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ReadImgDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const HideSecImg = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

const DescriptionDiv = styled.div`
  margin-top: 20px;
  /* text-align: center; */
  width: 80%;
`;

const DesHeading = styled.h3`
  font-size: 22px;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
`;

const DesPara = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`;

const BackButtonDiv = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #ffa200;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #ff8c00;
  }
`;

// Replacing undefined `AuthorLink` component with a `div` element

const AuthorIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const AuthLink = styled.a`
  margin-left: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ClockIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CLink = styled.a`
  margin-left: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ComLink = styled.a`
  margin-left: 5px;
  
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
