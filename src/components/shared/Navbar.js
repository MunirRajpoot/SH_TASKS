"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import ROUTES from "@/utils/ROUTES";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default function ResponsiveDrawerAppBar(props) {
    const { window } = props;

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const navItems = [
        { title: "Products", link: ROUTES.USER2 },
        { title: "Pricing", link: ROUTES.USER1 },
        { title: "Blog", link: ROUTES.USER3 },
    ];

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const router = useRouter();

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", margin: "0rem 0rem 1rem 0rem" }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            component={Link}
                            href={item.link || "#"}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {isSmallScreen && (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                onClick={() => router.push(ROUTES.LOGIN_USER)}
                            >
                                <ListItemText primary="LogIn" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                onClick={() => router.push(ROUTES.SIGNUP_USER)}
                            >
                                <ListItemText primary="SignUp" />
                            </ListItemButton>
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: "#212529",
                    fontFamily: '"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", "sans-serif"',
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, }}>
                        <Avatar
                            alt="Logo"
                            src="\Assets\logo_MR.webp"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: 45,
                                height: 45,
                                mr: 2,
                                display: { xs: "none", md: "block" },
                            }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: "none", md: "block" } }}
                        >
                            MR
                        </Typography>

                        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.title}
                                    sx={{
                                        color: "#fff",
                                        ml: 2,
                                        fontWeight: "bold",
                                        '&:hover': {
                                            color: '#ffa200',  // Change hover color here
                                            backgroundColor: 'transparent', // Ensure background remains transparent
                                        },
                                    }}
                                    component={Link}
                                    href={item.link || "#"}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>

                    </Box>

                    {!isSmallScreen && (
                        <Box2>


                            <Stack spacing={2} direction="row">
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "white",
                                        transition: "color 0.3s ease-in-out", // Transition for the color
                                        '&:hover': {
                                            color: '#ffa200',  // Change hover color here
                                        },
                                    }}
                                >
                                    LogIn
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ffa200", // Initial background color
                                        color: "white", // Ensure text color is white
                                        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out", // Transition for both color and background
                                        '&:hover': {
                                            color: '#ffa200',  // Change text color on hover
                                           backgroundColor:"#ff9500", // Gradient background on hover
                                            color:"white",
                                            fontWeight:"bold"
                                        },
                                    }}
                                >
                                    SignUp
                                </Button>
                            </Stack>


                            {/* <ButtonLogin onClick={() => router.push(ROUTES.LOGIN_USER)}>
                                LogIn
                            </ButtonLogin>
                            <ButtonSignUp onClick={() => router.push(ROUTES.SIGNUP_USER)}>
                                SignUp
                            </ButtonSignUp> */}
                        </Box2>
                    )}
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* Main Content Box */}
            {/* <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "64px" }}>
               hell
            </Box> */}
        </Box>
    );
}

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ButtonLogin = styled.button`
  width: 80px;
  height: 30px;
  /* background: linear-gradient(to right, #ff7e5f, #feb47b); */
background-color: transparent;
 outline: none;
  color: white;
  /* border: 1px solid white; */
  font-weight: bold;
  cursor: pointer;
  /* border-radius: 4px; */

  &:hover,
  &:active,
  &:focus {
    color: #ffa200
  }
`;

const ButtonSignUp = styled.button`
  width: 80px;
  height: 30px;
  background-color: #ffa200;
  color: white;
  border: 1px solid white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    color: white;
  }
`;

const ButtonSec = styled.div`
  display: flex;
  gap: 10px;
`;
