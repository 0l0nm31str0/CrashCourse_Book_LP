import React from 'react';
import Button from './Button';

const UpsellPreview: React.FC = () => {
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-black text-white">
      <div className="w-full max-w-[720px] text-center">
        
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-4">
          For readers who want to go deeper
        </h2>
        
        <p className="text-[20px] text-gray-400 mb-16">
          The book is the starting point.
          <br />
          What comes after is access.
        </p>
        
        <div className="space-y-16">
            {/* Tier 1 */}
            <div className="space-y-4">
                <h3 className="text-[#FFD700] text-sm tracking-[0.2em] uppercase font-bold">Office Hours</h3>
                <p className="text-[18px] leading-relaxed text-gray-300">
                    Monthly live Q&A with Ricardo.
                    <br />
                    60 minutes. No pitch. Bring your real questions.
                    <br />
                    Limited to 50 founders per session.
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Book readers only</p>
            </div>

            <div className="w-12 h-px bg-gray-800 mx-auto"></div>

            {/* Tier 2 */}
            <div className="space-y-4">
                <h3 className="text-[#FFD700] text-sm tracking-[0.2em] uppercase font-bold">The Founder List</h3>
                <p className="text-[18px] leading-relaxed text-gray-300">
                    A private email list. Not a newsletter.
                    <br />
                    Once a month: What I'm seeing across 50+ portfolio companies.
                    <br />
                    Deals I'm looking at and why. Founders I think you should know.
                    <br />
                    Lessons I'm not posting publicly.
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Application required</p>
            </div>

            <div className="w-12 h-px bg-gray-800 mx-auto"></div>

            {/* Tier 3 */}
            <div className="space-y-4">
                <h3 className="text-[#FFD700] text-sm tracking-[0.2em] uppercase font-bold">Crash Course Dinners</h3>
                <p className="text-[18px] leading-relaxed text-gray-300">
                    8 founders. One table. No agenda.
                    <br />
                    Private dinners in select cities.
                    <br />
                    Real conversation with people building real things.
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Apply for a seat</p>
            </div>
        </div>

        <div className="mt-16 pt-16 border-t border-gray-900">
            <p className="text-[20px] text-white font-medium mb-6">
                None of this is for sale.
                <br />
                It's for founders who read the book and want more.
                <br />
                Start here.
            </p>
            <div className="flex justify-center">
                <Button href={AMAZON_LINK} target="_blank" variant="primary">Get the book first</Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default UpsellPreview;