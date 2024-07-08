import React, { useState } from 'react';
import ReferralModal from './RefferralModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-500">
      <h1 className="text-5xl text-white mb-8">Refer & Earn</h1>
      <button
        className="bg-white text-blue-500 px-6 py-3 rounded-full"
        onClick={() => setIsModalOpen(true)}
      >
        Refer Now
      </button>
      {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Hero;
