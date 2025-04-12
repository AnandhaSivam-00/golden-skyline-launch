
import React from 'react';

const EventHeader = () => {
  return (
    <header className="pt-8 pb-4 text-center animate-fade-in">
      <h1 className="text-white font-serif text-3xl md:text-4xl mb-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        You are Cordially invited for the
      </h1>
      <h2 className="text-white font-serif text-2xl md:text-3xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
        Launch of
      </h2>
      <h1 className="text-event-gold font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-2 tracking-wide animate-fade-in gold-gradient bg-clip-text text-transparent animate-shine" style={{ animationDelay: '0.6s' }}>
        Q DoTZ S.T.E.M. INDIA PVT LTD
      </h1>
      <p className="text-event-skyblue uppercase tracking-[0.3em] text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.8s' }}>
        REDEFINING DISRUPTIVE
      </p>
    </header>
  );
};

export default EventHeader;
