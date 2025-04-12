
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

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
          <div className="flex justify-center items-center gap-2 font-semibold">
            <p>R.S.V.P -</p>
            <Button variant="outline" className="bg-event-dark text-white border-white/20 hover:bg-event-dark/80 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Contact Mr. Harinivas B S - 9944337399
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;
