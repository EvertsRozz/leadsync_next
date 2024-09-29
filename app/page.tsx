import Image from "next/image";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";
import LandingPage from "./componentsV2/LandingPage";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* <MainContent></MainContent> */}
      <LandingPage />
    </>
  );
}
