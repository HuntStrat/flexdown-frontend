import React from "react";
import Header from "@/components/Header";
import GoodHands from "@/components/GoodHands";
import Features from "@/components/Features";
import WaitingList from "@/components/WitingList";
import Navbar from "@/components/Navbar";
const Home: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <WaitingList />
      <GoodHands />
      <Features />
    </div>
  );
};

export default Home;
