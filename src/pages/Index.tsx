
import React, { useEffect } from 'react';
import EventHeader from '../components/EventHeader';
import DecorativeDivider from '../components/DecorativeDivider';
import EventDetails from '../components/EventDetails';
import VenueInfo from '../components/VenueInfo';
import EventFooter from '../components/EventFooter';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Q DoTZ S.T.E.M. India Pvt Ltd - Launch Event";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden border-pattern">
      {/* Gold decorative corners */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-left"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-right transform rotate-90"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-left transform -rotate-90"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-right transform rotate-180"></div>
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        <EventHeader />
        <DecorativeDivider />
        <EventDetails />
        <DecorativeDivider />
        <VenueInfo />
        <DecorativeDivider />
        <EventFooter />
      </div>
    </div>
  );
};

export default Index;
