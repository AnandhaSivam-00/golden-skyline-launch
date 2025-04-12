import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  return <motion.div 
    className="my-12 max-w-3xl mx-auto px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-serif text-2xl md:text-3xl mb-2">
          & 
        </h2>
        <h2 className="text-white font-serif text-2xl md:text-3xl">
          Onboarding
        </h2>
        <motion.h3 
          className="text-event-gold font-serif text-2xl md:text-3xl lg:text-4xl mt-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          The Eminent Advisory Board - The Prime Engines
        </motion.h3>
      </motion.div>

      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p className="text-white font-serif text-xl md:text-2xl mb-4">
          In the presence of
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-event-gold">
          Dr K Thyagarajah
        </h2>
        <p className="text-white text-lg md:text-xl">
          Director Projects - M/s Q DoTZ S.T.E.M. India Pvt Ltd
        </p>
      </motion.div>

      <motion.div 
        className="backdrop-blur-sm p-6 border border-event-gold/20 shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4 text-event-gold">
          <Calendar className="w-5 h-5" />
          <motion.p 
            className="font-bold text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Date : 14<sup>th</sup> April 2025
          </motion.p>
          <Clock className="w-5 h-5 ml-3" />
          <motion.p 
            className="font-bold text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Time : 10:00 AM
          </motion.p>
        </div>
      </motion.div>
    </motion.div>;
};

export default EventDetails;