import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="bg-background-light py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-[#111318] text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Why Choose Eric?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Most roofing companies send a salesperson. I come myself. Here is the difference personalized service makes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="size-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-2">
                <span className="material-symbols-outlined text-3xl">timer</span>
              </div>
              <h3 className="text-[#111318] text-xl font-bold">Fast Response</h3>
              <p className="text-gray-600 leading-relaxed">
                No waiting weeks for a callback. I pride myself on immediate replies and quick scheduling.
              </p>
            </div>
            <div className="text-orange-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
              Check availability <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="size-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-2">
                <span className="material-symbols-outlined text-3xl">construction</span>
              </div>
              <h3 className="text-[#111318] text-xl font-bold">Master Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                I only install shingles and systems that I would put on my own mother's house. Top-tier durability.
              </p>
            </div>
            <div className="text-orange-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
              View materials <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="size-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-2">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <h3 className="text-[#111318] text-xl font-bold">Richmond Native</h3>
              <p className="text-gray-600 leading-relaxed">
                I know Richmond weather and I know the neighborhoods. Local expertise you can actually trust.
              </p>
            </div>
            <div className="text-orange-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
              Meet Eric <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;