import React from 'react';
import Button from './Button';

const Book: React.FC = () => {
  const BOOK_COVER_URL = "https://cdn.prod.website-files.com/66014f7dafaf6a53523d0811/6603ea33eff828b190bced7c_CrashCourse_3D_REV%20Mar19-2024%201.png";
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-white">
      <div className="w-full max-w-[800px] text-center">
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-8">
          This is Crash Course.
        </h2>
        
        <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.6] text-gray-800 mb-12">
          <p>
            240 pages of everything they don't put in the success stories.
          </p>
          <ul className="space-y-2">
            <li>The $50,000 invoice that never got paid.</li>
            <li>The co-founder conversation that almost ended everything.</li>
            <li>The moment I knew it was over - and stayed two more years anyway.</li>
            <li>The mental breakdown I hid from everyone.</li>
            <li>The meditation practice that kept me functional.</li>
            <li>The decision framework I wish I'd had from day one.</li>
          </ul>
          <p className="font-medium pt-4">
            Not theory. Not motivation. Just the truth about what it takes 
            to build something - and what it costs.
          </p>
        </div>

        <div className="flex justify-center mb-12">
           <img 
             src={BOOK_COVER_URL}
             alt="Crash Course Book Cover"
             className="w-[240px] md:w-[300px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
           />
        </div>

        <div className="mb-8 flex justify-center">
            <Button href={AMAZON_LINK} target="_blank">Buy on Amazon</Button>
        </div>

        <p className="text-[16px] font-medium uppercase tracking-widest text-gray-500">
          A Founder's Journey to Saving Your Startup - and Sanity
        </p>
      </div>
    </section>
  );
};

export default Book;