import React from 'react';
import Button from './Button';

const Testimonials: React.FC = () => {
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-[#F7F7F7]">
      <div className="w-full max-w-[720px] space-y-16 text-center">
        
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-12">
          What founders and investors are saying
        </h2>

        {/* Testimonial 1 */}
        <div className="space-y-4">
          <p className="text-[20px] md:text-[24px] italic leading-relaxed text-[#222]">
            "I recommend this book to all startup founders. It's about you 
            and your life. It's about finding meaning and purpose and joy 
            in the journey."
          </p>
          <div className="font-medium">
            <p className="text-black font-bold tracking-wide uppercase text-sm">Paul Allen</p>
            <p className="text-gray-600 text-sm">CEO of Soar AI Studio</p>
            <p className="text-gray-600 text-sm">Cofounder of Ancestry.com</p>
          </div>
        </div>

        <div className="w-16 h-px bg-gray-300 mx-auto"></div>

        {/* Testimonial 2 */}
        <div className="space-y-4">
          <p className="text-[20px] md:text-[24px] italic leading-relaxed text-[#222]">
            "Ricardo's wisdom and heart-first approach helped us earn $8M 
            with only $2M raised during the bear market."
          </p>
          <div className="font-medium">
            <p className="text-black font-bold tracking-wide uppercase text-sm">Snowball Team</p>
          </div>
        </div>

        <div className="w-16 h-px bg-gray-300 mx-auto"></div>

        {/* Testimonial 3 */}
        <div className="space-y-4">
          <p className="text-[20px] md:text-[24px] italic leading-relaxed text-[#222]">
            "You'll never read a book so raw about challenge, sacrifice, 
            failure, and triumph. It's SO refreshing to cut the BS and 
            be honest about what building a company actually feels like."
          </p>
          <div className="font-medium">
            <p className="text-black font-bold tracking-wide uppercase text-sm">Founder</p>
            <p className="text-gray-600 text-sm">Series A startup</p>
          </div>
        </div>
        
        <div className="pt-8 flex justify-center">
            <Button href={AMAZON_LINK} target="_blank">Join thousands of founders</Button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;