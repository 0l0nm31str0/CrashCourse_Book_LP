import React, { useState } from 'react';
import Button from './Button';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[18px] font-semibold text-black group-hover:text-gray-700 transition-colors pr-8">
          {question}
        </span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-700 text-[16px] leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const items = [
    {
      question: "What's in the free chapter?",
      answer: "The introduction. Five pages. Why I wrote this book, what it cost me to learn these lessons, and what you'll get from reading it. Enough to know if this is for you."
    },
    {
      question: "Who is this book for?",
      answer: "Founders who are in the middle of it.\nFounders who are about to start.\nFounders who already failed and are wondering what went wrong.\nInvestors who want to understand what their portfolio companies aren't telling them.\n\nIf you've ever lied awake wondering whether you're building something or just breaking yourself - this is for you."
    },
    {
      question: "Who is this NOT for?",
      answer: "People looking for a step-by-step playbook.\nPeople who want to hear about hockey-stick growth.\nPeople who think startups are supposed to be fun.\n\nThis book is about the hard parts. If you're not ready for that, the free chapter will tell you."
    },
    {
      question: "What are Office Hours?",
      answer: "A monthly live Zoom call. I take questions from founders who've read the book. No pitch, no upsell - just real answers to real questions. Limited to 50 people per session so everyone gets a chance to ask.\n\nBook readers only."
    },
    {
      question: "What is The Founder List?",
      answer: "A private email I send once a month. Insights from my 50+ angel investments, deals I'm looking at, founders worth knowing, and lessons I don't share publicly.\n\nYou have to apply. I review every application personally. This isn't a growth hack - it's a filter for serious people."
    },
    {
      question: "What are the dinners?",
      answer: "I host private dinners in cities I'm visiting. 8-10 founders per table. No speakers, no sponsors, no agenda. Just dinner and conversation with people who are building things.\n\nApply through the book. I'll reach out if there's a dinner in your city."
    },
    {
      question: "Is Ricardo available for podcasts or speaking?",
      answer: "Yes. If you have a podcast, event, or publication and your audience includes founders or investors, reach out. There's a booking link on the thank you page after you get the free chapter or buy the book."
    }
  ];

  const AMAZON_LINK = "https://www.amazon.com/exec/obidos/ASIN/1637632967?tag=simonsayscom";

  return (
    <section className="w-full py-16 md:py-[100px] px-6 flex justify-center bg-[#F7F7F7]">
      <div className="w-full max-w-[700px]">
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-12 text-center">
          Questions
        </h2>
        <div className="bg-white px-6 md:px-8 border border-gray-200 mb-12">
          {items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="flex justify-center">
             <Button href={AMAZON_LINK} target="_blank">Get the book</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;