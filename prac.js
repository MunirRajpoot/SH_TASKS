import React, { useState } from "react";
import styled from "styled-components";
import UserNavbar from "@/components/shared/UserNavbar";
import HeaderLarge from "@/components/templates/text/HearderLarge";
import DescriptionSmall from "@/components/templates/text/DescriptionSmall";
import Span from "@/components/templates/text/Span";
import BlogCard from "@/components/templates/card/BlogCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Footer from "@/components/shared/Footer";
import BlogDetails from "./BlogDetails";
const UserBlog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const cardsPerPage = 9;
    const blogPosts = [
        { img: "/images/icons/Icons/BlogImage.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/image3.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/image2.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/image1.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/2.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/image3.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/Icons/BlogImage.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/image1.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/Icons/BlogImage.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/image1.svg", title: "How Fancentrale Work" },
        { img: "/images/icons/images/2.svg", title: "How Fancentrale Work" },
    ];
    const totalPages = Math.ceil(blogPosts.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = blogPosts.slice(indexOfFirstCard, indexOfLastCard);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    const handleShow = (card) => {
        setSelectedCard(card);
        setShowDetails(true);
    };
    return (
        <>
            {showDetails ? (
                <DetailPage>
                    <BlogDetails
                        showDetails={showDetails}
                        setShowDetails={setShowDetails}
                        selectedCard={selectedCard}
                    />
                </DetailPage>
            ) : (
                <Container flexDirection="column" gap="2rem">
                    <HeaderSection>
                        <UserNavbar />
                    </HeaderSection>
                    <Wrapper flexDirection="column" gap="2rem">
                        <HeaderLarge fontSize={"extraMedium"} Bolder>
                            Recent blog posts
                        </HeaderLarge>
                        <LatestCard gap="1rem" onClick={() => handleShow(blogPosts[0])}>
                            <CardImage src={blogPosts[0].img} />
                            <CardDescription
                                flexDirection="column"
                                justifyContent="space-around"
                                gap="0.8rem"
                            >
                                <Detail flexDirection="column" gap="1rem">
                                    <HeaderLarge fontSize={"extraMedium"} extraBold>
                                        {blogPosts[0].title}
                                    </HeaderLarge>
                                    <DescriptionSmall fontSize={"medium"} color={"gray"}>
                                        How do you create compelling presentations that wow your
                                        colleagues and impress your managers?
                                    </DescriptionSmall>
                                </Detail>
                                <Span fontSize={"1rem"} smSize={"0.75rem"}>
                                    Sunday , 1 Jan 2023
                                </Span>
                            </CardDescription>
                            <ArrowIcon alignItem="flex-start">
                                <Icon src={"/images/icons/Icons/arrow-up-right.svg"} />
                            </ArrowIcon>
                        </LatestCard>
                        <CardSection flexDirection="column" gap="2rem">
                            <HeaderLarge fontSize={"extraMedium"} Bolder>
                                All blog posts
                            </HeaderLarge>
                            <CardWrapper>
                                {currentCards.map((item, index) => (
                                    <Cards key={index} onClick={() => handleShow(item)}>
                                        <BlogCard title={item.title} img={item.img} />
                                    </Cards>
                                ))}
                            </CardWrapper>
                        </CardSection>
                        <PaginationSection
                            alignItem="center"
                            justifyContent="space-between"
                        >
                            <PageButton
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                <IMG src="/images/icons/Icons/arrow-left.svg" />
                                Previous
                            </PageButton>
                            <Stack spacing={2}>
                                <Pagination
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    shape="rounded"
                                    sx={{
                                        "& .MuiPaginationItem-root": {
                                            color: "var(--lighBgColor)",
                                        },
                                        "& .MuiPaginationItem-page.Mui-selected": {
                                            backgroundColor: "var(--bgRedColor)",
                                            color: "white",
                                        },
                                    }}
                                />
                            </Stack>
                            <PageButton
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                                <IMG src="/images/icons/Icons/arrow-right.svg" />
                            </PageButton>
                        </PaginationSection>
                        <FooterSection>
                            <Footer />
                        </FooterSection>
                    </Wrapper>
                </Container>
            )}
        </>
    );
};
export default UserBlog;
const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || ""};
  align-items: ${(props) => props.alignItem || ""};
`;
const DetailPage = styled(FlexContainer)``;
const Container = styled(FlexContainer)`
  @media (min-width: 1440px) {
    margin: auto;
    width: 1200px;
  }
`;
const HeaderSection = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;
const Wrapper = styled(FlexContainer)`
  margin: auto;
  width: 90%;
`;
const LatestCard = styled(FlexContainer)`
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const CardImage = styled.img`
  border-radius: 1rem;
`;
const Detail = styled(FlexContainer)``;
const CardDescription = styled(FlexContainer)``;
const Icon = styled.img`
  width: 2rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const ArrowIcon = styled(FlexContainer)``;
const CardSection = styled(FlexContainer)``;
const CardWrapper = styled(FlexContainer)`
  cursor: pointer;
  gap: 2rem;
  flex-wrap: wrap;
`;
const Cards = styled(FlexContainer)`
  width: calc(33.33% - 2rem);
  @media (max-width: 768px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const PaginationSection = styled(FlexContainer)`
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const PageButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const IMG = styled.img``;
const FooterSection = styled.div``;

















// 1. const cardsPerPage = 3;
// This sets the number of cards you want to display per page. In this case, you want to show 3 cards per page.

// 2. const indexOfLastCard = page * cardsPerPage;
// This calculates the index of the last card that should be displayed on the current page.

// page: The current page number (starting from 1).
// cardsPerPage: The number of cards per page (3 in this case).
// For example, if page is 2, then indexOfLastCard will be 2 * 3 = 6. This means the last card index for page 2 is 6.

// 3. const indexOfFirstCard = indexOfLastCard - cardsPerPage;
// This calculates the index of the first card that should be displayed on the current page.

// indexOfLastCard: The index of the last card on the current page.
// cardsPerPage: The number of cards per page (3 in this case).
// For example, if indexOfLastCard is 6, then indexOfFirstCard will be 6 - 3 = 3. This means the first card index for page 2 is 3.

// 4. const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
// This slices the cards array to get the cards that should be displayed on the current page.

// cards.slice(start, end): Extracts a portion of the array from the start index (inclusive) to the end index (exclusive).
// For example, if indexOfFirstCard is 3 and indexOfLastCard is 6, cards.slice(3, 6) will return the cards at indexes 3, 4, and 5.

// 5. const totalPages = Math.ceil(cards.length / cardsPerPage);
// This calculates the total number of pages needed to display all the cards.

// cards.length: The total number of cards.
// cardsPerPage: The number of cards per page.
// Math.ceil is used to round up to the nearest whole number. This ensures that if there are any remaining cards that don’t fit exactly into the number of pages, an additional page will be added to accommodate them.

// For example, if there are 11 cards and 3 cards per page:

// cards.length / cardsPerPage is 11 / 3 = 3.666...
// Math.ceil(3.666...) results in 4
// So, you will need 4 pages to display all 11 cards.
// 6. const handlePageChange = (event, value) => { setPage(value); };
// This function updates the current page when the user interacts with the pagination controls.

// event: The event object (not used here but typically included in event handlers).
// value: The new page number selected by the user.
// The function simply sets the state page to the new page number, triggering a re-render to display the cards for the selected page.

// Summary
// This code snippet manages pagination by calculating which cards to display based on the current page number and the number of cards per page. It uses array slicing to get the subset of cards to display and computes the total number of pages required.





















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