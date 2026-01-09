import React from 'react';

const RecentProject: React.FC = () => {
  const projectImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDKJirFNSPqAsrI97eG8IPOfCqL4gIsZmo8eiyN4Xd5BLMbuxbtrxQAw4RMXsGTqFNQ7rOPFRUXSXEAlrqcjUu0HwEtoQQwIlRmh2DIzRkHhWCc_vJasous379bwkyi-GDk-cnzHSoHrbhY7cEtFXSRDh46k5HS-mcc-maSup0_4nc3lVfZPQ8baVmOXgQOFsBGVcRF7YR6wQApW6X7Jt3J1Uj_KmimWXyE7myjriPf_1jTRBbof6OAkmzubNVlLuPNBmgZtrFhqKzU";

  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCT-XX0WAPtorN_P7nr2QT9B_ZdvJguyydzUGpKT4afWMIwgpe6KcdtCM98ydypSqnUuwK44gU2jANHI9k0T_xoUAWXMbNeoJyKfWotUgEsFqb1JKAgo1e4Y1tc1zicqzKc0jD7fTwhbx3FhDnhNCUVFge5UwHjYyRi-MJITa9PWxNo1yfnUu2u2s1tzB1KfeMkrROONBdQR248H-EKdzeItalsEuIjnC6GWYWdX7HLQRNwZGFDB_hIZRl6s3GjVf6lRGfqq1ihPANK",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCZQl65K8ua8TRYf8PejnKN4qsEjEFaV0UA7nemhg2R7Jsn08_7L4Yo0-PKy_hIpDF_yjO7sO5sU5pgCNexDbiHyBUnuOUQyyBPRraa9zu2fBpxS63Drhihat6rmfpUPsVU20V_PAKdJtpL4xYcSnYqV-jeNGHpRRRR5bE5J-kW5RMpFv9VTX8VoNTz27rqivz5gAMx-Jqu_l2Eq0a-XdIjZmi3k2y3rYogc9tpQTcJKURaJBxPneP-qhmAMfTM3zg7y_ryxZFgwEgj",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1zh4WieRcIzNE3PT2sU2uPaeat2W7tx8Qe01EMw_SY-f9xapChpbaILqvRpKTd2v3GrOQfqYV81wiZy6enmMWocIbhO4r-lEpQMWpi2jFEua-cYjimevPXTO7Y_65xjoO16YxK2K9flO8h5DTVxhg4cT7AwuycKM_QnRICAWD5UKXoopDuxkDjErZttO3UakSIBd9Zk-P1vrLcaggFeeNU0ICkgY8X_vT9op7jkeHmJMXU3_P6iq4IZSP54TV1REsFIXC0CnK4imO"
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div 
                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url("${projectImage}")` }}
              >
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                Completed in 2 Days
              </div>
            </div>
          </div>
          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold w-fit uppercase tracking-wider">
                Recent Project
              </div>
              <h2 className="text-[#111318] text-3xl md:text-4xl font-black leading-tight">
                Is Your Roof Telling You Something?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Many homeowners ignore small leaks until they become expensive disasters. If you see missing shingles, curling edges, or granules in your gutters, send me a picture. I'll give you a quick, honest assessment without the sales pitch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary hover:bg-blue-800 text-white text-base font-bold transition-colors shadow-lg hover:shadow-primary/30">
                <span className="material-symbols-outlined">add_a_photo</span>
                Send Eric a Photo
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-transparent border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary text-base font-bold transition-colors">
                View Portfolio
              </button>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-3">
                {avatars.map((avatar, idx) => (
                  <img 
                    key={idx} 
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                    src={avatar} 
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Trusted by <span className="text-primary font-bold">500+</span> Richmond neighbors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;