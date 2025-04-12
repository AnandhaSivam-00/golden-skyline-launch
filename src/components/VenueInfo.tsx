
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VenueInfo = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/TEMptDhJzCSRkx2J9', '_blank');
  };

  return (
    <div className="my-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
      <h2 className="text-event-gold font-serif text-3xl text-center mb-4">Venue</h2>
      <div className="flex flex-col items-center justify-center text-center space-y-4 text-white">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-event-skyblue" />
          <p className="text-xl md:text-2xl font-serif">Hotel Savera, 146, Dr. Radhakrishnan Road, Mylapore</p>
        </div>
        <p className="text-xl md:text-2xl font-serif">Chennai - 600 004</p>
        
        <Button 
          onClick={openGoogleMaps}
          className="mt-4 bg-event-skyblue hover:bg-event-skyblue/80 text-event-dark flex items-center gap-2"
        >
          <Navigation className="w-4 h-4" />
          View on Map
        </Button>
      </div>
    </div>
  );
};

export default VenueInfo;
