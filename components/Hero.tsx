import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const BOOK_COVER_URL = "https://cdn.prod.website-files.com/66014f7dafaf6a53523d0811/6603ea33eff828b190bced7c_CrashCourse_3D_REV%20Mar19-2024%201.png";
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-12 md:py-[100px] px-6 flex justify-center bg-white min-h-screen items-center">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Column - 55% */}
        <div className="w-full md:w-[55%] space-y-8">
          <p className="text-[14px] font-medium text-gray-500 uppercase tracking-wide">
            For founders who are struggling - and the ones smart enough to prepare
          </p>
          
          <h1 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold text-black">
            A founder lost $200,000 and six years building a startup.
            <br className="mt-4 block" />
            Then he documented every mistake so you don't repeat them.
          </h1>
          
          <div className="space-y-8">
            <p className="text-[18px] md:text-[20px] text-gray-800 leading-[1.6]">
              This isn't a book about winning.
              <br />
              It's about surviving long enough to figure out if you should keep going.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={AMAZON_LINK} target="_blank">
                Buy on Amazon
              </Button>
              <Button 
                variant="secondary" 
                href={AMAZON_LINK} 
                target="_blank" 
                className="!text-black !border-black hover:!bg-black hover:!text-white"
              >
                Listen on Audible
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
               <div className="flex text-[#FFD700]">
                 {'★'.repeat(5)}
               </div>
               <span>4.9/5 on Amazon (120+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Column - 45% */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="relative w-[300px] md:w-[360px]">
             <img 
               src={BOOK_COVER_URL} 
               alt="Crash Course by Ricardo Jiménez" 
               className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;