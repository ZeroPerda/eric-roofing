import React from 'react';

const Hero: React.FC = () => {
  // Switched to a more dynamic, high-end architectural shot with dramatic lighting
  const bgImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop";
  
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <div 
        className="relative flex min-h-[600px] flex-col items-center justify-center p-4 md:p-10 text-center bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(rgba(15, 73, 189, 0.75), rgba(16, 22, 34, 0.85)), url("${bgImage}")`
        }}
      >
        <div className="flex flex-col gap-6 max-w-3xl z-10">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
            Quality Roofing.<br/>Done Personally.
          </h1>
          <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
            Skip the sales reps. Talk directly to Eric about your home and get honest answers fast.
          </h2>
          <div className="flex flex-col w-full max-w-[520px] mx-auto mt-4">
            <div className="flex flex-col sm:flex-row w-full items-stretch rounded-xl bg-white p-1 gap-2 shadow-2xl">
              <div className="flex flex-1 items-center px-3">
                <span className="material-symbols-outlined text-gray-400 mr-2">home_pin</span>
                <input 
                  className="w-full bg-transparent border-none text-[#111318] placeholder:text-gray-400 focus:ring-0 text-base py-3 focus:outline-none" 
                  placeholder="Enter your street address" 
                  type="text"
                />
              </div>
              <button className="w-full sm:w-auto h-12 px-8 rounded-lg sm:rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-base font-bold leading-normal tracking-wide transition-all whitespace-nowrap shadow-md">
                Get My Free Inspection
              </button>
            </div>
            <p className="text-white/60 text-xs mt-3 font-medium">No commitment required. 100% Free.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;