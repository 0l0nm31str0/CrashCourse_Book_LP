import React, { useState, useEffect } from 'react';
import Button from './Button';

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already closed or submitted the popup
    const hasSeen = localStorage.getItem('crashCoursePopupSeen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('crashCoursePopupSeen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call and close
    setTimeout(() => {
        handleClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[500px] p-8 md:p-12 shadow-2xl transform transition-all animate-fade-in-up">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors p-2"
          aria-label="Close popup"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-[28px] font-bold mb-4 leading-tight text-center md:text-left">
              Read the first chapter free
            </h3>
            <p className="text-[18px] text-gray-600 mb-8 leading-relaxed text-center md:text-left">
              Five pages. No fluff. See if this book is the survival guide you need right now.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full h-[50px] px-4 border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-black rounded-none"
                required
                autoFocus
              />
              <Button type="submit" variant="black" fullWidth>
                Send me the chapter
              </Button>
            </form>
            <p className="text-xs text-center text-gray-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
             <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
             </div>
             <h3 className="text-[24px] font-bold mb-2">Check your inbox</h3>
             <p className="text-gray-600">The chapter is on its way.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;