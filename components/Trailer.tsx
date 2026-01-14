import React from 'react';

const Trailer: React.FC = () => {
  const VIDEO_ID = "z3SL2jSmA4k";
  const YOUTUBE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
  const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section className="w-full py-12 md:py-20 bg-black flex justify-center px-6 border-t border-gray-900">
      <div className="w-full max-w-[1000px]">
        <a 
          href={YOUTUBE_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative block w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 cursor-pointer"
        >
          {/* Thumbnail Image */}
          <img 
            src={THUMBNAIL_URL} 
            alt="Watch the Crash Course Trailer" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M5 3L19 12L5 21V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Text Label */}
          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center">
            <span className="text-white font-semibold text-lg md:text-xl tracking-wide uppercase drop-shadow-md">
                Watch the Trailer on YouTube
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Trailer;