import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[1fr_auto_1fr] gap-5 h-screen p-6 mt-1">
      <div className="w-full bg-[#D4D4D4] border-2 border-[#A8A8A8] rounded-lg h-[225px]"></div>
      <div className="flex justify-center items-center gap-10">
        <div className="w-[150px] h-[150px] bg-[#D4D4D4] border border-[#A8A8A8] rounded-lg mb-[52px]"></div>
        <div className="w-[145px] h-[145px] bg-[#D4D4D4] border border-[#A8A8A8] rounded-lg mb-[52px]"></div>
      </div>
      <div className="w-full bg-[#D4D4D4] border-2 border-[#A8A8A8] rounded-lg h-[225px]"></div>
    </div>
  );
};

export default Home;