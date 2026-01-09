import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-[960px] mx-auto px-4 md:px-10 text-center flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Ready to Fix Your Roof?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Don't let a small problem turn into a big one. Chat with me now and let's get it sorted out.
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full h-16 px-10 bg-orange-500 hover:bg-orange-600 hover:scale-105 transform transition-all text-white text-lg font-bold shadow-2xl shadow-orange-900/20">
          <span className="material-symbols-outlined text-2xl">chat</span>
          Start Chat with Eric Now
        </button>
        <div className="w-full border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200 text-sm">
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Home</a>
            <a className="hover:text-white transition-colors" href="#">Services</a>
            <a className="hover:text-white transition-colors" href="#">About Eric</a>
            <a className="hover:text-white transition-colors" href="#">Contact</a>
          </div>
          <div>
            © 2026 Eric Roofing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;