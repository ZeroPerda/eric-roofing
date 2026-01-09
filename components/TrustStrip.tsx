import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 grayscale opacity-70">
            <div className="h-8 flex items-center gap-1 font-bold text-xl text-gray-600">
              <span className="material-symbols-outlined">star</span> Google 5.0
            </div>
            <div className="h-8 flex items-center gap-1 font-bold text-xl text-gray-600">
              <span className="material-symbols-outlined">verified</span> Yelp
            </div>
            <div className="h-8 flex items-center gap-1 font-bold text-xl text-gray-600">
              <span className="material-symbols-outlined">shield</span> BBB A+
            </div>
          </div>
          <a className="group flex items-center gap-2 text-primary font-bold hover:text-orange-500 transition-colors" href="#">
            See what neighbors are saying about Eric 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;