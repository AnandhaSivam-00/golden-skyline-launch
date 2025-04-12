
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return <header className="py-4 px-6 border-b border-event-gold/20 fixed w-full top-0 z-50 backdrop-blur-sm bg-slate-950">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/daf1d81c-d29d-4488-9978-90668dafd799.png" alt="QDotZ Logo" className="h-12 w-auto animate-fade-in" />
          <h1 className="text-event-gold font-serif text-2xl font-bold animate-fade-in">QDotZ</h1>
        </div>
      </div>
    </header>;
};
export default Header;
