import React from 'react';
import Button from './Button';

const Author: React.FC = () => {
  const AUTHOR_IMAGE_URL = "https://cdn.prod.website-files.com/66014f7dafaf6a53523d0811/669e08592c5e8ee2f054fbaf_ricardo-video.jpg";
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-white border-t border-gray-100">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-12 items-start">
        
        {/* Image - 48% */}
        <div className="w-full md:w-[48%]">
          <img 
            src={AUTHOR_IMAGE_URL} 
            alt="Ricardo Jiménez" 
            className="w-full h-auto object-contain rounded-lg shadow-xl"
          />
        </div>

        {/* Text - 52% */}
        <div className="w-full md:w-[52%] space-y-6 text-[18px] md:text-[20px] leading-[1.6] text-[#222]">
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500 block mb-2">Who Wrote This</span>
          
          <p>
            Ricardo Jiménez spent six years building Plushkies.
          </p>
          <p>
            He moved to three countries. Sold in twenty more. Raised money. 
            Built a team. Did everything the playbooks said to do.
          </p>
          <p className="font-bold">
            It didn't work.
          </p>
          <p>
            He lost $200,000 of his own money.
          </p>
          <p>
            What happened after:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>He made 50+ angel investments - including Ethereum before the ICO.</li>
            <li>He turned $2M into $8M for a fund during a bear market.</li>
            <li>He became an early investor in Exodus (now NYSE-listed).</li>
            <li>He got an MBA from Duke.</li>
            <li>He became a certified meditation instructor.</li>
            <li>He visited 80+ countries.</li>
          </ul>
          <p>
            He knows what failure looks like from the inside.
            <br />
            He knows what comes after.
          </p>
          <p className="pt-4">
            <span className="bg-[#FFD700] px-1 font-semibold">This book is the bridge.</span>
          </p>
          
          <div className="pt-6">
            <Button href={AMAZON_LINK} target="_blank">Read Ricardo's Story</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Author;