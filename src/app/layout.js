
import { Inter } from "next/font/google";
// import "./globals.css";
import { AppBar } from "@mui/material";
import Navbar from "@/components/shared/Navbar";

import "./style/global.css"
import Footer from "@/components/shared/Footer";
import StyledComponentsRegistry from "@/components/shared/Register";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        {/* <Footer /> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
