
import React from 'react';

const EventFooter = () => {
  return (
    <footer className="mb-12 px-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
      <div className="text-center">
        <p className="text-white font-serif text-xl mb-2">Join us in the <span className="text-event-gold">Transformative Leap</span> towards</p>
        <p className="text-event-gold font-bold tracking-widest text-lg md:text-xl mb-8">
          REDEFINING DISRUPTIVE ENVIRONMENT
        </p>
        
        <div className="bg-event-gold/80 text-event-dark max-w-lg mx-auto py-4 px-6 rounded shadow-md animate-float">
          <p className="font-semibold mb-2">Dress - Formal | Business Attire</p>
          <p className="font-semibold">R.S.V.P - Mr. Harinivas B S - 9944337399</p>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;
