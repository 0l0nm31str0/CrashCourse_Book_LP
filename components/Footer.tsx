import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 bg-black text-[#888] border-t border-[#222]">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">About Ricardo</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        
        <div className="text-right">
          <p>© 2026 Ricardo Jiménez. All rights reserved.</p>
          <p className="text-xs mt-1 text-[#555]">Published by Forefront Books.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;