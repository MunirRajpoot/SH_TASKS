import Image from "next/image";
// import styles from "./page.module.css";

import StyledComponentsRegistry from "@/components/shared/Register";
import LogInPage from "@/components/pageSection/logIn/LogInPage";

export default function Home() {
  return (
    <>
      <StyledComponentsRegistry>

        <LogInPage />
      </StyledComponentsRegistry>

    </>
  );
}
