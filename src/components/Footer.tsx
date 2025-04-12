
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-event-dark border-t border-event-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/daf1d81c-d29d-4488-9978-90668dafd799.png" 
              alt="QDotZ Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white text-sm">&copy; QDotZ Private Limited - 2025. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
