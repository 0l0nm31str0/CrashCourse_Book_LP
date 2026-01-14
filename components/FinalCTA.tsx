import React from 'react';
import Button from './Button';

interface FinalCTAProps {
  onOpenPopup: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenPopup }) => {
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-20 md:py-[120px] px-6 flex justify-center bg-white border-t border-gray-100">
      <div className="w-full max-w-[700px] text-center">
        
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-6">
          The founder journey is lonely enough.
        </h2>
        
        <p className="text-[20px] text-gray-500 mb-12">
          This book won't make it easier.
          <br />
          But it might make it less alone.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
           <Button href={AMAZON_LINK} target="_blank">Buy the book</Button>
           <Button onClick={onOpenPopup} variant="secondary" className="!text-black !border-black hover:!bg-black hover:!text-white">Get first chapter for free</Button>
        </div>
        
        <div className="pt-2">
           <p className="text-gray-400 text-sm">
             Available on Amazon, Audible, and Kindle.
           </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;