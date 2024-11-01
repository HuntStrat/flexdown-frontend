import React from 'react';

interface CardProps {
  name: string;
  image: string;
  review: string;
  position: string;
}

const Card: React.FC<CardProps> = ({ name, image, review, position }) => {
  return (
    <div className="shadow-2xl shadow-black/10 bg-white rounded-3xl p-2 flex flex-col items-center justify-center">
      <p className="text-primary text-8xl">“</p>
      <p className="text-center text-2xl text-primary/50">{review}</p>
      <div className="flex items-center gap-6">
        <img
          className="w-[80px] h-[80px] rounded-full"
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-2 p-2">
          <h3 className="text-primary text-3xl">{name}</h3>
          <p className="text-primary/50 text-xl">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
