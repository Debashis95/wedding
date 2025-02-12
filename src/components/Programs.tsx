import React from 'react';
import { motion } from 'framer-motion';
import { BellRing as Ring } from 'lucide-react';

const Programs = () => {
  const events = [
    {
      time: '10:00 AM',
      title: 'Wedding Ceremony',
      description: 'The ceremony will begin promptly at My Home',
      location: 'Mathsheali'
    },
    {
      time: '11:30 AM',
      title: 'Cocktail Hour',
      description: 'Join us for drinks and hors d\'oeuvres while we take photos',
      location: 'Pandal'
    },
    {
      time: '12:30 PM',
      title: 'Reception & Lunch',
      description: 'Celebration continues with lunch and entertainment',
      location: 'Pandal'
    },
    {
      time: '4:00 PM',
      title: 'Cake Cutting',
      description: 'Traditional cake cutting ceremony',
      location: 'Home'
    },
    {
      time: '4:30 PM',
      title: 'First Dance',
      description: 'The newlyweds\' first dance followed by open dancing',
      location: 'DJ Booth'
    },
    {
      time: '8:00 PM',
      title: 'Dinner',
      description: 'Send-off celebration for the happy couple',
      location: 'Main Entrance'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="programs">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Ring className="w-8 h-8 text-pink-500 mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Reception Day Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us as we celebrate our special day with love, joy, and cherished moments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-pink-200" />

            {/* Events */}
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 border-4 border-white" />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif text-gray-800">{event.title}</h3>
                      <span className="text-pink-500 font-medium">{event.time}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
