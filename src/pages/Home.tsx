import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
// import GoodHands from "@/components/GoodHands";
// import WaitingList from "@/components/WitingList";
import ClientSlider from "@/components/ClientSlider";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <WaitingList /> */}
      {/* <GoodHands /> */}
      <ClientSlider />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
