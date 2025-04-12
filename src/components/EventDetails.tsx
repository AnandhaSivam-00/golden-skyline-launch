import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
const EventDetails = () => {
  return <div className="my-12 max-w-3xl mx-auto px-4">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-white font-serif text-2xl md:text-3xl mb-2">
          & 
        </h2>
        <h2 className="text-white font-serif text-2xl md:text-3xl">
          Onboarding
        </h2>
        <h3 className="text-event-gold font-serif text-2xl md:text-3xl lg:text-4xl mt-6 animate-fade-in-right" style={{
        animationDelay: '0.3s'
      }}>
          The Eminent Advisory Board - The Prime Engines
        </h3>
      </div>

      <div className="text-center mb-10 animate-fade-in" style={{
      animationDelay: '0.5s'
    }}>
        <p className="text-white font-serif text-xl md:text-2xl mb-4">
          In the presence of
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gold-gradient bg-clip-text animate-shine text-amber-300">
          Dr K Thyagarajah
        </h2>
        <p className="text-white text-lg md:text-xl">
          Director Projects - M/s Q DoTZ S.T.E.M. India Pvt Ltd
        </p>
      </div>

      <div style={{
      animationDelay: '0.7s'
    }} className="backdrop-blur-sm p-6 rounded-lg border border-event-gold/20 shadow-lg animate-fade-in gold-gradient bg-clip-text bg-yellow-300">
        <div className="flex items-center justify-center gap-3 mb-4 text-event-gold">
          <Calendar className="w-5 h-5" />
          <p className="font-bold text-xl md:text-2xl">Date : 14<sup>th</sup> April 2025</p>
          <Clock className="w-5 h-5 ml-3" />
          <p className="font-bold text-xl md:text-2xl">Time : 10:00 AM</p>
        </div>
      </div>
    </div>;
};
export default EventDetails;