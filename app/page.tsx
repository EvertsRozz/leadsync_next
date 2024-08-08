import Image from "next/image";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent></MainContent>
    </>
  );
}
