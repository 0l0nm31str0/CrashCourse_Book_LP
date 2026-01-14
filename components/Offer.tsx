import React from 'react';
import Button from './Button';
import EmailForm from './EmailForm';

const Offer: React.FC = () => {
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-white">
      <div className="w-full max-w-[1000px] text-center">
        
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-8 uppercase tracking-tight">
          Get the Book
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {/* Left Column: Print Edition */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow">
             <h3 className="text-2xl font-bold mb-2">Print Edition</h3>
             <p className="text-gray-600 mb-6">Paperback and Hardcover available.</p>
             <div className="space-y-3 w-full">
               <Button href={AMAZON_LINK} target="_blank" variant="black" fullWidth>Buy Hardcover</Button>
               <Button href={AMAZON_LINK} target="_blank" variant="secondary" className="!text-black !border-gray-300 hover:!border-black" fullWidth>Buy Paperback</Button>
             </div>
             <p className="text-xs text-gray-400 mt-4">Free shipping with Prime.</p>
          </div>

          {/* Right Column: Free Chapter */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow">
             <h3 className="text-2xl font-bold mb-2">Free Chapter</h3>
             <p className="text-gray-600 mb-6">Read the first chapter before you buy.</p>
             <div className="w-full mt-auto mb-auto">
               <EmailForm buttonLabel="Get Chapter 1" className="!max-w-none" />
             </div>
             <p className="text-xs text-gray-400 mt-4">Instant PDF download.</p>
          </div>
        </div>

        <div className="mt-12 text-gray-500">
           <p className="mb-4 font-medium">Bulk orders for teams?</p>
           <a href="#" className="underline hover:text-black">Contact us for wholesale pricing</a>
        </div>

      </div>
    </section>
  );
};

export default Offer;