
import React from 'react';

const DecorativeDivider = () => {
  return (
    <div className="flex items-center justify-center my-8 animate-fade-in">
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-event-gold to-transparent"></div>
      <div className="mx-4 text-event-gold">◆</div>
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-event-gold to-transparent"></div>
    </div>
  );
};

export default DecorativeDivider;
