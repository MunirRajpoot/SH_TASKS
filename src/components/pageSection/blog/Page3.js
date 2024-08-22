"use client";
import { useState } from 'react';
import * as React from 'react';
import { useRouter } from "next/navigation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Description } from '@mui/icons-material';

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

    // Set the number of cards per page to 3
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
        setSelectedCard(null)
    }

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
                                    <HideAuthorIcon src='\Assets\BlogIcons\Author.png' />
                                    <HideAuthLink href='#'>Author</HideAuthLink>
                                </HideAuthorLink>
                                <HideClockLink>
                                    <HideClockIcon src='\Assets\BlogIcons\clock.svg' />
                                    <HideCLink href='#'>7 Hours Ago</HideCLink>
                                </HideClockLink>
                                <HideCommentLink>
                                    <HideCommentIcon src='\Assets\BlogIcons\comment.svg' />
                                    <HideComLink href='#'>Message</HideComLink>
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
                                <Card key={item.id} sx={{ maxWidth: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="160"
                                            image={item.img}
                                            alt={item.title}
                                            sx={{
                                                transition: "transform 0.3s ease-in-out",
                                                "&:hover": {
                                                    transform: "scale(1.1)",
                                                },
                                            }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {item.title}
                                            </Typography>
                                            <LinkSection>
                                                <AuthorLink>
                                                    <AuthorIcon src='\Assets\BlogIcons\Author.png' />
                                                    <AuthLink href='#'>Author</AuthLink>
                                                </AuthorLink>
                                                <ClockLink>
                                                    <ClockIcon src='\Assets\BlogIcons\clock.svg' />
                                                    <CLink href='#'>7 Hours Ago</CLink>
                                                </ClockLink>
                                                <CommentLink>
                                                    <CommentIcon src='\Assets\BlogIcons\comment.svg' />
                                                    <ComLink href='#'>Message</ComLink>
                                                </CommentLink>
                                            </LinkSection>
                                           <CardDesDiv>
                                           <Typography  variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                                                {item.description}
                                            </Typography>
                                           </CardDesDiv>
                                        </CardContent>
                                    </CardActionArea>
                                    <ReadButtonDiv>
                                        <ReadButton onClick={() => handleReadMoreClick(item)}>Read More
                                            <ReadIcon src='\Assets\BlogIcons\right.png' />
                                        </ReadButton>
                                    </ReadButtonDiv>
                                </Card>
                            ))}
                        </CardSection>
                        <PaginationSec>
                            <Stack spacing={2}>
                                <Pagination
                                    onChange={handlePageChange}
                                    count={totalPages}
                                    page={page}
                                    variant="outlined"
                                    color="primary"
                                />
                            </Stack>
                        </PaginationSec>
                    </>
                )}
            </Container>
        </>
    );
};

export default Page3;
const Container = styled.div`
     /* margin-top: 20px; */
    font-family: "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", "sans-serif";
`;

const CardSection = styled.div`
    margin-top: 100px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const LinkSection = styled.div`
    display: flex;
    gap: 10px;
`;

const AuthorLink = styled.div`

    display: flex;
    gap: 5px;
`;

const AuthorIcon = styled.img`
   height: 17px;
    width: 18px;
`;

const AuthLink = styled.a`
    margin-top: 1px;
    text-decoration: none;
    color: black;
`;

const ClockLink = styled.div`
    /* margin-top: 2px; */
    display: flex;
    gap: 5px;
`;

const ClockIcon = styled.img`
    /* margin-top: 5px; */
    height: 15px;
    width: 15px;
`;

const CLink = styled.a`
    text-decoration: none;
    color: black;
`;

const CommentLink = styled.div`
    /* margin-top: 2px; */
    display: flex;
    gap: 5px;
`;

const CommentIcon = styled.img`
    /* margin-top: 5px; */
    height: 15px;
    width: 15px;
`;

const ComLink = styled.a`
    text-decoration: none;
    color: black;
`;

const ReadButtonDiv = styled.div`
    display: flex;
    margin-left: 15px;
`;

const ReadButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    text-align: start;
    border: none;
    outline: none;
    font-size: medium;
    &:hover,
    &:active {
        color: blue;
    }
`;

const ReadIcon = styled.img`
    margin-left: 5px;
    height: 12px;
    width: 12px;
`;

const PaginationSec = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

const ReadMoreSec = styled.div`
    background-color: antiquewhite;
    width: 80%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 20px;
`;

const HideSecImg = styled.img`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
`;

const ReadImgDiv = styled.div`
    margin: auto;
    width: 90%;
`;

const ReviewButton = styled.button`
    background-color: dodgerblue;
    color: white;
    width: 80px;
    height: 30px;
    border: none;
    outline: none;
    margin-top: 20px;
    margin-left: 20px;
`;

const HeadingDiv = styled.div`
    margin-left: 20px;
    margin-top: 10px;
`;

const HeadingReadMore = styled.h1``;

const DescriptionDiv = styled.div`
    margin-left: 20px;
    margin-top: 20px;
`;

const DesHeading = styled.h2``;

const DesPara = styled.p`
    margin-top: 8px;
`;

// const PostCommentPage = styled.div`
//     background-color: aliceblue;
//     width: 80%;
//     margin: 30px auto 0;
// `;

// const ReplyHeading = styled.h3`
//     padding-top: 20px;
//     margin-left: 20px;
// `;

// const RepPara = styled.p`
//     margin-top: 10px;
//     margin-left: 20px;
// `;



const HideLinkSection = styled.div`
    display: flex;
    gap: 10px;
`;

const HideAuthorLink = styled.div`
    display: flex;
    gap: 5px;
`;

const HideAuthorIcon = styled.img`
    margin-top: 5px;
    height: 18px;
    width: 18px;
`;

const HideAuthLink = styled.a`
    margin-top: 3px;
    text-decoration: none;
    color: black;
`;

const HideClockLink = styled.div`
    margin-top: 2px;
    display: flex;
    gap: 5px;
`;

const HideClockIcon = styled.img`
    margin-top: 5px;
    height: 15px;
    width: 15px;
`;

const HideCLink = styled.a`
    text-decoration: none;
    color: black;
`;

const HideCommentLink = styled.div`
    margin-top: 2px;
    display: flex;
    gap: 5px;
`;

const HideCommentIcon = styled.img`
    margin-top: 5px;
    height: 15px;
    width: 15px;
`;

const HideComLink = styled.a`
    text-decoration: none;
    color: black;
`;


const BackButtonDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`;

const BackButton = styled.button`
background-color: dodgerblue;
color: white;
height: 30px;
width: 120px;
outline: none;
border: none;
`;

const CardDesDiv=styled.div`
height: 200px;
width: 100%;
`;