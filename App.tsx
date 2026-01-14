import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Trailer from './components/Trailer';
import Problem from './components/Problem';
import Book from './components/Book';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import UpsellPreview from './components/UpsellPreview';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Popup from './components/Popup';

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Check if user has already closed or submitted the popup
    const hasSeen = localStorage.getItem('crashCoursePopupSeen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    localStorage.setItem('crashCoursePopupSeen', 'true');
  };

  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-[#FFD700] selection:text-black font-sans relative">
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <Hero onOpenPopup={handleOpenPopup} />
      <Trailer />
      <Problem />
      <Book />
      <Author />
      <Testimonials />
      <Offer />
      <UpsellPreview />
      <FAQ />
      <FinalCTA onOpenPopup={handleOpenPopup} />
      <Footer />
    </div>
  );
};

export default App;