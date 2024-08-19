"use client";

import * as React from "react";
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
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import ROUTES from "@/utils/ROUTES";

const drawerWidth = 240;



export default function ResponsiveDrawerAppBar(props) {
    const { window } = props;

    const navItems = [
        {
            title: "Products",
            link: ROUTES.USER2,
        },
        {
            title: "Pricing",
            link: ROUTES.USER1,
        },
        {
            title: "Blog",
            link: ROUTES.USER3, // Ensure ROUTES.BLOG is defined
        },
        // {
        //     title: "Login",
        //     // link: ROUTES.LOGIN_USER, //Login Page
        // },
        // {
        //     title: "SignUp",
        //     // link: ROUTES.SIGNUP_USER, //SignUp Page
        // },
    ];

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (link) => {
        if (link) {
            // Handle click event here if needed
            console.log(`Navigating to ${link}`);
        } else {
            console.warn("Link is not defined");
        }
    };

    const loginClick = () => {
        router.push(ROUTES.LOGIN_USER); // Navigate to the login page
    };

    const signupClick = () => {
        router.push(ROUTES.SIGNUP_USER); // Navigate to the signup page
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", margin: "0rem 0rem 1rem 0rem" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        {item.link ? (
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                onClick={() => handleNavClick(item.link)}
                            >
                                {/* <Link href={item.link} passHref> */}
                                <ListItemText primary={item.title} />
                                {/* </Link> */}
                            </ListItemButton>
                        ) : (
                            <ListItemButton sx={{ textAlign: "center" }} disabled>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const router = useRouter();

    return (
        <Box sx={{ display: "flex", margin: "0rem 0rem 1rem 0rem" }}>
            <CssBaseline />
            <AppBar component="nav">
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

                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <Avatar
                            alt="Logo"
                            src="/path-to-your-logo.png" // Replace with your logo path
                            sx={{
                                width: 40,
                                height: 40,
                                mr: 2,
                                display: { xs: "none", md: "block" },
                            }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: "none", md: "block" } }}
                        >
                            MUI
                        </Typography>

                        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
                            {navItems.slice(0, 3).map((item) => (
                                <Button
                                    key={item.title}
                                    sx={{ color: "#fff", ml: 2 }}
                                    onClick={() => handleNavClick(item.link)}
                                    component={Link}
                                    href={item.link || "#"} // Provide a fallback if link is undefined
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    <Box2>

                        <ButtonSec>
                            <ButtonLogin onClick={() => router.push(ROUTES.LOGIN_USER)}>LogIn</ButtonLogin>

                            <ButtonSignUp onClick={() => router.push(ROUTES.SIGNUP_USER)}>SignUp</ButtonSignUp>

                        </ButtonSec>

                    </Box2>


                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={{}}>
                {/* <Toolbar /> */}
            </Box>
        </Box>
    );
}

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  gap: 10px;
`;
const ButtonLogin = styled.button`
  width: 80px;
  height: 30px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonSignUp = styled.div`
  width: 80px;
  height: 30px;
  font-size: medium;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;
const ButtonSec = styled.div`

`;