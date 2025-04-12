
import React from 'react';

const EventHeader = () => {
  return (
    <header className="pt-8 pb-4 text-center">
      <h1 
        className="text-white font-serif text-3xl md:text-4xl mb-3 animate-fade-in" 
        style={{
          animationDelay: '0.2s'
        }}
      >
        You are Cordially invited for the
      </h1>
      <h2 
        className="text-white font-serif text-2xl md:text-3xl animate-fade-in" 
        style={{
          animationDelay: '0.4s'
        }}
      >
        Launch of
      </h2>
      <h1 
        style={{
          animationDelay: '0.6s',
          background: 'linear-gradient(90deg, #D4AF37 0%, #F9DF74 50%, #D4AF37 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shine 8s ease-in-out infinite, fade-in 0.6s ease-out'
        }} 
        className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-2 tracking-wide text-center lg:text-5xl"
      >
        Q DoTZ S.T.E.M. INDIA PVT LTD
      </h1>
      <p 
        className="text-event-skyblue uppercase tracking-[0.3em] text-sm md:text-base animate-fade-in" 
        style={{
          animationDelay: '0.8s'
        }}
      >
        REDEFINING DISRUPTIVE
      </p>
    </header>
  );
};

export default EventHeader;
