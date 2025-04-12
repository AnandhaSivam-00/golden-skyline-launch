import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  return <div className="flex flex-col min-h-screen relative overflow-hidden border-pattern">
      <Header />
      
      {/* Gold decorative corners */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-left bg-zinc-900"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-right transform rotate-90 bg-zinc-900"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-left transform -rotate-90"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-pattern bg-contain bg-no-repeat opacity-70 animate-fade-in-right transform rotate-180"></div>
      
      <main className="flex-grow pt-24 bg-zinc-900">
        <div className="container mx-auto px-4 py-10 relative z-10 bg-zinc-900">
          <EventHeader />
          <DecorativeDivider />
          <EventDetails />
          <DecorativeDivider />
          <VenueInfo />
          <DecorativeDivider />
          <EventFooter />
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;