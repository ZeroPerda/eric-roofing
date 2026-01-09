import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f0f2f4]">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2 text-primary">
          <div className="size-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">roofing</span>
          </div>
          <h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight">ERIC ROOFING</h2>
        </div>
        <button className="flex items-center justify-center rounded-full h-10 px-6 bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-sm">
          <span className="truncate">Message Eric 💬</span>
        </button>
      </div>
    </header>
  );
};

export default Header;