
import React from 'react';
import Header from "@/components/Header";
import GoodHands from '@/components/GoodHands';
import Features from '@/components/Features';
import WaitingList from '@/components/WitingList';
const Home: React.FC = () => {
  return (
    <div >
<Header />
<WaitingList />
<GoodHands />
<Features />
    </div>
  );
};

export default Home;