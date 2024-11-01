import React from 'react';
import Header from '@/components/Header';
import GoodHands from '@/components/GoodHands';
import Features from '@/components/Features';
import WaitingList from '@/components/WitingList';
import Testimonials from '@/components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <WaitingList />
      <GoodHands />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
