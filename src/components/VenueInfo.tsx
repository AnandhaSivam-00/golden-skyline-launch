
import React from 'react';
import { MapPin } from 'lucide-react';

const VenueInfo = () => {
  return (
    <div className="my-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
      <h2 className="text-event-gold font-serif text-3xl text-center mb-4">Venue</h2>
      <div className="flex flex-col items-center justify-center text-center space-y-2 text-white">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-event-skyblue" />
          <p className="text-xl md:text-2xl font-serif">Hotel Savera, 146, Dr. Radhakrishnan Road, Mylapore</p>
        </div>
        <p className="text-xl md:text-2xl font-serif">Chennai - 600 004</p>
      </div>
    </div>
  );
};

export default VenueInfo;
