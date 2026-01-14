import React from 'react';
import Button from './Button';

const Problem: React.FC = () => {
  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-[#F7F7F7]">
      <div className="w-full max-w-[680px] text-center">
        <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.6] text-[#222]">
          <p>
            Most startup advice comes from people who won.
          </p>
          <p>
            They raised millions before launch. Found product-market fit in year one.
            Had the right co-founder, the right timing, the right investors.
          </p>
          <p>
            Then they wrote a book about "crushing it."
          </p>
          <p className="font-semibold pt-4">
            That advice doesn't help when:
          </p>
          <ul className="list-none space-y-4 pl-0 text-left md:text-center">
            <li>Your biggest customer just said they're not paying the invoice.</li>
            <li>Your co-founder wants out.</li>
            <li>You're four months from zero.</li>
            <li>You can't remember the last time you slept through the night.</li>
            <li>And you can't tell anyone - not your family, not your friends, 
            not your investors - how bad it actually is.</li>
          </ul>
          <div className="pt-12">
            <p className="text-2xl font-bold mb-8">There's no playbook for that. Until now.</p>
            <div className="flex justify-center">
                <Button href={AMAZON_LINK} target="_blank">Get the Survival Guide</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;